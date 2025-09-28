"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TimelineEvent {
  year: number
  title: string
  description: string
}

interface InteractiveTimelineProps {
  events: TimelineEvent[]
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>

        {/* Timeline events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-start cursor-pointer"
              onClick={() => setSelectedEvent(selectedEvent?.year === event.year ? null : event)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white text-sm font-bold">
                {index + 1}
              </div>

              {/* Event content */}
              <div className="ml-6 flex-1">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-slate-900">{event.title}</h4>
                    <span className="text-sm font-medium text-slate-500">{event.year}</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected event details */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-6"
          >
            <h4 className="text-xl font-bold text-red-900 mb-2">
              {selectedEvent.year}: {selectedEvent.title}
            </h4>
            <p className="text-red-800">{selectedEvent.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
