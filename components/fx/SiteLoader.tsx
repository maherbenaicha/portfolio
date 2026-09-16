"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHidden(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={hidden ? "site-loader hidden" : "site-loader"} aria-hidden={hidden}>
      <div className="loader-initials">MBA</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  );
}
