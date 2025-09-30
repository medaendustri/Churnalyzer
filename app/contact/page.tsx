export const dynamic = "force-dynamic";
export const metadata = {
  title: "Contact | Churnalyzer",
  description:
    "Contact Churnalyzer to suggest a business failure case study, ask questions, or provide feedback.",
  keywords: [
    "contact",
    "churnalyzer",
    "business failure",
    "case study",
    "feedback",
  ],
  openGraph: {
    title: "Contact | Churnalyzer",
    description:
      "Contact Churnalyzer to suggest a business failure case study, ask questions, or provide feedback.",
    url: "https://churnalyzer.com/contact",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Churnalyzer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Churnalyzer",
    description:
      "Contact Churnalyzer to suggest a business failure case study.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Have a business failure case study to suggest? Questions about our
              analysis? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Send us a message
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Whether you have a case study suggestion, feedback, or just want
                to discuss business failures, we're here to listen.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-slate-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold leading-6 text-slate-900"
                  >
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-slate-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Contact Information
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Prefer to reach out directly? Here are other ways to get in
                touch with us.
              </p>

              <dl className="mt-10 space-y-8">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-red-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a
                      className="text-lg font-semibold text-slate-900 hover:text-red-600"
                      href="mailto:hello@churnalyzer.com"
                    >
                      hello@churnalyzer.com
                    </a>
                    <p className="mt-1 text-slate-600">
                      Send us your questions or case study suggestions
                    </p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Response time</span>
                    <Clock
                      className="h-7 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <p className="text-lg font-semibold text-slate-900">
                      24-48 hours
                    </p>
                    <p className="mt-1 text-slate-600">
                      Typical response time for all inquiries
                    </p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Location</span>
                    <MapPin
                      className="h-7 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <p className="text-lg font-semibold text-slate-900">
                      Global
                    </p>
                    <p className="mt-1 text-slate-600">
                      We analyze business failures from around the world
                    </p>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Suggest a Case Study
                </h3>
                <p className="text-slate-600">
                  Know of a business failure that deserves analysis? We're
                  always looking for new cases to study. Send us the company
                  name and we'll consider it for our next deep dive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
