"use client"

import {
  Atom,
  Braces,
  Server,
  Database,
  Cable,
  PanelsTopLeft,
  Boxes,
  Wind,
  Table2,
  Container,
  Network,
  Cloud,
} from "lucide-react"

const techCards = [
  {
    title: "React",
    desc: "Build interactive, component-driven interfaces with reusable architecture.",
    icon: Atom,
    gradient: ["#06b6d4", "#67e8f9"],
  },
  {
    title: "TypeScript",
    desc: "Ship safer code with static typing and maintainable developer workflows.",
    icon: Braces,
    gradient: ["#2563eb", "#93c5fd"],
  },
  {
    title: "Node.js",
    desc: "Deliver fast backend services and API layers with event-driven runtime.",
    icon: Server,
    gradient: ["#22c55e", "#86efac"],
  },
  {
    title: "MongoDB",
    desc: "Model flexible document data for evolving product requirements.",
    icon: Database,
    gradient: ["#65a30d", "#bef264"],
  },
  {
    title: "Express",
    desc: "Create lean HTTP services with middleware-based architecture.",
    icon: Cable,
    gradient: ["#0f172a", "#64748b"],
  },
  {
    title: "Next.js",
    desc: "Build production-ready full-stack apps with modern rendering strategies.",
    icon: PanelsTopLeft,
    gradient: ["#4338ca", "#818cf8"],
  },
  {
    title: "Redux",
    desc: "Manage complex state predictably across large frontend applications.",
    icon: Boxes,
    gradient: ["#7e22ce", "#d8b4fe"],
  },
  {
    title: "Tailwind CSS",
    desc: "Craft responsive, utility-first interfaces with consistent design tokens.",
    icon: Wind,
    gradient: ["#0284c7", "#7dd3fc"],
  },
  {
    title: "PostgreSQL",
    desc: "Design reliable relational schemas and optimize data-heavy queries.",
    icon: Table2,
    gradient: ["#1e40af", "#60a5fa"],
  },
  {
    title: "Docker",
    desc: "Package and deploy services consistently across local and cloud setups.",
    icon: Container,
    gradient: ["#0ea5e9", "#bae6fd"],
  },
  {
    title: "GraphQL",
    desc: "Expose flexible APIs that return exactly the data clients need.",
    icon: Network,
    gradient: ["#ec4899", "#fbcfe8"],
  },
  {
    title: "AWS",
    desc: "Scale systems with resilient cloud infrastructure and managed services.",
    icon: Cloud,
    gradient: ["#f97316", "#fdba74"],
  },
]

export function TechFluidCardStack() {
  return (
    <>
      <div className="tech-card-stack" aria-label="Technical expertise cards">
        {techCards.map((card, index) => {
          const Icon = card.icon
          const serial = String(index + 1).padStart(2, "0")

          return (
            <article
              key={card.title}
              className="tooltip-container"
              style={{
                ["--tech-c1" as string]: card.gradient[0],
                ["--tech-c2" as string]: card.gradient[1],
              }}
            >
              <div className="tooltip">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      <Icon size={22} />
                    </div>
                    <div className="details">
                      <div className="name">{serial + " " + card.title}</div>
                      <p className="about">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="icon" aria-label={card.title}>
                <div className="layer">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className="icon-core">
                    <Icon size={24} />
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <style jsx>{`
        .tech-card-stack {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          column-gap: 12px;
          row-gap: 64px;
          width: 100%;
          padding: 18px 0 24px;
          align-items: center;
          justify-items: center;
        }

        .tooltip-container {
          position: relative;
          cursor: pointer;
          transition: transform 0.24s ease;
          border-radius: 12px;
          min-width: 0;
          width: 100%;
          min-height: 132px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          z-index: 1;
        }

        .tooltip-container:hover {
          z-index: 45;
        }

        .tooltip {
          position: absolute;
          left: 50%;
          top: -16px;
          transform: translate(-50%, -100%);
          width: min(210px, calc(100vw - 2rem));
          height: auto;
          min-height: auto;
          padding: 0;
          opacity: 0;
          pointer-events: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          z-index: 35;
          background: color-mix(in srgb, hsl(var(--card)) 14%, #000 86%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
        }

        .tooltip::before {
          content: "";
          position: absolute;
          inset: 0;
          left: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(-45deg, var(--tech-c1) 0%, var(--tech-c2) 100%);
          opacity: 0.68;
          z-index: -2;
          pointer-events: none;
          transform-origin: center center;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .tooltip::after {
          content: "";
          z-index: -1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, var(--tech-c1) 0%, var(--tech-c2) 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          opacity: 0.52;
          filter: blur(14px);
          transition: filter 0.3s ease;
        }

        .profile {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          padding: 12px;
          border: 2px solid color-mix(in srgb, var(--tech-c1) 62%, transparent);
          background: linear-gradient(
            135deg,
            color-mix(in srgb, hsl(var(--card)) 12%, #000 88%),
            color-mix(in srgb, hsl(var(--card)) 7%, #000 93%)
          );
          min-height: auto;
          display: flex;
          align-items: flex-end;
        }

        .profile::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.3;
          background-image:
            radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.65) 0 1px, transparent 1.6px),
            radial-gradient(circle at 72% 28%, rgba(255, 255, 255, 0.45) 0 1px, transparent 1.8px),
            radial-gradient(circle at 45% 72%, rgba(255, 255, 255, 0.4) 0 1px, transparent 1.8px);
          animation: glitter-drift 2.8s ease-in-out infinite;
        }

        .tooltip-container:hover .tooltip {
          top: -24px;
          opacity: 1;
          pointer-events: auto;
        }

        .tooltip-container:hover .tooltip::after {
          filter: blur(22px);
        }

        .tooltip-container:hover .tooltip::before {
          transform: rotate(6deg);
        }

        .icon {
          text-decoration: none;
          color: hsl(var(--foreground));
          display: block;
          position: relative;
          width: fit-content;
          margin-inline: auto;
        }

        .icon .layer {
          width: 56px;
          height: 56px;
          border: 3px solid var(--tech-c1);
          border-radius: 999px;
          position: relative;
          transition: border 0.28s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 16px color-mix(in srgb, var(--tech-c1) 65%, transparent);
          transform: translateY(0) scale(1);
        }

        .icon .layer::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 999px;
          border: 2px solid color-mix(in srgb, var(--tech-c1) 45%, transparent);
          opacity: 0;
          transform: scale(0.78);
          pointer-events: none;
        }

        .tooltip-container:hover .icon .layer {
          animation: spring-lift 620ms cubic-bezier(0.2, 0.85, 0.3, 1.2) both;
          box-shadow: 0 0 30px color-mix(in srgb, var(--tech-c1) 85%, transparent);
        }

        .tooltip-container:hover .icon .layer::after {
          animation: spring-ripple 620ms ease-out both;
        }

        .layer span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid var(--tech-c1);
          border-radius: 999px;
          transition: transform 0.5s cubic-bezier(0.2, 0.86, 0.3, 1.1), opacity 0.35s ease;
          color: var(--tech-c1);
        }

        .layer span:nth-child(1) {
          transition-delay: 0ms;
        }

        .layer span:nth-child(2) {
          transition-delay: 35ms;
        }

        .layer span:nth-child(3) {
          transition-delay: 70ms;
        }

        .layer span:nth-child(4) {
          transition-delay: 105ms;
        }

        .layer span:nth-child(5) {
          transition-delay: 140ms;
        }

        .icon-core {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          background: linear-gradient(45deg, var(--tech-c1), var(--tech-c2), var(--tech-c1));
          color: white;
          box-shadow: 0 8px 22px color-mix(in srgb, var(--tech-c1) 38%, transparent);
          transition: transform 0.38s cubic-bezier(0.2, 0.9, 0.28, 1.24), box-shadow 0.34s ease;
        }

        .tooltip-container:hover .icon-core {
          animation: core-pop 560ms cubic-bezier(0.2, 0.9, 0.28, 1.2) both;
          box-shadow:
            0 14px 28px color-mix(in srgb, var(--tech-c1) 44%, transparent),
            0 0 20px color-mix(in srgb, var(--tech-c2) 30%, transparent);
        }

        .tooltip-container:hover .layer span:nth-child(1) {
          opacity: 0.2;
        }

        .tooltip-container:hover .layer span:nth-child(2) {
          opacity: 0.4;
          transform: translateY(-4px);
        }

        .tooltip-container:hover .layer span:nth-child(3) {
          opacity: 0.6;
          transform: translateY(-8px);
        }

        .tooltip-container:hover .layer span:nth-child(4) {
          opacity: 0.8;
          transform: translateY(-12px);
        }

        .tooltip-container:hover .layer span:nth-child(5) {
          opacity: 1;
          transform: translateY(-16px);
        }

        .user {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .img {
          width: 50px;
          height: 50px;
          border: 1px solid color-mix(in srgb, var(--tech-c1) 70%, transparent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, hsl(var(--card)) 78%, white 22%);
          color: var(--tech-c1);
          flex-shrink: 0;
        }

        .name {
          font-size: 1rem;
          font-weight: 700;
          color: color-mix(in srgb, white 94%, var(--tech-c2) 6%);
          line-height: 1.15;
          text-transform: capitalize;
        }

        .details {
          display: flex;
          flex-direction: column;
          gap: 0;
          color: white;
        }

        .about {
          color: color-mix(in srgb, white 74%, var(--tech-c2) 26%);
          padding-top: 5px;
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.35;
        }

        @keyframes glitter-drift {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.26;
          }
          50% {
            transform: translateY(-2px);
            opacity: 0.4;
          }
        }

        @keyframes spring-lift {
          0% {
            transform: translateY(0) scale(1);
          }
          38% {
            transform: translateY(-14px) scale(1.035);
          }
          62% {
            transform: translateY(-8px) scale(1.01);
          }
          80% {
            transform: translateY(-11px) scale(1.02);
          }
          100% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes core-pop {
          0% {
            transform: translateY(0) scale(1);
          }
          42% {
            transform: translateY(-7px) scale(1.08);
          }
          70% {
            transform: translateY(-3px) scale(1.03);
          }
          100% {
            transform: translateY(-4px) scale(1.05);
          }
        }

        @keyframes spring-ripple {
          0% {
            opacity: 0;
            transform: scale(0.78);
          }
          26% {
            opacity: 0.48;
          }
          100% {
            opacity: 0;
            transform: scale(1.24);
          }
        }

        @media (max-width: 1024px) {
          .tech-card-stack {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            column-gap: 10px;
            row-gap: 56px;
            padding-top: 16px;
          }
        }

        @media (max-width: 768px) {
          .tech-card-stack {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 8px;
            row-gap: 44px;
            padding-top: 14px;
          }

          .tooltip-container {
            min-height: 124px;
          }

          .icon .layer {
            width: 52px;
            height: 52px;
          }

          .tooltip {
            width: min(208px, calc(100vw - 1.5rem));
            min-height: auto;
          }

          .profile {
            min-height: auto;
          }
        }

        @media (max-width: 560px) {
          .tech-card-stack {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 8px;
            row-gap: 38px;
            padding-top: 12px;
          }

          .tooltip-container {
            min-height: 118px;
          }

          .icon .layer {
            width: 48px;
            height: 48px;
            border-width: 2px;
          }

          .tooltip {
            top: -14px;
            width: min(198px, calc(100vw - 1rem));
            min-height: auto;
          }

          .profile {
            min-height: auto;
          }

          .name {
            font-size: 0.86rem;
          }

          .about {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </>
  )
}
