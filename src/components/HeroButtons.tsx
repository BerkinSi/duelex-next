"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
        <Link href="/signup">
          Start Free Trial
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
        <Link href="/how-it-works">
          See How It Works
        </Link>
      </Button>
    </div>
  );
} 