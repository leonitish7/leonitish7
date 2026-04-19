"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Lanyard from "@/components/lanyard"
import GradientText from "@/components/GradientText"
import { FloatingDots } from "@/components/floating-dots"

const roles = ["building interfaces", "exploring systems", "breaking barriers", "forging ideas", "crafting code"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Floating dots background */}
      <div className="absolute inset-0 z-0">
        <FloatingDots
          dotColor="#8b5cf6"
          lineColor="#6366f1"
          backgroundColor="transparent"
          dotCount={80}
          connectionDistance={140}
          mouseRadius={180}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.35rem] text-balance">
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="inline"
                >
                  Software Engineer
                </GradientText>
                <br />
                Crafting <span className="whitespace-nowrap">Cutting-Edge</span> Innovative Solutions
                <span
                  className="mt-1 block bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              I&apos;m a passionate Software Engineer with a strong focus on building scalable, high-performance web
              applications and crafting seamless user experiences. I specialize in developing Full-Stack solutions
              using modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">View Project</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <Link
                href="/introduction"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
              >
                <span>introduction</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - Lanyard */}
          <div className="relative animate-scale-in stagger-4">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
        </div>
        </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6 z-10">
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
