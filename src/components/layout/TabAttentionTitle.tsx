"use client";

import { useEffect } from "react";

const HIDDEN_TAB_TITLE = "Wir vermissen dich! 😢";

export function TabAttentionTitle() {
  useEffect(() => {
    let pageTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pageTitle = document.title;
        document.title = HIDDEN_TAB_TITLE;
        return;
      }

      document.title = pageTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (document.title === HIDDEN_TAB_TITLE) {
        document.title = pageTitle;
      }
    };
  }, []);

  return null;
}
