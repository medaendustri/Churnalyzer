"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentFailure, setCurrentFailure] = useState(0)

  const failures = [
    { company: "Theranos", loss: "$945M", year: "2018" },
    { company: "FTX", loss: "$32B", year: "2022" },
    { company: "WeWork", loss: "$47B", year: "2019" },
    { company: "Quibi", loss: "$1.75B", year: "2020" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFailure((prev) => (prev + 1) % failures.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-6 py-3 text-sm font-medium text-red-400 backdrop-blur-sm">
              <span className="mr-3 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="transition-all duration-500">
                Latest: {failures[currentFailure].company} lost {failures[currentFailure].loss} in{" "}
                {failures[currentFailure].year}
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-balance">
            <span className="text-white">Learn from the world's</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              biggest failures
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-300 text-pretty max-w-2xl mx-auto">
            Discover the untold stories behind corporate collapses, startup failures, and strategic missteps. Turn other
            companies' mistakes into your competitive advantage.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore Case Studies
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
            >
              <span className="mr-2">📊</span>
              View Analytics
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 text-slate-400 text-sm">
            <div className="flex items-center">
              <span className="font-semibold text-white">500+</span>
              <span className="ml-1">Case Studies</span>
            </div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="flex items-center">
              <span className="font-semibold text-white">10M+</span>
              <span className="ml-1">Readers</span>
            </div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="flex items-center">
              <span className="font-semibold text-white">$2.3T</span>
              <span className="ml-1">Analyzed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}
