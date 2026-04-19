"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Colors, Liquid } from "@/components/ui/liquid-gradient"

const COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
}

export function SendSignalLiquidButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex justify-center sm:justify-start">
      <a
        href="mailto:nt10nitish@gmail.com"
        className="relative inline-block h-[2.7em] w-full max-w-[14rem] rounded-lg border-2 border-black bg-white dark:border-white dark:bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-1/2 top-[8.57%] h-[128.57%] w-[112.81%] -translate-x-1/2 opacity-70 blur-[19px]">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] blur-[6.5px]" />
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[112.85%] w-[92.23%] -translate-x-1/2 -translate-y-[40%] rounded-lg bg-[#010128] blur-[7.3px]" />

        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]" />
          <span className="absolute inset-0 rounded-lg bg-black" />
          <Liquid isHovered={isHovered} colors={COLORS} />

          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={`spark-${i}`}
              className={`absolute inset-0 rounded-lg border-[3px] border-solid mix-blend-overlay ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              }`}
            />
          ))}

          <span className="absolute left-1/2 top-1/2 h-[42.85%] w-[70.8%] -translate-x-1/2 -translate-y-[40%] rounded-lg bg-[#006] blur-[15px]" />
        </div>

        <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 rounded-lg px-3 text-base font-semibold tracking-wide text-white transition-colors group-hover:text-yellow-400 sm:text-lg">
          <Mail className="h-5 w-5 shrink-0" />
          <span>send a signal</span>
        </span>
      </a>
    </div>
  )
}