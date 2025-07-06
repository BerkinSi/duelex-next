"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
        <Link href="/signup">
          Start Free Trial
        </Link>
      </Button>
      <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
        <a href="mailto:support@duelex.com">Contact Support</a>
      </Button>
    </div>
  );
} 