import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-slate-900">Churnalyzer</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/posts" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600">
            Case Studies
          </Link>
          <Link href="/categories" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" size="sm">
            Subscribe
          </Button>
        </div>
      </nav>
    </header>
  )
}
