import Link from "next/link";
import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import ColoredLink from "../components/link";
import GsapReveal from "../components/gsap-reveal";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const projects = [
  {
    name: "Holy Creed",
    description:
      "A cross-platform faith app that delivers a fresh creed to read and reflect on every day, with a clean, focused reading experience.",
    url: "https://holycreed.app",
  },
  {
    name: "Leetbase",
    description:
      "A Chrome extension that syncs your LeetCode submissions to GitHub and pulls in relevant YouTube videos right in the same tab, so you can watch a walkthrough for the exact problem you're solving.",
    url: "https://leetbase.adedoyin.dev",
  },
  {
    name: "Telebot",
    description:
      "A Telegram bot starter kit built on Cloudflare Workers that lets you ship a production-ready bot without the boilerplate.",
    url: "https://github.com/adedoyin-emmanuel/telebot",
  },
];

const Projects = () => {
  return (
    <GsapReveal className="my-8 md:my-12 content-section w-full md:px-0">
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

      <ul className="list-disc list-inside space-y-3 w-full md:max-w-2xl">
        {projects.map((project, index) => (
          <li key={index} className="project-card leading-relaxed">
            <Link
              href={project.url.trim()}
              target="_blank"
              className="underline text-blue-500"
            >
              {project.name}
            </Link>
            : {project.description}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <ColoredLink
          href="https://github.com/adedoyin-emmanuel"
          className="inline-flex items-center gap-2 transition-colors group text-black"
        >
          Find others on Github
        </ColoredLink>
      </div>
    </GsapReveal>
  );
};

export default Projects;
