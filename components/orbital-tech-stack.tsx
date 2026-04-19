"use client"

import { useState } from "react"
import { motion } from "motion/react"
import type { IconType } from "react-icons"
import ShinyText from "@/components/ShinyText"
import {
  FaLinkedin,
  FaFigma,
  FaAws,
  FaGithub,
  FaPython,
  FaJava,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa"
import {
  SiOpenai,
  SiKotlin,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
} from "react-icons/si"

interface IconData {
  icon: IconType
  label: string
  color: string
}

const innerIcons: IconData[] = [
  { icon: FaFigma, label: "Figma", color: "text-pink-500" },
  { icon: FaAws, label: "AWS", color: "text-orange-500" },
  { icon: SiOpenai, label: "ChatGPT", color: "text-emerald-500" },
  { icon: FaGithub, label: "GitHub", color: "text-white" },
]

const middleIcons: IconData[] = [
  { icon: FaPython, label: "Python", color: "text-blue-400" },
  { icon: FaJava, label: "Java", color: "text-red-500" },
  { icon: SiKotlin, label: "Kotlin", color: "text-purple-500" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { icon: SiCplusplus, label: "C++", color: "text-indigo-400" },
]

const outerIcons: IconData[] = [
  { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: FaCss3Alt, label: "CSS3", color: "text-blue-400" },
  { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-600" },
]

interface OrbitProps {
  radius: number
  duration: number
  icons: IconData[]
  reverse?: boolean
  isPaused: boolean
  onHover: () => void
  onHoverEnd: () => void
}

function toPx(value: number): string {
  return `${value.toFixed(3)}px`
}

function Orbit({ radius, duration, icons, reverse = false, isPaused, onHover, onHoverEnd }: OrbitProps) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="relative rounded-full border border-slate-700/30"
        style={{
          width: radius * 2,
          height: radius * 2,
          animation: `orbit-spin ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {icons.map((item, i) => {
          const angle = (i / icons.length) * 360
          const angleRad = (angle * Math.PI) / 180
          const x = Math.cos(angleRad) * radius
          const y = Math.sin(angleRad) * radius

          return (
            <div
              key={item.label}
              className="pointer-events-auto absolute"
              style={{
                left: toPx(radius + x),
                top: toPx(radius + y),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  animation: `orbit-spin ${duration}s linear infinite ${reverse ? "normal" : "reverse"}`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                <motion.div
                  className="cursor-pointer"
                  whileHover={{
                    scale: 1.28,
                    filter: [
                      "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 24px rgba(255,255,255,0.85))",
                      "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                    ],
                    transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  onMouseEnter={onHover}
                  onMouseLeave={onHoverEnd}
                  title={item.label}
                >
                  <div className={`flex items-center justify-center ${item.color}`}>
                    <item.icon size={30} />
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function OrbitalTechStack() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative mt-16 flex min-h-[62svh] flex-col items-start justify-start gap-6 overflow-visible bg-transparent pl-2 sm:mt-20 sm:pl-8 lg:flex-row lg:items-center lg:gap-10 lg:pl-12">
      <div className="pointer-events-none absolute left-[35%] top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/15 blur-[140px]" />

      <div className="relative flex h-[420px] w-[420px] scale-[0.52] items-center justify-center transition-transform duration-300 sm:h-[460px] sm:w-[460px] sm:scale-75 md:scale-95 lg:scale-100">
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="flex cursor-pointer items-center justify-center"
            whileHover={{
              scale: 1.2,
              filter: [
                "drop-shadow(0 0 15px rgba(59,130,246,0.4))",
                "drop-shadow(0 0 40px rgba(59,130,246,0.9))",
                "drop-shadow(0 0 15px rgba(59,130,246,0.4))",
              ],
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            title="LinkedIn"
          >
            <div className="flex items-center justify-center text-blue-500">
              <FaLinkedin size={64} />
            </div>
          </motion.div>
        </div>

        <Orbit
          radius={84}
          duration={20}
          icons={innerIcons}
          isPaused={isPaused}
          onHover={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        />
        <Orbit
          radius={138}
          duration={35}
          icons={middleIcons}
          reverse
          isPaused={isPaused}
          onHover={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        />
        <Orbit
          radius={192}
          duration={50}
          icons={outerIcons}
          isPaused={isPaused}
          onHover={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        />
      </div>

      <div className="relative z-10 max-w-xl px-2 text-center lg:ml-[7.5rem] lg:px-0 xl:ml-[9.5rem]">
        <h3 className="relative inline-block text-3xl font-bold tracking-tight sm:text-4xl">
          <ShinyText
            text="Technologies I Use"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,#38bdf8_0%,#ffffff_25%,#a78bfa_50%,#38bdf8_75%,#ffffff_100%)] bg-[length:240%_100%] bg-clip-text text-transparent animate-gradient-shift"
          >
            Technologies I Use
          </span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          A curated set of tools and technologies I leverage to design, build, and scale modern applications. I
          continuously explore new advancements to stay at the forefront of development.
        </p>
      </div>

      <style jsx>{`
        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 5.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
