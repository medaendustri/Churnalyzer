"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Never miss a failure</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Get weekly insights delivered to your inbox. Learn from the mistakes of others before they become your own.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {isSubmitted ? (
            <div className="rounded-lg bg-green-50 p-4 text-center">
              <p className="text-sm font-medium text-green-800">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-4 text-sm leading-6 text-slate-600">
            We care about your data. Read our{" "}
            <Link href="/privacy" className="font-semibold text-slate-900 hover:text-slate-700">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
