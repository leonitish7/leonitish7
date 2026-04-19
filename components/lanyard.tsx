/* eslint-disable react/no-unknown-property */
"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { Environment, Html, Lightformer } from "@react-three/drei"
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"
import * as THREE from "three"

extend({ MeshLineGeometry, MeshLineMaterial })

type Vec3 = [number, number, number]

interface LanyardProps {
  position?: Vec3
  gravity?: Vec3
  fov?: number
  transparent?: boolean
}

export default function Lanyard({
  position = [0, 0, 22],
  gravity = [0, -40, 0],
  fov = 18,
  transparent = true,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[820px] overflow-hidden rounded-xl bg-transparent sm:h-[500px]">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight intensity={1.1} position={[2.5, 2.5, 3]} />

        <Physics gravity={gravity} timeStep={isMobile ? 1 / 40 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>

        <Environment blur={0.7}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[60, 0.1, 1]}
          />
          <Lightformer
            intensity={2.6}
            color="white"
            position={[1.2, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[40, 0.1, 1]}
          />
          <Lightformer
            intensity={2.6}
            color="white"
            position={[-1.2, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[40, 0.1, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  )
}

function Band({
  maxSpeed = 45,
  minSpeed = 2,
  isMobile = false,
}: {
  maxSpeed?: number
  minSpeed?: number
  isMobile?: boolean
}) {
  const band = useRef<any>(null)
  const fixed = useRef<any>(null)
  const j1 = useRef<any>(null)
  const j2 = useRef<any>(null)
  const j3 = useRef<any>(null)
  const card = useRef<any>(null)

  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()

  const segmentProps = { canSleep: true, angularDamping: 5, linearDamping: 4 }
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  )

  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.65])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.65])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.65])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.35, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab"
      return () => {
        document.body.style.cursor = "auto"
      }
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged instanceof THREE.Vector3) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        )
      })

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32))

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.2, z: ang.z })
    }
  })

  curve.curveType = "chordal"

  return (
    <>
      <group position={[0, 4.6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" colliders={false} />

        <RigidBody position={[0.42, 0, 0]} ref={j1} {...segmentProps} colliders={false}>
          <BallCollider args={[0.09]} />
        </RigidBody>
        <RigidBody position={[0.84, 0, 0]} ref={j2} {...segmentProps} colliders={false}>
          <BallCollider args={[0.09]} />
        </RigidBody>
        <RigidBody position={[1.26, 0, 0]} ref={j3} {...segmentProps} colliders={false}>
          <BallCollider args={[0.09]} />
        </RigidBody>

        <RigidBody
          position={[1.92, -0.34, 0]}
          ref={card}
          {...segmentProps}
          colliders={false}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[1.25, 1.65, 0.06]} />

          <group
            position={[0, -1.3, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId)
              drag(false)
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId)
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            }}
          >
            <mesh>
              <boxGeometry args={[2.45, 3.25, 0.11]} />
              <meshPhysicalMaterial color="#fafafa" roughness={0.26} metalness={0.06} clearcoat={1} clearcoatRoughness={0.12} />
            </mesh>

            <mesh position={[0, 1.38, 0.055]}>
              <planeGeometry args={[2.05, 0.38]} />
              <meshStandardMaterial color="#e5e7eb" />
            </mesh>

            <mesh position={[0, 1.82, 0.05]}>
              <ringGeometry args={[0.16, 0.24, 32]} />
              <meshStandardMaterial color="#a1a1aa" metalness={0.75} roughness={0.38} />
            </mesh>

            <Html transform position={[0, -0.18, 0.08]} scale={0.024} occlude={false}>
              <motion.div className="pointer-events-none flex h-[620px] w-[560px] items-center rounded-[28px] bg-zinc-950/80 px-8 py-10 backdrop-blur-sm">
                <pre className="font-mono text-[26px] font-bold leading-[1.3] tracking-tight">
                  <span className="text-[#569CD6]">class</span>{" "}
                  <span className="text-[#4EC9B0]">Engineer</span>{" "}
                  <span className="text-[#D4D4D4]">{"{"}</span>
                  {"\n"}
                  <span className="text-[#9CDCFE]"> name</span>
                  <span className="text-[#D4D4D4]"> = </span>
                  <span className="text-[#CE9178]">"Nitish Kumar"</span>
                  <span className="text-[#D4D4D4]">;</span>
                  {"\n"}
                  <span className="text-[#9CDCFE]"> skills</span>
                  <span className="text-[#D4D4D4]"> = [</span>
                  <span className="text-[#CE9178]">"Next.js"</span>
                  <span className="text-[#D4D4D4]">, </span>
                  <span className="text-[#CE9178]">"AI"</span>
                  <span className="text-[#D4D4D4]">];</span>
                  {"\n"}
                  <span className="text-[#9CDCFE]"> logic</span>
                  <span className="text-[#D4D4D4]"> = </span>
                  <span className="text-[#569CD6]">true</span>
                  <span className="text-[#D4D4D4]">;</span>
                  {"\n"}
                  <span className="text-[#D4D4D4]">{"}"}</span>
                </pre>
              </motion.div>
            </Html>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#a1a1aa"
          depthTest={false}
          resolution={isMobile ? [1000, 1800] : [1000, 1000]}
          lineWidth={1.2}
          transparent
          opacity={0.95}
        />
      </mesh>
    </>
  )
}
