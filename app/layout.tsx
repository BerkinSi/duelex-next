// app/layout.tsx

import "../src/index.css";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/providers/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DueLex – AI-Powered Legal Deadline Assistant",
  description: "Never miss a legal deadline again. DueLex manages your deadlines through natural language emails.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Providers>
          <TooltipProvider>
            <main>{children}</main>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
