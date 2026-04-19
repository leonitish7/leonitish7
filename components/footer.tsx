import { Github, Twitter, Linkedin, Mail, Phone, ExternalLink, Heart } from "lucide-react"
import { SendSignalLiquidButton } from "@/components/send-signal-liquid-button"
import GradientText from "@/components/GradientText"
import ShinyText from "@/components/ShinyText"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/leonitish7", handle: "@leonitish", icon: Github },
  { label: "Twitter", href: "https://x.com/nt10nitish", handle: "@nt10nitish", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonitish7", handle: "/in/leonitish7", icon: Linkedin },
  { label: "Email", href: "mailto:nt10nitish@gmail.com", handle: "nt10nitish@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+917777032666", handle: "+91 7777032666", icon: Phone },
]

export function Footer() {
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Connect</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Let's build something "}
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="inline"
                >
                  together
                </GradientText>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Always interested in collaborations, interesting problems, and conversations about code, design, and
              everything in between.
            </p>

            <div className="pt-2">
              <SendSignalLiquidButton />
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                  rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <ShinyText
                    text={link.handle}
                    speed={2.9}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={145}
                    direction="left"
                    yoyo={true}
                    pauseOnHover={false}
                    disabled={false}
                    className="font-mono text-xs text-muted-foreground truncate"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent sm:mt-20" />

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs font-bold text-center sm:text-right bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text">
            © {new Date().getFullYear()} leonitish7 — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
