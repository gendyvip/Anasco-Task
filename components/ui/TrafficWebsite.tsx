export default function TrafficWebsite({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="mb-4 text-sm text-gray-600">Traffic by Website</div>
      <ul className="space-y-5">
        {data.map((d) => (
          <li key={d.label} className="flex items-center gap-3 text-sm">
            <span className="w-24 text-gray-600">{d.label}</span>
            <div className="h-2 w-full rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full bg-gray-900"
                style={{ width: `${(d.value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


