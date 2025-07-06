"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingTrialButton() {
  return (
    <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
      <Link href="/signup">
        Start Your Free Trial
      </Link>
    </Button>
  );
}

export function PricingCTAButton() {
  return (
    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
      <Link href="/signup">
        Start 1-Month Free Trial
      </Link>
    </Button>
  );
} 