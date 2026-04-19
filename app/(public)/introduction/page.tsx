"use client"

import GradientText from "@/components/GradientText"
import { Coffee, Code2, MoonStar, RefreshCw, ScrollText, Music4 } from "lucide-react"
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
} from "react-icons/fa"
import {
  SiOpenai,
  SiKotlin,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
} from "react-icons/si"

interface SkillIcon {
  icon: IconType
  label: string
  color: string
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

const funFacts = [
  { icon: Coffee, text: "Coffee enthusiast with 300+ cups/year", color: "text-amber-400" },
  { icon: Code2, text: "Builds small projects consistently to improve skills", color: "text-cyan-400" },
  { icon: MoonStar, text: "Most productive during late-night coding sessions", color: "text-violet-400" },
  { icon: RefreshCw, text: "Exploring, building, refining. Repeat.", color: "text-emerald-400" },
  { icon: ScrollText, text: "Late nights. Clean commits.", color: "text-sky-400" },
  { icon: Music4, text: "Music on. World off. Code on.", color: "text-pink-400" },
]

export default function IntroductionPage() {
  return (
    <section className="min-h-[calc(100vh-6rem)] px-4 sm:px-6 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Hey, I&apos;m{" "}
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Nitish
            </GradientText>
            ✨
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-white">A</span>{" "}
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Software Developer
            </GradientText>
          </h2>

          <div className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-balance space-y-2">
            <p>A fullstack developer with solid foundations in design.</p>
            <p>passionate about crafting seamless user experiences I thrive at the intersection</p>
            <p className="text-center">of creativity and functionality.</p>
          </div>
        </div>

        <div className="mt-12 mx-auto grid w-full max-w-6xl items-start gap-10 lg:gap-14 lg:grid-cols-[19rem_minmax(0,1fr)] lg:justify-center">
          <div className="uiverse-about-card card">
            <div className="img" />
            <span>About Me</span>
            <p className="info">
              I&apos;m Nitish, a full-stack developer focused on building responsive products, clear interfaces, and
              scalable backend systems.
            </p>
            <div className="share">
              <a href="https://github.com/leonitish7" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href="https://x.com/nt10nitish" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </div>
            <div className="card-actions">
              <button type="button" className="resume-btn">Resume</button>
              <button type="button" className="contact-btn">Contact</button>
            </div>
          </div>

          <article className="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] text-left">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary/90">Who I Am</p>
            <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-white/85">
              <p>
                I&apos;m Nitish Kumar, a Computer Science student passionate about building modern, user-friendly web
                applications and continuously improving my development skills. As an aspiring full-stack developer, I
                enjoy turning ideas into real-world projects while learning best practices in design, performance, and
                clean code.
              </p>
              <p>
                My journey is focused on learning by doing-working on personal projects, exploring open-source, and
                strengthening my fundamentals in technologies like React, Next.js, Node.js, and MongoDB. While I&apos;m
                still at the beginning of my career, I&apos;m deeply committed to understanding how scalable and efficient
                systems are built.
              </p>
              <p>
                I have a growing interest in areas like authentication systems, responsive UI design, and backend
                development. I&apos;m also exploring fields such as AI/ML, Web3, and cloud technologies to broaden my
                technical perspective.
              </p>
              <p>
                Beyond coding, I believe in consistency, curiosity, and continuous learning. I&apos;m actively working on
                improving my problem-solving skills and contributing to meaningful projects that help me grow as a
                developer.
              </p>
              <p>
                I&apos;m currently looking for opportunities to learn, collaborate, and gain real-world experience while
                building impactful digital solutions.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Top Skills
            </GradientText>
          </h3>

          <div className="mt-8 relative overflow-hidden py-2">
            <div className="skills-marquee-track flex w-max items-center gap-3 sm:gap-4 pr-4">
              {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="inline-flex items-center gap-2 px-2 py-1 sm:px-3"
                  title={item.label}
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-xs sm:text-sm text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <h4 className="mt-40 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Fun Facts
            </GradientText>
          </h4>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((fact, index) => (
              <article
                key={fact.text}
                className="fun-fact-card rounded-2xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/8"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <fact.icon className={`h-4.5 w-4.5 ${fact.color}`} />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-white/85">{fact.text}</p>
                </div>
              </article>
            ))}
          </div>

          <h4 className="mt-40 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline"
            >
              Education
            </GradientText>
          </h4>

          <article className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8 text-left backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h5 className="text-lg sm:text-2xl font-semibold text-white/95">
                Bachelor of Technology - Computer Science
              </h5>
              <div className="text-sm sm:text-base text-white/70 sm:text-right">
                <p>
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    2024
                  </span>{" "}
                  to{" "}
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    2028
                  </span>
                </p>
                <p className="mt-1 text-white/85">
                  Grade: CGPA:{" "}
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    8.1
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-1 text-sm sm:text-base text-white/80">
              <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                Ajay Kumar Garg Engineering College
              </span>
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
              Focused on software engineering, full-stack development, and user-centered design. Actively involved in
              open-source contributions, hackathons, and real-world application development.
            </p>

            <div className="mt-5 space-y-2 text-sm sm:text-base text-white/85">
              <p>
                <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                  Core Coursework:
                </span>{" "}
                Programming, Data Structures, OOP, OS, DBMS, Computer Networks, Algorithms, Software Engineering, and
                AI/ML or Cloud electives.
              </p>
            </div>
          </article>

          <article className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8 text-left backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h5 className="text-lg sm:text-2xl font-semibold text-white/95">
                Higher Secondary Education (PCM)
              </h5>
              <div className="text-sm sm:text-base text-white/70 sm:text-right">
                <p>
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    Jul 2022
                  </span>{" "}
                  to{" "}
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    Jul 2023
                  </span>
                </p>
                <p className="mt-1 text-white/85">
                  Grade:{" "}
                  <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                    A1
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-1 text-sm sm:text-base text-white/80">
              <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                Army Public School (APS)
              </span>
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
              Served as Class Representative and sports House Captain. Vice-Captain of Football Team and active learner, developing leadership, discipline, strategic thinking, and teamwork skills.
            </p>

            <div className="mt-5 space-y-2 text-sm sm:text-base text-white/85">
              <p>
                <span className="bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] bg-clip-text text-transparent">
                  Roles & Achievements:
                </span>{" "}
                Sports House Captain, Football Vice-Captain, Strategic Thinking & Leadership
              </p>
            </div>
          </article>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)]">
            <div className="text-left">
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="inline"
                >
                  Professional Certifications
                </GradientText>
              </h4>

              <p className="mt-4 max-w-md text-sm sm:text-base text-white/80 lg:ml-8">
                Industry-recognized certifications and achievements
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <img
                className="cert-pdf-preview"
                src="/SkillFront-Certificate.png"
                alt="SkillFront Certificate"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
