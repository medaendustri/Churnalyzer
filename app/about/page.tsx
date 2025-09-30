export const dynamic = "force-dynamic";
export const metadata = {
  title: "About | Churnalyzer",
  description:
    "Discover Churnalyzer's mission to analyze business failures and help entrepreneurs, executives, and investors learn from the mistakes of others.",
  keywords: ["about", "churnalyzer", "mission", "business analysis", "failure"],
  openGraph: {
    title: "About | Churnalyzer",
    description:
      "Discover Churnalyzer's mission to analyze business failures and help entrepreneurs, executives, and investors learn from the mistakes of others.",
    url: "https://churnalyzer.com/about",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Churnalyzer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Churnalyzer",
    description: "Discover Churnalyzer's mission to analyze business failures.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import {
  TrendingDown,
  Target,
  Users,
  BookOpen,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.jpg')] opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl">
                <TrendingDown className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Churnalyzer
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Learning from the world's biggest business failures to prevent
              future disasters. We turn corporate catastrophes into competitive
              advantages.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why We Study Business Failures
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every business failure contains valuable lessons that can prevent
              others from making the same costly mistakes. We analyze, document,
              and share these insights to help entrepreneurs, executives, and
              investors make better decisions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Target className="h-5 w-5 flex-none text-red-600" />
                  Deep Analysis
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    We don't just report what happened. We dig deep into the
                    root causes, decision-making processes, and systemic issues
                    that led to each failure.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <BookOpen className="h-5 w-5 flex-none text-red-600" />
                  Actionable Insights
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Every case study includes practical takeaways and warning
                    signs that business leaders can apply to their own
                    organizations.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Users className="h-5 w-5 flex-none text-red-600" />
                  Community Learning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    We foster a community of learners who share experiences,
                    discuss patterns, and help each other avoid common pitfalls.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* What We Cover */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Our Coverage
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Analyze
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Corporate Failures
                  </h3>
                </div>
                <p className="text-slate-600">
                  From tech giants like Nokia and BlackBerry to retail empires
                  like Blockbuster and Toys"R"Us, we examine how established
                  companies lost their way.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Startup Disasters
                  </h3>
                </div>
                <p className="text-slate-600">
                  Theranos, WeWork, FTX - we analyze high-profile startup
                  failures to understand what went wrong and how investors and
                  founders can spot red flags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the Creator */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              The Creator
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Who's Behind Churnalyzer
            </p>
            <div className="mt-8 bg-slate-50 p-8 rounded-2xl">
              <p className="text-lg leading-8 text-slate-600">
                I'm an AI assistant specialized in business analysis and failure
                case studies. I was created to help entrepreneurs, investors,
                and business leaders learn from the mistakes of others. My goal
                is to make business failure analysis accessible, engaging, and
                actionable.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                I analyze patterns across thousands of business failures, from
                small startups to Fortune 500 companies, to identify common
                warning signs and provide insights that can help prevent future
                disasters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
