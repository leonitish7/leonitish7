"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type LiquidGlassCardProps = {
  title: string
  text: string
  icon?: React.ReactNode
  className?: string
}

export function LiquidGlassCard({ title, text, icon, className }: LiquidGlassCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-[205px] w-full min-w-[200px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-4 font-['Poppins',sans-serif] text-white shadow-[0px_6px_24px_rgba(0,0,0,0.14)] backdrop-blur-3xl saturate-150 transition-all duration-300 hover:-translate-y-1 hover:h-[220px] hover:border-white/14 hover:bg-white/[0.05]",
        className,
      )}
    >
      <div className="absolute -inset-8 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(126,170,255,0.14),transparent_58%),radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] blur-3xl opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_26%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.07)_74%,rgba(255,255,255,0.14)_100%)] opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(126,170,255,0.14),transparent_48%),radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_66%)]" />
      <div className="absolute inset-px rounded-[19px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.01))]" />
      <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.1)_18%,transparent_38%,transparent_62%,rgba(255,255,255,0.05)_82%,transparent_100%)] opacity-45" />

      <div className="icon relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(126,170,255,0.6)_0%,rgba(255,72,251,0.42)_40%,rgba(255,255,255,0.1)_68%,rgba(0,0,0,0.08)_100%)] bg-[length:220px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:bg-[-120px]">
        {icon}
      </div>

      <p className="title relative z-10 mt-7 w-full text-center text-sm font-semibold uppercase tracking-[4px] text-white/88 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
        {title}
      </p>

      <p className="text relative z-10 mt-5 w-4/5 max-h-0 overflow-hidden bg-[linear-gradient(90deg,#7eaaff_0%,#ff48fb_55%,#7eaaff_100%)] bg-[length:200%_100%] bg-left text-center text-[13px] font-light tracking-[2px] text-white/78 opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:bg-right group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100">
        {text}
      </p>

      <style jsx>{`
        .icon svg {
          color: white;
          stroke: white;
        }

        .group:hover .icon {
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  )
}
