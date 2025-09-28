import Link from "next/link";
import {
  TrendingDown,
  AlertTriangle,
  BarChart3,
  Users,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 bg-[url('/grid.jpg')] opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <TrendingDown className="h-8 w-8 text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-300">Failed Companies</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white">$2.1T</div>
              <div className="text-sm text-slate-300">Value Lost</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm text-slate-300">Case Studies</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-slate-300">Lessons Learned</div>
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Churnalyzer
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Learning from the world's biggest business failures to prevent
                future disasters. Turn corporate catastrophes into competitive
                advantages.
              </p>

              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Content
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/posts"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors group flex items-center"
                    >
                      <span>Case Studies</span>
                      <TrendingDown className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors group flex items-center"
                    >
                      <span>Categories</span>
                      <BarChart3 className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/timeline"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Failure Timeline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Key Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/methodology"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/newsletter"
                      className="text-sm leading-6 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Get weekly insights on business failures and lessons learned.
              </p>
              <div className="mt-4 flex max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-l-lg border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-r-lg bg-gradient-to-r from-red-500 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-xs leading-5 text-slate-400">
                &copy; 2025 Churnalyzer. All rights reserved.
              </p>
            </div>
            <div className="text-xs text-slate-500 italic">
              "Those who cannot remember the past are condemned to repeat it." -
              George Santayana
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
