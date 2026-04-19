"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type ScrambleToken = {
  value: string
  dud: boolean
  key: string
}

type QueueItem = {
  from: string
  to: string
  start: number
  end: number
  char?: string
}

interface TextScrambleProps {
  phrases: string[]
  className?: string
  dudClassName?: string
  pauseMs?: number
}

const CHARS = "!<>-_\\/[]{}=+*^?#________"

export function TextScramble({
  phrases,
  className = "",
  dudClassName = "",
  pauseMs = 800,
}: TextScrambleProps) {
  const [tokens, setTokens] = useState<ScrambleToken[]>([])

  const frameRef = useRef(0)
  const queueRef = useRef<QueueItem[]>([])
  const frameRequestRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const resolveRef = useRef<(() => void) | null>(null)
  const currentTextRef = useRef("")
  const randomChar = useCallback(() => CHARS[Math.floor(Math.random() * CHARS.length)], [])

  const update = useCallback(() => {
    let complete = 0

    const nextTokens = queueRef.current.map((item, index) => {
      const { from, to, start, end } = item

      if (frameRef.current >= end) {
        complete += 1
        return { value: to, dud: false, key: `${index}-${to}-done` }
      }

      if (frameRef.current >= start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = randomChar()
        }

        return { value: item.char, dud: true, key: `${index}-${item.char}-dud` }
      }

      return { value: from, dud: false, key: `${index}-${from}-from` }
    })

    setTokens(nextTokens)

    if (complete === queueRef.current.length) {
      currentTextRef.current = queueRef.current.map((item) => item.to).join("")
      resolveRef.current?.()
      resolveRef.current = null
      return
    }

    frameRequestRef.current = requestAnimationFrame(() => {
      frameRef.current += 1
      update()
    })
  }, [randomChar])

  const setText = useCallback(
    (newText: string) => {
      const oldText = currentTextRef.current

      return new Promise<void>((resolve) => {
        const length = Math.max(oldText.length, newText.length)
        resolveRef.current = resolve
        queueRef.current = []

        for (let index = 0; index < length; index += 1) {
          const from = oldText[index] || ""
          const to = newText[index] || ""
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          queueRef.current.push({ from, to, start, end })
        }

        if (frameRequestRef.current) {
          cancelAnimationFrame(frameRequestRef.current)
        }

        frameRef.current = 0
        update()
      })
    },
    [update],
  )

  useEffect(() => {
    let phraseIndex = 0
    let cancelled = false

    const run = () => {
      if (cancelled || phrases.length === 0) return

      setText(phrases[phraseIndex]).then(() => {
        if (cancelled) return

        timeoutRef.current = window.setTimeout(run, pauseMs)
      })

      phraseIndex = (phraseIndex + 1) % phrases.length
    }

    run()

    return () => {
      cancelled = true

      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current)
      }

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [pauseMs, phrases, setText])

  return (
    <div className={className} aria-live="polite">
      {tokens.map((token) => (
        <span key={token.key} className={token.dud ? dudClassName : undefined}>
          {token.value}
        </span>
      ))}
    </div>
  )
}