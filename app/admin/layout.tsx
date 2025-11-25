"use client";

import type React from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen bg-background">

      <main
        className="p-6 transition-all duration-300"
      >
        {children}
      </main>
    </div>
  );
}
