"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface AutopsyReportProps {
  causeOfDeath: string
  symptoms: string[]
  lessonsLearned: string[]
  timeline: Array<{ date: string; event: string }>
}

export function AutopsyReport({ causeOfDeath, symptoms, lessonsLearned, timeline }: AutopsyReportProps) {
  const [activeTab, setActiveTab] = useState("diagnosis")

  const tabs = [
    { id: "diagnosis", label: "Diagnosis", icon: "🔍" },
    { id: "symptoms", label: "Symptoms", icon: "⚠️" },
    { id: "lessons", label: "Lessons", icon: "💡" },
    { id: "timeline", label: "Timeline", icon: "📅" },
  ]

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-red-50 border-b border-red-200 p-6">
        <h4 className="text-2xl font-bold text-red-900 mb-2">Business Autopsy Report</h4>
        <p className="text-red-700">A detailed analysis of what went wrong</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "diagnosis" && (
            <div>
              <h5 className="text-lg font-semibold text-slate-900 mb-4">Primary Cause of Failure</h5>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">{causeOfDeath}</p>
              </div>
            </div>
          )}

          {activeTab === "symptoms" && (
            <div>
              <h5 className="text-lg font-semibold text-slate-900 mb-4">Warning Signs</h5>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-yellow-600 text-sm">⚠️</span>
                    </div>
                    <p className="text-slate-700">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "lessons" && (
            <div>
              <h5 className="text-lg font-semibold text-slate-900 mb-4">Key Takeaways</h5>
              <div className="space-y-3">
                {lessonsLearned.map((lesson, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 text-sm">💡</span>
                    </div>
                    <p className="text-slate-700">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div>
              <h5 className="text-lg font-semibold text-slate-900 mb-4">Critical Events</h5>
              <div className="space-y-4">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-500 mr-4">{event.date}</div>
                    <div className="flex-1">
                      <p className="text-slate-700">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
