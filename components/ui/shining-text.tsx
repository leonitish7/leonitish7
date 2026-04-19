"use client"

import * as React from "react"

type ShiningTextProps = {
  text: string
  className?: string
}

export function ShiningText({ text, className }: ShiningTextProps) {
  return (
    <p className={["text-base font-normal text-muted-foreground", className ?? ""].join(" ")}>
      {text}
    </p>
  )
}
