"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import RightPanel from "../components/layout/RightPanel";
import data from "../data/dashboard.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(true);
  useEffect(() => {
    document.title = "Anasco Group";
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}
      >
        <div className="min-h-screen bg-white text-gray-900">
          <div className="md:flex md:gap-0">
            {sidebarOpen && <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
            <div className="flex-1">
              <Navbar
                onMenu={() => setSidebarOpen(true)}
                onToggleSidebar={() => setSidebarOpen((v) => !v)}
                onToggleRight={() => setRightOpen((v) => !v)}
                isRightOpen={rightOpen}
                className="border-b"
              />
              <main className="p-0">
                <div className="items-start md:grid md:grid-cols-12 md:gap-0 xl:grid xl:grid-cols-12 xl:gap-0">
                  <div className={rightOpen ? "md:col-span-8 xl:col-span-10" : "md:col-span-12 xl:col-span-12"}>
                    {children}
                  </div>
                  {rightOpen && (
                    <div className="md:col-span-4 pb-6 md:mt-4 xl:col-span-2 xl:-mt-16">
                      <RightPanel
                        notifications={data.notifications}
                        activities={data.activities}
                        contacts={data.contacts}
                      />
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
