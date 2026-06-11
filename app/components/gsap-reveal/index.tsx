"use client";

import gsap from "gsap";
import React from "react";

interface GsapRevealProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Client-only animation wrapper.
 *
 * The pages that use this stay fully server-rendered (no "use client"), so
 * crawlers and AI agents receive raw semantic HTML. The GSAP reveal runs only
 * after the component mounts on the client, scoped to this element via
 * gsap.context so the selectors never leak across pages and clean up on unmount.
 */
const GsapReveal = ({ className, children }: GsapRevealProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GsapReveal;
