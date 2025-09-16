"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const Line = dynamic(() => import("react-chartjs-2").then((m) => m.Line), {
  ssr: false,
});
const Bar = dynamic(() => import("react-chartjs-2").then((m) => m.Bar), {
  ssr: false,
});
const Doughnut = dynamic(
  () => import("react-chartjs-2").then((m) => m.Doughnut),
  { ssr: false }
);

// Palette approximated from the provided screenshot
const palette = {
  navy: "#0B1220",
  blue: "#B9D4FF",
  blueFill: "rgba(185,212,255,0.45)",
  barBlue: "#B9D4FF",
  mint: "#C9F1DD",
  gray: "#D7DEE7",
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export function LineChartCard({
  title,
  labels,
  current,
  previous,
}: {
  title: string;
  labels: string[];
  current: number[];
  previous: number[];
}) {
  const options = useMemo(() => ({
    responsive: true,
    layout: { padding: { left: 0, right: 24, top: 8, bottom: 24 } },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { padding: 12, color: "#94a3b8" },
        offset: true,
      },
      y: {
        grid: { color: "#eef2f7" },
        ticks: {
          display: true,
          stepSize: 10,
          callback: (val: any) => `${val}M`,
          color: "#94a3b8",
          padding: 12,
        },
        suggestedMax: 30,
        suggestedMin: 0,
        border: { display: false },
      },
    },
    elements: { point: { radius: 0 } },
    interaction: { intersect: false, mode: "nearest" as const },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${Number(ctx.parsed.y).toLocaleString(undefined, { maximumFractionDigits: 1 })}M`,
          title: (items: any[]) => (items?.[0] ? items[0].label : ""),
        },
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 8,
        displayColors: false,
      },
    },
  }) as const, []);

  const dataset = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Current Week",
        data: current,
        borderColor: palette.navy,
        backgroundColor: "rgba(11,18,32,0.0)",
        borderWidth: 2,
        fill: false,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: palette.navy,
        pointBorderColor: palette.navy,
      },
      {
        label: "Previous Week",
        data: previous,
        borderColor: palette.blue,
        backgroundColor: palette.blueFill,
        fill: true,
        borderDash: [6, 6],
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: palette.blue,
        pointBorderWidth: 2,
      },
    ],
  }), [labels, current, previous]);

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <button className="font-medium text-gray-800">Total Users</button>
          <button className="text-gray-400 hover:text-gray-600">Total Projects</button>
          <button className="text-gray-400 hover:text-gray-600">Operating Status</button>
          <span className="mx-2 hidden h-4 w-px bg-gray-200 sm:inline" />
          <span className="hidden items-center gap-2 sm:flex">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#111827]" /> Current Week
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#93C5FD]" /> Previous Week
            </span>
          </span>
        </div>
      </div>
      <Line options={options} data={dataset} height={100} />
    </div>
  );
}

export function BarChartCard({ title, labels, data, colors }: { title: string; labels: string[]; data: number[]; colors?: string[] }) {
  const barColors =
    colors || ["#8EA2FF", "#c9f1dd", "#0B1220", "#B9E2FF", "#A9BED3", "#a1e3cb"];
  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#94a3b8" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#eef2f7" },
        border: { display: false },
        ticks: {
          color: "#94a3b8",
          stepSize: 10,
          callback: (v: any) => `${v}M`,
        },
        suggestedMax: 30,
      },
    },
    elements: {
      bar: {
        borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 0, bottomRight: 0 },
        borderSkipped: false,
      },
    },
  }) as const, []);

  const dataset = useMemo(() => ({
    labels,
    datasets: [
      {
        data,
        backgroundColor: barColors,
        maxBarThickness: 28,
      },
    ],
  }), [labels, data, barColors]);

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="mb-2 text-sm text-gray-600">{title}</div>
      <div className="h-64">
        <Bar options={options} data={dataset} />
      </div>
    </div>
  );
}

export function DonutCard({
  title,
  labels,
  data,
  colors,
}: {
  title: string;
  labels: string[];
  data: number[];
  colors?: string[];
}) {
  const defaultDonutColors = ["#0F1115", "#CDEFD6", "#8EA2FF", "#BFE4FF"];
  const segmentColors = colors && colors.length ? colors : defaultDonutColors;

  const dataset = useMemo(() => ({
    labels,
    datasets: [
      {
        data,
        backgroundColor: segmentColors,
        borderWidth: 0,
        borderRadius: 8,
        spacing: 6,
      },
    ],
  }), [labels, data, segmentColors]);
  const options = useMemo(() => ({
    cutout: "68%",
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  }) as const, []);
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="mb-2 text-sm text-gray-600">{title}</div>
      <div className="grid grid-cols-2 items-center">
        <div className="h-40 mb-6 mt-12"><Doughnut data={dataset} options={options} /></div>
        <ul className="space-y-2 text-sm">
          {labels.map((l, i) => (
            <li key={l} className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: segmentColors[i] }} />
                <span>{l}</span>
              </div>
              <span className="text-gray-500 mb-2 w-14 text-right">{data[i].toFixed(1)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


