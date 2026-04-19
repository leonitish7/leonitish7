"use client"

import {
  Atom,
  Braces,
  Code2,
  Server,
  Database,
  Cable,
  Palette,
  PanelsTopLeft,
  Boxes,
  Wind,
  Table2,
  Container,
  Network,
  Cloud,
  Layers3,
} from "lucide-react"
import CardStackSlider from "@/components/card-stack-slider"
import GradientText from "@/components/GradientText"
import MacbookScrollDemo from "@/components/macbook-scroll-demo"
import { OrbitalTechStack } from "@/components/orbital-tech-stack"
import { TechFluidCardStack } from "@/components/tech-fluid-card-stack"
import {
  GlassCard,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@/components/ui/glass-card"
import { ShiningText } from "@/components/ui/shining-text"
import LogoLoop from "@/components/LogoLoop"
import { DottedSurface } from "@/components/ui/dotted-surface"

const logoItems = [
  { node: <Atom size={40} />, title: "React", href: "https://react.dev" },
  { node: <Braces size={40} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <Server size={40} />, title: "Node.js", href: "https://nodejs.org" },
  { node: <Database size={40} />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <Cable size={40} />, title: "Express", href: "https://expressjs.com" },
  { node: <PanelsTopLeft size={40} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <Boxes size={40} />, title: "Redux", href: "https://redux.js.org" },
  { node: <Wind size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <Table2 size={40} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <Container size={40} />, title: "Docker", href: "https://www.docker.com" },
  { node: <Network size={40} />, title: "GraphQL", href: "https://graphql.org" },
  { node: <Cloud size={40} />, title: "AWS", href: "https://aws.amazon.com" },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 pt-4 pb-20 sm:pt-8 sm:pb-28">
      <div className="mx-auto max-w-7xl">
        <section
          aria-labelledby="technical-expertise-heading"
          className="relative isolate mb-8 flex min-h-[98svh] flex-col items-center justify-start overflow-hidden px-2 pt-2 sm:mb-10 sm:min-h-[102svh] sm:px-4 sm:pt-3 lg:px-6 animate-fade-in-up"
        >
          <DottedSurface className="opacity-35" />
          <h2
            id="technical-expertise-heading"
            className="relative z-10 -mt-4 text-center text-3xl font-bold tracking-tight sm:-mt-5 sm:text-4xl lg:text-5xl"
          >
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Technical Expertise
            </GradientText>
          </h2>
          <p className="relative z-10 mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-10 sm:text-base">
            Crafting responsive, high-performance user interfaces with Next.js and Framer Motion. Building secure,
            scalable server-side logic and managing complex database architectures. Leveraging deep knowledge of DSA
            and System Design to solve complex computational problems.
          </p>
          <div className="relative z-10 mx-auto mt-8 w-full max-w-6xl">
            <TechFluidCardStack />
          </div>
          <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl sm:mt-16">
            <div className="relative h-20 overflow-hidden">
              <LogoLoop
                logos={logoItems}
                speed={60}
                direction="left"
                logoHeight={50}
                gap={40}
                pauseOnHover={true}
                fadeOut
                fadeOutColor="hsl(var(--background))"
                ariaLabel="Technology stack scrolling logos"
              />
            </div>
          </div>
        </section>

        <div className="mt-20 mb-10 sm:mt-28 sm:mb-14">
          <div className="space-y-3 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={8}
                showBorder={false}
                className="inline"
              >
                Featured Projects
              </GradientText>
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A collection of my software projects demonstrating my skills in both Full-Stack and AI/ML development.
            </p>
          </div>

          <div
            className="grid items-center gap-8 animate-fade-in-up stagger-2 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]"
            style={{ marginTop: "1.5cm" }}
          >
            <div className="max-w-md flex flex-col" style={{ rowGap: "2cm" }}>
              <div className="terminal-loader">
                <div className="terminal-header">
                  <div className="terminal-title">Modern Tech Stack</div>
                  <div className="terminal-controls">
                    <div className="control close" />
                    <div className="control minimize" />
                    <div className="control maximize" />
                  </div>
                </div>
                <div className="text">Built with React, Next.js, Node.js, and more</div>
              </div>

              <div className="terminal-loader">
                <div className="terminal-header">
                  <div className="terminal-title">Production Ready</div>
                  <div className="terminal-controls">
                    <div className="control close" />
                    <div className="control minimize" />
                    <div className="control maximize" />
                  </div>
                </div>
                <div className="text">Scalable, performant, and user-friendly applications</div>
              </div>

              <div className="terminal-loader">
                <div className="terminal-header">
                  <div className="terminal-title">Open Source</div>
                  <div className="terminal-controls">
                    <div className="control close" />
                    <div className="control minimize" />
                    <div className="control maximize" />
                  </div>
                </div>
                <div className="text">Available on GitHub for collaboration and learning</div>
              </div>
            </div>

            <div className="w-full lg:justify-self-center" style={{ marginTop: "1cm" }}>
              <CardStackSlider />
            </div>
          </div>
        </div>

        <div className="mb-10 space-y-6 sm:mb-14 sm:space-y-8" style={{ marginTop: "calc(2.5rem + 4cm)" }}>
          <div className="space-y-3 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={8}
                showBorder={false}
                className="inline"
              >
                Technical Roles
              </GradientText>
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              The roles I take on to design, build, and scale modern software products.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <MacbookScrollDemo />
          </div>
        </div>

        <section
          className="relative isolate mt-16 space-y-3 overflow-hidden rounded-3xl text-center animate-fade-in-up sm:mt-20"
          style={{ marginBottom: "7.2cm" }}
        >
          <div className="relative z-10 pt-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={8}
                showBorder={false}
                className="inline"
              >
                Services
              </GradientText>
            </h2>
            <div className="mx-auto mt-6 max-w-4xl px-2 sm:px-4">
              <ShiningText
                text="I provide a comprehensive range of services to help transform your ideas into impactful digital products. From modern frontend development to robust full-stack solutions, I deliver scalable, high-quality applications tailored to your business needs."
                className="text-center text-sm leading-relaxed sm:text-base"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-10 grid max-w-7xl gap-6 px-2 pb-6 sm:grid-cols-2 sm:px-4">
            <GlassCard className="before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(126,170,255,0.14),transparent_48%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_18%,transparent_36%,transparent_64%,rgba(255,255,255,0.08)_82%,transparent_100%)] after:opacity-50">
              <GlassCardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Code2 className="h-6 w-6" />
                </div>
                <GlassCardTitle>Frontend Development</GlassCardTitle>
                <GlassCardDescription>
                  Building responsive, performant user interfaces with modern frameworks like React, focusing on
                  accessibility and intuitive design.
                </GlassCardDescription>
              </GlassCardHeader>
            </GlassCard>

            <GlassCard className="before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(126,170,255,0.14),transparent_48%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_18%,transparent_36%,transparent_64%,rgba(255,255,255,0.08)_82%,transparent_100%)] after:opacity-50">
              <GlassCardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Server className="h-6 w-6" />
                </div>
                <GlassCardTitle>Backend Development</GlassCardTitle>
                <GlassCardDescription>
                  Creating robust and scalable API solutions with Node.js, Express, and other powerful server-side
                  technologies.
                </GlassCardDescription>
              </GlassCardHeader>
            </GlassCard>

            <GlassCard className="before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(126,170,255,0.14),transparent_48%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_18%,transparent_36%,transparent_64%,rgba(255,255,255,0.08)_82%,transparent_100%)] after:opacity-50">
              <GlassCardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-pink-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Palette className="h-6 w-6" />
                </div>
                <GlassCardTitle>UI/UX Design</GlassCardTitle>
                <GlassCardDescription>
                  Designing beautiful and functional user experiences that solve real user problems and enhance
                  engagement.
                </GlassCardDescription>
              </GlassCardHeader>
            </GlassCard>

            <GlassCard className="before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(126,170,255,0.14),transparent_48%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_18%,transparent_36%,transparent_64%,rgba(255,255,255,0.08)_82%,transparent_100%)] after:opacity-50">
              <GlassCardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <Layers3 className="h-6 w-6" />
                </div>
                <GlassCardTitle>Full-Stack Solutions</GlassCardTitle>
                <GlassCardDescription>
                  Delivering end-to-end web applications with comprehensive testing, deployment, and maintenance
                  strategies.
                </GlassCardDescription>
              </GlassCardHeader>
            </GlassCard>
          </div>
        </section>

        <OrbitalTechStack />
      </div>
    </section>
  )
}
