"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Grid,
  ShoppingBag,
  FolderKanban,
  BookOpen,
  ChevronRight,
  UserSquare2,
  ShieldCheck,
  Layers3,
  FileText,
  MessageSquareText,
} from "lucide-react";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openUser, setOpenUser] = useState(true);
  const pathname = usePathname();

  const dashboards = [
    { href: "/dashboards/default", label: "Default", Icon: Grid },
    { href: "/dashboards/ecommerce", label: "eCommerce", Icon: ShoppingBag },
    { href: "/dashboards/projects", label: "Projects", Icon: FolderKanban },
    { href: "/dashboards/courses", label: "Online Courses", Icon: BookOpen },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/30 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-60 overflow-y-auto custom-scroll border-r border-b border-gray-200 bg-white transition-transform duration-200 md:translate-x-0 md:static ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-4 bg-white">
          <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-gray-200">
            <Image src="/assets/group.png" alt="Group" width={32} height={32} />
          </div>
          <span className="font-semibold tracking-tight">ANASCO GROUP</span>
        </div>

        <nav className="px-3 py-1">
          <div className="px-2 pb-2 text-[14px] font-light text-gray-500">Favorites <span className="pl-4 text-gray-300">Recently</span></div>
          <div className="space-y-1 pb-3">
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Overview
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> Projects
            </div>
          </div>

          <div className="px-2 pt-2 pb-1 text-[14px] font-light text-gray-500">Dashboards</div>
          <div className="space-y-1 pb-3">
            {dashboards.map(({ href, label, Icon }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <a
                  key={href}
                  href={href}
                  className={`group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r-md bg-gray-900 transition-all ${
                      isActive ? "w-1" : "w-0 group-hover:w-1"
                    }`}
                  />
                  <ChevronRight size={16} className="text-gray-300" />
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              );
            })}
          </div>

          <div className="px-2 pt-2 pb-1 text-[14px] font-light text-gray-500">Pages</div>
          <button
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
            onClick={() => setOpenUser((v) => !v)}
            aria-expanded={openUser}
          >
            <ChevronRight size={16} className={`transition-transform ${openUser ? "rotate-90" : "rotate-0"}`} />
            <UserSquare2 size={16} />
            <span className="flex-1">User Profile</span>
          </button>
          {openUser && (
            <div className="ml-6 space-y-1 pb-2">
              {[
                { href: "/user/overview", label: "Overview" },
                { href: "/user/projects", label: "Projects" },
                { href: "/user/campaigns", label: "Campaigns" },
                { href: "/user/documents", label: "Documents" },
                { href: "/user/followers", label: "Followers" },
              ].map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className={`block rounded-md px-3 py-1.5 text-sm hover:bg-gray-100 ${
                    pathname === it.href || pathname.startsWith(`${it.href}/`) ? "bg-gray-100 text-gray-900" : "text-gray-600"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="text-gray-300 pl-4"></span>
                    <span>{it.label}</span>
                  </span>
                </a>
              ))}
            </div>
          )}

          <div className="space-y-1">
            <SidebarStaticLink href="/account" label="Account" Icon={ShieldCheck} pathname={pathname} />
            <SidebarStaticLink href="/corporate" label="Corporate" Icon={Layers3} pathname={pathname} />
            <SidebarStaticLink href="/blog" label="Blog" Icon={FileText} pathname={pathname} />
            <SidebarStaticLink href="/social" label="Social" Icon={MessageSquareText} pathname={pathname} />
          </div>
        </nav>
      </aside>
    </>
  );
}

function SidebarStaticLink({ href, label, Icon, pathname }: { href: string; label: string; Icon: any; pathname: string }) {
  const isActive = pathname === href;
  return (
    <a
      href={href}
      className={`group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
        isActive ? "bg-gray-100 text-gray-900" : "text-gray-600"
      }`}
    >
      <span className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r-md bg-gray-900 transition-all ${isActive ? "w-1" : "w-0 group-hover:w-1"}`} />
      <ChevronRight size={16} className="text-gray-300" />
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );
}



