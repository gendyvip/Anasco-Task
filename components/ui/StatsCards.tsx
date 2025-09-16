import { ArrowUpRight } from "lucide-react";
import type { Stat } from "../../types/dashboard";

export default function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`rounded-2xl p-6 ${
            i % 2 === 0 ? "bg-[#E8F3FF]" : "bg-[#EAF0F6]"
          }`}
        >
          <div className="text-sm font-bold text-gray-700">{s.label}</div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-3xl font-semibold text-gray-900">{s.value}</div>
            {s.delta ? (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <span>{s.delta}</span>
                <ArrowUpRight size={14} />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}


