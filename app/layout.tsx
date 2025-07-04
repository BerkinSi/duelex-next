import "../src/index.css"
import { ReactNode } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from "@/providers/Providers"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
