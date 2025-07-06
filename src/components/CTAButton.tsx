"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTAButton() {
  return (
    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
      <Link href="/signup">
        Start Free Trial Now
      </Link>
    </Button>
  );
} 