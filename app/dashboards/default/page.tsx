import type { Metadata } from "next";
import StatsCards from "../../../components/ui/StatsCards";
import { LineChartCard, BarChartCard, DonutCard } from "../../../components/ui/Charts";
import TrafficWebsite from "../../../components/ui/TrafficWebsite";
import data from "../../../data/dashboard.json";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard: Default",
  description: "Analytics overview for Anasco Group – default dashboard with users, traffic, and locations.",
  keywords: [
    "anasco",
    "dashboard",
    "analytics",
    "traffic",
    "charts",
    "users",
  ],
  openGraph: {
    title: "Dashboard: Default | Anasco Group",
    description:
      "Analytics overview for Anasco Group – users, projects, device traffic, and locations.",
    type: "website",
    url: "/dashboards/default",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard: Default | Anasco Group",
    description:
      "Analytics overview for Anasco Group – users, projects, device traffic, and locations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DefaultDashboardPage() {
  return (
    <div className="w-full p-6 space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-900 mb-4">
        <span className="font-medium">Today</span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>
      <StatsCards stats={data.cards} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <LineChartCard
            title="Total Users"
            labels={data.lineLabels}
            current={data.lineCurrent}
            previous={data.linePrevious}
          />
        </div>
        <TrafficWebsite data={data.websites} />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <BarChartCard
          title="Traffic by Device"
          labels={data.bar.map((d) => d.label)}
          data={data.bar.map((d) => d.value)}
          colors={["#8EA2FF", "#C9F1DD", "#0B1220", "#B9E2FF", "#A9BED3", "#BFEBD9"]}
        />
        <DonutCard
          title="Traffic by Location"
          labels={data.location.labels}
          data={data.location.values}
          colors={data.location.colors}
        />
      </div>
    </div>
  );
}



