"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const initialCards = [
  { id: 1, image: "https://assets.codepen.io/16327/portrait-number-1.png" },
  { id: 2, image: "https://assets.codepen.io/16327/portrait-number-2.png" },
  { id: 3, image: "https://assets.codepen.io/16327/portrait-number-3.png" },
  { id: 4, image: "https://assets.codepen.io/16327/portrait-number-4.png" },
  { id: 5, image: "https://assets.codepen.io/16327/portrait-number-5.png" },
]

export default function CardStackSlider() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)

  const shuffleCard = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCards((prev) => {
      const newCards = [...prev]
      const lastCard = newCards.pop()
      if (lastCard) {
        newCards.unshift({ ...lastCard, id: Date.now() })
      }
      return newCards
    })
    window.setTimeout(() => setIsAnimating(false), 400)
  }

  useEffect(() => {
    const interval = window.setInterval(shuffleCard, 2000)
    return () => window.clearInterval(interval)
  }, [isAnimating])

  return (
    <div
      className="relative h-full w-full min-h-[380px] bg-transparent font-['Outfit']"
      onClick={shuffleCard}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          shuffleCard()
        }
      }}
      aria-label="Card stack slider"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative h-[340px] w-[min(560px,95vw)]" style={{ perspective: 800 }}>
          <AnimatePresence>
            {cards.map((card, index) => {
              const right = (4 - index) * 18
              const top = (4 - index) * 18
              const zIndex = 5 - index

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: 60, right, top, zIndex }}
                  animate={{ opacity: 1, y: 0, right, top, zIndex }}
                  exit={{ opacity: 0, x: -15, y: 20, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute aspect-[16/10] w-[clamp(240px,34vw,360px)] rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
