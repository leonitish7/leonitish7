"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { ExternalLink, Github } from "lucide-react"

type ProjectCard = {
  title: string
  description: string
  image: string
}

const projectCards: ProjectCard[] = [
  {
    title: "Analytics Dashboard",
    description: "Real-time metrics and smart visual reporting for product teams.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Content Studio",
    description: "Generate, refine, and publish AI-assisted content workflows.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "DevOps Console",
    description: "Deployment pipelines and infrastructure monitoring in one place.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-Commerce Platform",
    description: "Scalable storefront with secure checkout and inventory sync.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Learning Portal",
    description: "Interactive education experience with progress analytics.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design System Lab",
    description: "Reusable components and tokens for fast UI delivery.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Social Collaboration",
    description: "Community-first platform with live discussions and mentions.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Finance Tracker",
    description: "Personal finance tools with forecasts and spending insights.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Portfolio CMS",
    description: "Custom publishing workflow for content-rich personal sites.",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
]

export function Projects3DGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectCards.map((card) => (
          <CardContainer key={card.title} containerClassName="py-0" className="w-full">
            <CardBody className="group/card h-auto min-h-[31rem] w-full rounded-xl border border-black/[0.1] bg-gray-50/80 p-6 dark:border-white/[0.2] dark:bg-black/65 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="mt-4 w-full">
                <img
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/75 bg-white px-4 py-2 text-xs font-semibold text-black shadow-[0_6px_14px_rgba(255,255,255,0.22)] transition-all duration-300 hover:brightness-95"
                >
                  <span className="select-none">Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="group relative cursor-pointer border-none bg-transparent p-0 font-mono text-[11px] font-light uppercase outline-none"
                >
                  <span className="absolute left-0 top-0 h-full w-full translate-y-0.5 rounded-lg bg-black/25 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
                  <span className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />

                  <span className="relative flex items-center justify-between gap-2 rounded-lg bg-gradient-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] px-4 py-2 text-xs font-semibold text-white brightness-100 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] -translate-y-1 group-hover:-translate-y-1.5 group-hover:brightness-110 group-hover:duration-[250ms] group-active:-translate-y-0.5 before:absolute before:inset-0 before:rounded-lg before:bg-black/18 before:content-['']">
                    <span className="relative z-10 select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">Code</span>
                    <Github className="relative z-10 h-4 w-4 stroke-[2.4] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] transition duration-200 group-hover:translate-x-1" />
                  </span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}