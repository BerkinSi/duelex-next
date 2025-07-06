"use client";

import { Button } from "@/components/ui/button";

export default function SignupTrialButton() {
  const handleStartTrial = () => {
    // Replace this URL with your actual Lemon Squeezy checkout link
    window.open("https://duelex.gumroad.com/l/vkujk", "_blank");
  };

  return (
    <Button
      onClick={handleStartTrial}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
    >
      Start 1-Month Free Trial
    </Button>
  );
} 