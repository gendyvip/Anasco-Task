"use client";

import { Star, ChevronRight, Sun, Bell, Clock, Search, PanelLeft, PanelRight } from "lucide-react";

export default function Navbar({ onMenu, onToggleSidebar, onToggleRight, isRightOpen, className }: { onMenu?: () => void; onToggleSidebar?: () => void; onToggleRight?: () => void; isRightOpen?: boolean; className?: string }) {
  return (
    <header className={`w-full ${isRightOpen ? "xl:w-10/12" : "xl:w-full"} m-0 h-16 flex items-center gap-3 border-b border-gray-200 bg-white px-0 ${className || ""}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
      <button className="rounded-md p-2 ml-5 hover:bg-gray-100" aria-label="Toggle sidebar" onClick={onToggleSidebar}><PanelLeft size={18} /></button>
        <Star size={16} />
        <span className="hidden md:inline">Dashboards</span>
        <ChevronRight className="hidden md:inline" size={16} />
        <span className="hidden md:inline text-gray-900">Default</span>
      </div>
      <div className="relative ml-auto w-full max-w-xs">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 pl-9 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">⌘/</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600">
        <button className="rounded-md p-2 hover:bg-gray-100" aria-label="Theme"><Sun size={18} /></button>
        <button className="rounded-md p-2 hover:bg-gray-100" aria-label="History"><Clock size={18} /></button>
        <button className="rounded-md p-2 hover:bg-gray-100" aria-label="Notifications"><Bell size={18} /></button>
        <button className="rounded-md p-2 mr-5 hover:bg-gray-100" aria-label="Toggle right panel" onClick={onToggleRight}><PanelRight size={18} /></button>
      </div>
    </header>
  );
}



