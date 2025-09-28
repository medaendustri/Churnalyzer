"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ComparisonData {
  year: string
  blockbuster: string
  netflix: string
}

interface ComparisonChartProps {
  title: string
  data: ComparisonData[]
}

export function ComparisonChart({ title, data }: ComparisonChartProps) {
  const chartData = data.map((item) => ({
    year: item.year,
    Blockbuster: item.blockbuster,
    Netflix: item.netflix,
  }))

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-slate-900">{title}</h4>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="Blockbuster" fill="#ef4444" name="Blockbuster" />
            <Bar dataKey="Netflix" fill="#1e293b" name="Netflix" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">{item.year}</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-slate-600">Blockbuster: {item.blockbuster}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-slate-800 rounded-full mr-2"></div>
                <span className="text-slate-600">Netflix: {item.netflix}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
