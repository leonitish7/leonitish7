import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type GlassCardProps = React.ComponentProps<"div">

function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative min-h-[196px] overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] p-0 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-3xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    />
  )
}

function GlassCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative z-10 flex flex-col items-center gap-2 p-6 pb-6 pt-4 text-center", className)} {...props} />
}

function GlassCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative z-10 px-6 py-5", className)} {...props} />
}

function GlassCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative z-10 px-6 pb-6 pt-0", className)} {...props} />
}

function GlassCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-center text-xl font-semibold tracking-tight text-white", className)} {...props} />
}

function GlassCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-center text-sm leading-relaxed text-white/70", className)} {...props} />
}

function GlassButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "border border-white/15 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-white/15 hover:text-white",
        className,
      )}
      {...props}
    />
  )
}

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  GlassButton,
}