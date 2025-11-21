"use client";

import type React from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main
        className={`p-6 transition-all duration-300 ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
