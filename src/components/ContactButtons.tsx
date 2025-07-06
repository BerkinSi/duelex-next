"use client";

import { Button } from "@/components/ui/button";

export const EmailSupportButton = () => (
  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
    <a href="mailto:support@duelex.com">support@duelex.com</a>
  </Button>
);

export const AccountHelpButton = () => (
  <Button asChild variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
    <a href="mailto:support@duelex.com">support@duelex.com</a>
  </Button>
);

export const EmergencyContactButton = () => (
  <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
    <a href="mailto:support@duelex.com?subject=URGENT">Send Urgent Email</a>
  </Button>
); 