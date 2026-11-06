"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/site-path";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="site-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Auntie Olu School website">
      <span className="loader-halo" aria-hidden="true" />
      <Image
        className="loader-badge"
        src={assetPath("/images/auntie-olu-school-badge.png")}
        alt="Auntie Olu School badge"
        width={160}
        height={160}
        priority
      />
    </div>
  );
}
