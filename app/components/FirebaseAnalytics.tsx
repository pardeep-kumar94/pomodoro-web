"use client";

import { useEffect } from "react";
import { analytics } from "../lib/firebase";
import { logEvent } from "firebase/analytics";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (analytics) {
      // Log page view
      logEvent(analytics, "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });

      // Log initial visit
      logEvent(analytics, "website_visit", {
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return null;
}
