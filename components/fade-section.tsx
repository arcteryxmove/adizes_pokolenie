"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeSection({
  id,
  ariaLabelledBy,
  children,
}: {
  id: string;
  ariaLabelledBy: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`fade-section${visible ? " is-visible" : ""}`}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
