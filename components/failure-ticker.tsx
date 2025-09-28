"use client"

import { useEffect, useState } from "react"

export function FailureTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const failures = [
    "Theranos: $945M fraud scandal",
    "FTX: $32B crypto collapse",
    "WeWork: $47B valuation crash",
    "Quibi: $1.75B streaming failure",
    "Vine: Shut down despite 200M users",
    "Google+: Failed to compete with Facebook",
    "Segway: Revolutionary tech, poor market fit",
    "Blockbuster: Missed the streaming revolution",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % failures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-red-600 py-4 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-6">
          <span className="text-white font-semibold text-sm uppercase tracking-wide">Breaking Down Failures:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {failures.map((failure, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <span className="text-white text-sm font-medium">{failure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
