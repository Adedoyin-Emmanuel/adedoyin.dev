"use client";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import ColoredLink from "../components/link";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const Projects = () => {
  const projects = [
    {
      name: "Lexi Contract",
      description:
        "Lexicontract is a tool that helps users understand their contracts in seconds.",
      url: "https://lexicontract.com",
      image: "https://lexicontract.com/logo.png",
    },
    {
      name: "Holytab",
      description:
        "Transform every new tab into a moment of spiritual reflection.",
      url: "https://holytab.space",
      image: "https://holytab.space/logo.png",
    },
  ];

  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
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
  }, []);

  return (
    <div className="my-8 md:my-12 content-section w-full md:px-0">
      <h1
        className={cn(
          playFairDisplay.className,
          "text-3xl lg:text-[50px] mb-3 font-medium text-center"
        )}
      >
        My Projects
      </h1>

      <div className="w-full mb-10 text-center">
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
          "Behind every great solution is a developer who never gave up on a
          challenging problem."
        </p>
        <span className="text-sm text-muted-foreground/80 mt-2 block">
          — Adedoyin Emmanuel
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full md:max-w-2xl">
        {projects.map((project, index) => (
          <Link
            href={project.url.trim()}
            key={index}
            target="_blank"
            className="project-card group block outline-none w-full"
          >
            <div className="flex items-center gap-4 p-3 md:p-4 rounded-lg border bg-card/50 hover:bg-secondary/40 transition-all duration-300">
              <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 overflow-hidden rounded-md bg-background/80 border flex items-center justify-center p-2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col min-w-0 flex-1 py-1">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="font-semibold text-base md:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground/80 font-normal leading-normal line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <ColoredLink
          href="https://github.com/adedoyin-emmanuel"
          className="inline-flex items-center gap-2 transition-colors group text-black"
        >
          Find others on Github
        </ColoredLink>
      </div>
    </div>
  );
};

export default Projects;
