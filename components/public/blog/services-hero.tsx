"use client"

import { useMemo } from "react"
import GradientText from "@/components/GradientText"
import { motion } from "motion/react"
import type { IconType } from "react-icons"
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
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaVial,
  FaRocket,
  FaTools,
} from "react-icons/fa"
import { SiOpenai, SiKotlin, SiTypescript, SiCplusplus, SiJavascript, SiMongodb } from "react-icons/si"

interface SkillIcon {
  icon: IconType
  label: string
  color: string
}

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        d: `M-${380 - index * 5 * position} -${189 + index * 6}C-${
          380 - index * 5 * position
        } -${189 + index * 6} -${312 - index * 5 * position} ${216 - index * 6} ${
          152 - index * 5 * position
        } ${343 - index * 6}C${616 - index * 5 * position} ${470 - index * 6} ${
          684 - index * 5 * position
        } ${875 - index * 6} ${684 - index * 5 * position} ${875 - index * 6}`,
        strokeOpacity: 0.1 + index * 0.03,
        width: 0.5 + index * 0.03,
        duration: 20 + ((index * 7) % 10),
      })),
    [position],
  )

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="h-full w-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const marqueeSkills: SkillIcon[] = [
  { icon: FaLinkedin, label: "LinkedIn", color: "text-blue-500" },
  { icon: FaFigma, label: "Figma", color: "text-pink-500" },
  { icon: FaAws, label: "AWS", color: "text-orange-500" },
  { icon: SiOpenai, label: "ChatGPT", color: "text-emerald-500" },
  { icon: FaGithub, label: "GitHub", color: "text-white" },
  { icon: FaPython, label: "Python", color: "text-blue-400" },
  { icon: FaJava, label: "Java", color: "text-red-500" },
  { icon: SiKotlin, label: "Kotlin", color: "text-purple-500" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { icon: SiCplusplus, label: "C++", color: "text-indigo-400" },
  { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: FaCss3Alt, label: "CSS3", color: "text-blue-400" },
  { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-600" },
]

const serviceCards = [
  {
    title: "Full Stack Development",
    image:
      "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "UI/UX Design",
    image:
      "url(https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "Mobile Development",
    image:
      "url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "Web3 & Blockchain",
    image:
      "url(https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "AI Integration",
    image:
      "url(https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "SEO & Performance",
    image:
      "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "Cloud Solutions",
    image:
      "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=60)",
  },
  {
    title: "DevOps & CI/CD",
    image:
      "url(https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?auto=format&fit=crop&w=900&q=60)",
  },
]

const deliveryProcess = [
  {
    step: 1,
    icon: FaSearch,
    title: "Discovery & Planning",
    description:
      "Understanding your vision, goals, and requirements to create a comprehensive project roadmap and strategy.",
    points: [
      "Requirements Analysis",
      "Project Scope",
      "Timeline Planning",
      "Resource Allocation",
      "Technology Stack",
      "Risk Assessment",
    ],
  },
  {
    step: 2,
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that provide exceptional user experiences and align with your brand.",
    points: [
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "User Flow Mapping",
      "Responsive Design",
      "Design System",
    ],
  },
  {
    step: 3,
    icon: FaCode,
    title: "Development",
    description:
      "Building robust, scalable applications using cutting-edge technologies and following industry best practices.",
    points: [
      "Frontend Development",
      "Backend Architecture",
      "Database Design",
      "API Integration",
      "Code Quality",
      "Version Control",
    ],
  },
  {
    step: 4,
    icon: FaVial,
    title: "Testing & QA",
    description:
      "Rigorous testing and quality assurance to ensure flawless performance, security, and reliability across all platforms.",
    points: [
      "Unit Testing",
      "Integration Testing",
      "Performance Testing",
      "Security Testing",
      "Bug Fixing",
      "Cross-browser Testing",
    ],
  },
  {
    step: 5,
    icon: FaRocket,
    title: "Deployment",
    description:
      "Smooth launch with proper deployment strategies, monitoring setup, and ensuring optimal performance from day one.",
    points: [
      "CI/CD Pipeline",
      "Cloud Deployment",
      "Performance Monitoring",
      "Security Setup",
      "Documentation",
      "Launch Support",
    ],
  },
  {
    step: 6,
    icon: FaTools,
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and optimization to keep your application running smoothly and evolving with your needs.",
    points: [
      "24/7 Monitoring",
      "Regular Updates",
      "Performance Optimization",
      "Bug Fixes",
      "Feature Enhancements",
      "Technical Support",
    ],
  },
]

export function ServicesHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-70 dark:opacity-100">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Digital Services</p>
            <div className="relative w-full">
              <h1 className="relative z-10 text-5xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]} animationSpeed={8} showBorder={false} className="inline">
                  Elevate
                </GradientText>{" "}
                Your
                <br />
                Digital
                <br />
                <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]} animationSpeed={8} showBorder={false} className="inline">
                  Development
                </GradientText>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
            <div className="pt-2">
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">
                Wide Range of Tech Stack
              </span>
            </div>

            <div className="relative mt-12 w-screen overflow-hidden">
              <div className="skills-marquee-track flex w-max items-center gap-3 pr-4 sm:gap-4">
                {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
                  <div key={`${item.label}-${index}`} className="inline-flex items-center gap-2 px-2 py-1 sm:px-3" title={item.label}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-xs text-slate-200 sm:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]} animationSpeed={8} showBorder={false} className="inline">
              Services
            </GradientText>{" "}
            &{" "}
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]} animationSpeed={8} showBorder={false} className="inline">
              Expertise
            </GradientText>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Comprehensive development solutions tailored to bring your ideas to life with cutting-edge technology and best practices.
          </p>

          <div className="uiverse-container mt-10">
            {serviceCards.map((card) => (
              <article key={card.title} className="uiverse-section" style={{ backgroundImage: card.image }}>
                <div className="uiverse-content">
                  <h3>{card.title}</h3>
                </div>
                <div className="uiverse-overlay" />
              </article>
            ))}
          </div>

          <div className="mx-auto mt-24 max-w-7xl text-left">
            <div className="text-center">
              <div className="mb-5">
                <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  My Process
                </span>
              </div>
              <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]} animationSpeed={8} showBorder={false} className="inline text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                From Concept to Launch
              </GradientText>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                A Systematic Approach
              </h3>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every successful project follows a proven process. My systematic approach ensures quality, efficiency,
                and exceptional results at every stage.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-5 grid-cols-1">
              {deliveryProcess.map((phase) => (
                <article
                  key={phase.step}
                  className="rounded-2xl border border-border/50 bg-card/65 p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/45 bg-primary/12 font-mono text-xs text-primary">
                      <phase.icon className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <h4 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]">{phase.title}</h4>
                  </div>

                  <p className="mt-4 ml-14 text-base leading-relaxed text-muted-foreground">{phase.description}</p>

                  <ul
                    className={
                      phase.step === 1 ||
                      phase.step === 2 ||
                      phase.step === 3 ||
                      phase.step === 4 ||
                      phase.step === 5 ||
                      phase.step === 6
                        ? "mt-5 ml-14 grid max-w-3xl grid-cols-1 gap-2 text-center sm:grid-cols-3"
                        : "mt-5 ml-14 space-y-2 text-center"
                    }
                  >
                    {phase.points.map((point) => (
                      <li
                        key={point}
                        className={
                          phase.step === 1 ||
                          phase.step === 2 ||
                          phase.step === 3 ||
                          phase.step === 4 ||
                          phase.step === 5 ||
                          phase.step === 6
                            ? "w-full rounded-full border border-border/60 bg-secondary/55 px-2.5 py-1 text-[15px] md:text-base text-secondary-foreground"
                            : "mx-auto w-fit rounded-full border border-border/60 bg-secondary/55 px-2.5 py-1 text-[15px] md:text-base text-secondary-foreground"
                        }
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .uiverse-container,
        .uiverse-container * {
          box-sizing: border-box;
        }

        .uiverse-container {
          display: flex;
          gap: 0.5rem;
          width: 100%;
          height: 440px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }

        .uiverse-container::-webkit-scrollbar {
          display: none;
        }

        .uiverse-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          min-width: 72px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          color: #fff;
          transition: flex 0.4s ease;
          position: relative;
          border-radius: 10px;
        }

        .uiverse-section .uiverse-overlay {
          background-color: rgba(0, 0, 0, 0.7);
          width: 100%;
          height: 100%;
          position: absolute;
          transition: background-color 0.8s ease;
        }

        .uiverse-section:hover {
          flex: 2;
        }

        .uiverse-section:hover .uiverse-overlay {
          background-color: rgba(0, 0, 0, 0.95);
        }

        .uiverse-section .uiverse-content {
          z-index: 2;
          padding: 0 1rem;
        }

        .uiverse-section .uiverse-content h3 {
          margin: 0;
          min-width: 14em;
          text-align: center;
          transform: rotate(-90deg);
          transition: all 0.5s;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.78rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .uiverse-section:hover .uiverse-content h3 {
          transform: rotate(0deg);
        }

        @media (max-width: 1024px) {
          .uiverse-container {
            height: 400px;
          }
        }

        @media (max-width: 640px) {
          .uiverse-container {
            height: 360px;
          }

          .uiverse-section {
            min-width: 64px;
          }

          .uiverse-section .uiverse-content h3 {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </main>
  )
}