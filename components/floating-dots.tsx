"use client"

import { useEffect, useRef } from "react"

interface FloatingDotsConfig {
  dotColor?: string
  lineColor?: string
  backgroundColor?: string
  dotCount?: number
  connectionDistance?: number
  mouseRadius?: number
}

export function FloatingDots({
  dotColor = "#8b5cf6",
  lineColor = "#6366f1",
  backgroundColor = "#0a0a12",
  dotCount = 104,
  connectionDistance = 140, 
  mouseRadius = 180,
}: FloatingDotsConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const dotsRef = useRef<any[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")  
    if (!ctx) return

    let W = 0
    let H = 0
    let time = 0
    let dots: any[] = [] 

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return { r, g, b }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth * dpr
      H = canvas.offsetHeight * dpr
      canvas.width = W
      canvas.height = H
      ctx.scale(1, 1)
    }

    const createDots = () => {
      dots = []
      const dpr = window.devicePixelRatio || 1
      const count = Math.round((dotCount * W * H) / (1920 * 1080 * dpr * dpr))

      for (let i = 0; i < Math.max(count, 30); i++) {
        let r
        const sizeRand = Math.random()
        if (sizeRand < 0.1) {
          r = Math.random() * 1.2 + 0.6
        } else if (sizeRand > 0.85) {
          r = Math.random() * 1.8 + 2.2
        } else {
          r = Math.random() * 2.2 + 1.2
        }

        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: r,
          phase: Math.random() * Math.PI * 2,
        })
      }
      dotsRef.current = dots
    }

    const draw = () => {
      time += 0.003
      ctx.clearRect(0, 0, W, H)

      const dpr = window.devicePixelRatio || 1
      const mx = mouseRef.current.x * dpr
      const my = mouseRef.current.y * dpr
      const connDist = connectionDistance * dpr
      const mouseRad = mouseRadius * dpr

      const dotRgb = hexToRgb(dotColor)
      const lineRgb = hexToRgb(lineColor)

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        d.x += d.vx + Math.sin(time + d.phase) * 0.15
        d.y += d.vy + Math.cos(time * 0.8 + d.phase) * 0.15

        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0

        const dmx = d.x - mx
        const dmy = d.y - my
        const distM = Math.sqrt(dmx * dmx + dmy * dmy)
        if (distM < mouseRad && distM > 0) {
          const force = (1 - distM / mouseRad) * 1.5
          d.x += (dmx / distM) * force
          d.y += (dmy / distM) * force
        }

        const pulse = 0.7 + 0.3 * Math.sin(time * 2 + d.phase)
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r * dpr * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${dotRgb.r},${dotRgb.g},${dotRgb.b},${0.6 + pulse * 0.4})`
        ctx.fill()
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connDist) {
            const alpha = (1 - dist / connDist) * 0.35
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(${lineRgb.r},${lineRgb.g},${lineRgb.b},${alpha})`
            ctx.lineWidth = 0.8 * dpr
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    resize()
    createDots()
    draw()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", () => {
      resize()
      createDots()
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dotColor, lineColor, dotCount, connectionDistance, mouseRadius])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ backgroundColor }}
    />
  )
}
