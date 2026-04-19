'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    points: THREE.Points[]
    materials: THREE.PointsMaterial[]
    glowTexture: THREE.Texture
    animationId: number
  } | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return 

    const SEPARATION = 150
    const AMOUNTX = 40
    const AMOUNTY = 60

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0xffffff, 2000, 10000)

    const camera = new THREE.PerspectiveCamera(60, 1, 1, 10000)
    camera.position.set(0, 355, 1220)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(scene.fog.color, 0)

    container.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const colors: number[] = []

    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = 64
    glowCanvas.height = 64
    const glowCtx = glowCanvas.getContext('2d')
    if (!glowCtx) return
    const gradient = glowCtx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.35, 'rgba(255,255,255,0.8)')
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.18)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')
    glowCtx.fillStyle = gradient
    glowCtx.fillRect(0, 0, 64, 64)
    const glowTexture = new THREE.CanvasTexture(glowCanvas)
    glowTexture.needsUpdate = true

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
        const y = 0
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2

        positions.push(x, y, z)

        if (theme === 'dark') {
          // Push highlights near pure white for a more luminous glow.
          colors.push(0.97, 0.99, 1)
        } else {
          // Stronger cool tone to keep dots bright in light mode.
          colors.push(0.28, 0.38, 0.52)
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 10.5,
      vertexColors: true,
      transparent: true,
      opacity: theme === 'dark' ? 1 : 0.94,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: glowTexture,
    })

    const glowMaterial = new THREE.PointsMaterial({
      size: 23,
      vertexColors: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.62 : 0.34,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: glowTexture,
    })

    const points = new THREE.Points(geometry, material)
    const glowPoints = new THREE.Points(geometry, glowMaterial)
    glowPoints.renderOrder = 0
    points.renderOrder = 1
    scene.add(glowPoints)
    scene.add(points)

    let count = 0
    let animationId = 0

    const handleResize = () => {
      const width = container.clientWidth || window.innerWidth
      const height = container.clientHeight || window.innerHeight
      camera.aspect = width / Math.max(1, height)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const positionAttribute = geometry.attributes.position as THREE.BufferAttribute
      const positionArray = positionAttribute.array as Float32Array

      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3
          positionArray[index + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50
          i += 1
        }
      }

      positionAttribute.needsUpdate = true

      // Subtle shimmer pulse for glow intensity.
      glowMaterial.opacity = (theme === 'dark' ? 0.58 : 0.3) + Math.sin(count * 1.2) * 0.08

      renderer.render(scene, camera)
      count += 0.1
    }

    handleResize()
    animate()
    window.addEventListener('resize', handleResize)

    sceneRef.current = {
      scene,
      camera,
      renderer,
      points: [points, glowPoints],
      materials: [material, glowMaterial],
      glowTexture,
      animationId,
    }

    return () => {
      window.removeEventListener('resize', handleResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)
        sceneRef.current.points[0]?.geometry.dispose()
        sceneRef.current.materials.forEach((m) => m.dispose())
        sceneRef.current.glowTexture.dispose()

        sceneRef.current.renderer.dispose()

        if (container.contains(sceneRef.current.renderer.domElement)) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }
      }
    }
  }, [theme])

  return <div ref={containerRef} className={cn('pointer-events-none absolute inset-0 -z-10', className)} {...props} />
}
