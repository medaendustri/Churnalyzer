"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      value: "500+",
      label: "Business Failures Analyzed",
      description: "From startups to Fortune 500 companies",
      icon: "🏢",
    },
    {
      value: "$2.3T",
      label: "Total Value Lost",
      description: "Combined market cap destroyed",
      icon: "💸",
    },
    {
      value: "85%",
      label: "Preventable Failures",
      description: "Could have been avoided with better strategy",
      icon: "⚠️",
    },
    {
      value: "10M+",
      label: "Professionals Educated",
      description: "Learning from these case studies",
      icon: "🎓",
    },
  ]

  return (
    <section id="stats-section" className="bg-gradient-to-br from-slate-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance">
              The true cost of business failure
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-600 text-pretty max-w-3xl mx-auto">
              Every failure tells a story. Every story teaches a lesson. Understanding these patterns helps prevent
              future disasters and builds stronger businesses.
            </p>
          </div>

          <dl className="mt-20 grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-red-200 ${
                  isVisible ? "animate-in slide-in-from-bottom-4" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <dt className="text-sm font-semibold leading-6 text-slate-600 uppercase tracking-wide">{stat.label}</dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                  {stat.value}
                </dd>
                <dd className="mt-3 text-sm text-slate-500 leading-relaxed">{stat.description}</dd>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
