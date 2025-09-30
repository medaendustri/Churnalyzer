"use client";

interface Feature {
  feature: string;
  [key: string]: string;
}

interface FeatureComparisonProps {
  title: string;
  features: Feature[];
}

export function FeatureComparison({ title, features }: FeatureComparisonProps) {
  if (!features || features.length === 0) {
    return <p>No comparison data available.</p>;
  }

  // "feature" anahtarı dışındaki diğer anahtarları dinamik olarak alalım (örn: ["vine", "tiktok"])
  const competitors = Object.keys(features[0]).filter(
    (key) => key !== "feature"
  );

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
      <div className="bg-white rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
              >
                Feature
              </th>
              {competitors.map((competitor) => (
                <th
                  key={competitor}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider capitalize"
                >
                  {competitor}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {features.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {item.feature}
                </td>
                {competitors.map((competitor) => (
                  <td
                    key={competitor}
                    className="px-6 py-4 whitespace-nowrap text-sm text-slate-600"
                  >
                    {item[competitor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
