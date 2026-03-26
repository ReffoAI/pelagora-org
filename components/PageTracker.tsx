"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

interface PageTrackerProps {
  event: string;
  props?: Record<string, string | number>;
}

export function PageTracker({ event, props }: PageTrackerProps) {
  useEffect(() => {
    track(event, props);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
