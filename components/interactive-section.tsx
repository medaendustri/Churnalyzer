"use client"

import { InteractiveTimeline } from "./interactive/interactive-timeline"
import { ComparisonChart } from "./interactive/comparison-chart"
import { AutopsyReport } from "./interactive/autopsy-report"

interface InteractiveSectionProps {
  data: any
}

export function InteractiveSection({ data }: InteractiveSectionProps) {
  if (!data) return null

  const renderInteractiveComponent = () => {
    switch (data.type) {
      case "timeline":
        return <InteractiveTimeline events={data.events} />
      case "comparison":
        return <ComparisonChart title={data.title} data={data.data} />
      case "autopsy":
        return (
          <AutopsyReport
            causeOfDeath={data.causeOfDeath}
            symptoms={data.symptoms}
            lessonsLearned={data.lessonsLearned}
            timeline={data.timeline}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-slate-50 rounded-2xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Interactive Analysis</h3>
        <p className="text-slate-600">Explore the data behind this business failure</p>
      </div>
      {renderInteractiveComponent()}
    </div>
  )
}
