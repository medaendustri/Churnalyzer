export const metadata = {
  title: "Privacy Policy | Churnalyzer",
  description:
    "Read Churnalyzer's privacy policy to learn how we collect, use, and protect your information.",
  keywords: ["privacy", "policy", "churnalyzer", "data protection", "security"],
  openGraph: {
    title: "Privacy Policy | Churnalyzer",
    description:
      "Read Churnalyzer's privacy policy to learn how we collect, use, and protect your information.",
    url: "https://churnalyzer.com/privacy",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Churnalyzer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Churnalyzer",
    description:
      "Read Churnalyzer's privacy policy to learn how we collect, use, and protect your information.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import { Shield, Eye, Cookie, Database, Mail, FileText } from "lucide-react";

export default function PrivacyPage() {
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
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Information We Collect
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Email address (when you subscribe to our newsletter)</li>
                  <li>Name and contact information (when you contact us)</li>
                  <li>Comments and feedback you provide</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  How We Use Your Information
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    To send you our newsletter and updates about new case
                    studies
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To improve our website and content based on usage patterns
                  </li>
                  <li>To analyze website traffic and user behavior</li>
                  <li>To prevent fraud and ensure website security</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Cookie className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Cookies and Tracking
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-600 mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Types of Cookies We Use:
                </h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>

                <p className="text-slate-600 mt-4">
                  You can control cookies through your browser settings.
                  However, disabling certain cookies may affect website
                  functionality.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Information Sharing
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-600 mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>
                    With service providers who help us operate our website
                    (hosting, analytics)
                  </li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Data Security
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-600">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. This includes encryption, secure
                  servers, and regular security audits.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Your Rights
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Access the personal information we have about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Unsubscribe from our newsletter at any time</li>
                  <li>Object to certain processing of your information</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  Contact Us
                </h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-600">
                  If you have questions about this Privacy Policy or how we
                  handle your information, please contact us at:
                </p>
                <p className="text-slate-600 mt-2">
                  <strong>Email:</strong> privacy@churnalyzer.com
                  <br />
                  <strong>Subject:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-red-900 mb-3">
                Policy Updates
              </h2>
              <p className="text-red-800">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. We encourage you
                to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
