"use client";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const HallOfFame = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="my-8 content-section">
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        Hall Of Fame
      </h1>
      <div className="text-center mt-4 text-gray-600">
        Celebrating milestones, achievements, and key contributions.
      </div>

      <Separator className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Academic Milestones</h2>
        <div className="flex mb-4">
          <span className="text-gray-600 mr-1">CS Major </span> @{" "}
          <Link
            href={"https://uopeople.edu "}
            className="underline flex items-end text-center mx-1"
          >
            {" "}
            University Of The People <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-gray-600">
          Progressed through core courses in software development, computer
          science, and engineering principles.
        </p>
      </section>

      <Separator className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Professional Achievements</h2>
        <ul className="list-disc list-inside">
          <li>
            Software Engineer at{" ("}
            <Link
              href="https://nativelyai.com"
              className="underline text-blue-500"
              target="_blank"
            >
              NativelyAI
            </Link>{" "}
            ,{" "}
            <Link
              href="https://lablab.ai"
              className="underline text-blue-500"
              target="_blank"
            >
              LabLab.ai
            </Link>
            {")"}, Ex{" "}
            <Link
              href="https://punch.cool"
              className="underline text-blue-500"
              target="_blank"
            >
              {" "}
              Punch Agency
            </Link>
          </li>

          <li>
            ALX Alumni{" "}
            <Link
              href="https://alxafrica.com"
              className="underline text-blue-500"
              target="_blank"
            >
              ALX Africa
            </Link>
            , certified as a Software Engineer graduate, specialized in backend
            development.
          </li>

          <li>
            Led team{" "}
            <Link
              href="https://taikai.network/hackbox/hackathons/webfusionlagos/projects/clpk6l8s300bi0z01tim9nv28/idea"
              className="underline text-blue-500"
              target="_blank"
            >
              KEGHA
            </Link>{" "}
            to secure First Runner-Up position in the{" "}
            <Link
              href="taikai.network/hackbox/hackathons/webfusionlagos/projects"
              className="underline text-blue-500"
              target="_blank"
            >
              NEAR Web Fusion Hackathon
            </Link>{" "}
            , developing innovative solutions under tight deadlines.
          </li>
          <li>
            <Link
              href="https://hng.tech"
              target="_blank"
              className="underline text-blue-500"
            >
              HNGX Finalist
            </Link>{" "}
            specialized as a Backend Engineer, ranked among the top 300 out of
            11,000 participants in an internship program.
          </li>

          <li>
            Won a honorary award at{" "}
            <Link
              href="https://lablab.ai/event/co-creating-with-gpt-5"
              className="underline text-blue-500"
              target="_blank"
            >
              Co-creating with GPT-5 hackathon.
            </Link>{" "}
            I built Lexi (A tool that helps users understand their contracts in
            seconds){" "}
            <Link
              href="https://lexicontract.com"
              className="underline text-blue-500"
              target="_blank"
            >
              Lexicontract.com
            </Link>{" "}
          </li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Open Source Contributions</h2>
        <ul className="list-disc list-inside">
          <li>
            Creator{" "}
            <Link
              href="https://github.com/facebook/react"
              className="underline text-blue-500"
            >
              Telebot
            </Link>{" "}
            — A Telegram bot starter kit built on Telegraf, streamlining
            deployments to Vercel or Cloudflare Workers.
          </li>

          <li>
            Maintainer of{" "}
            <Link
              href="https://github.com/adedoyin-emmanuel/squad-js-sdk"
              className="underline text-blue-500"
            >
              Squad SDK
            </Link>{" "}
            — simplifying payment integration for developers.
          </li>

          <li>
            Maintainer of{" "}
            <Link
              href="https://github.com/adedoyin-emmanuel/methane-cli"
              className="underline text-blue-500"
              target="_blank"
            >
              Methane CLI
            </Link>
            , a tool to streamline React/Next.js component creation.
          </li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <blockquote className="italic text-gray-600 border-l-4 pl-4">
          "Adedoyin's tool{" "}
          <Link
            href="https://github.com/adedoyin-emmanuel/methane-cli"
            className="underline text-blue-500"
            target="_blank"
          >
            Methane CLI
          </Link>{" "}
          inspired the creation of{" "}
          <Link
            href={
              "https://github.com/dolphjs/dolph-cli?tab=readme-ov-file#credit"
            }
            className="underline text-blue-500"
            target="_blank"
          >
            {" "}
            Dolph JS CLI."
          </Link>
          <span className="block mt-2 font-bold">— DolphJS Team</span>
        </blockquote>
        <blockquote className="italic text-gray-600 border-l-4 pl-4 mt-4">
          "Emma consistently ships high-quality products quickly. A reliable
          asset to any team!"
          <Link
            href={"https://github.com/adedoyin-emmanuel/adedoyinemmanuel.dev"}
            className="underline text-blue-500"
            target="_blank"
          >
            {" "}
            (I Built My V2 Portfolio in less than 12hrs)
            <Link
              target="_blank"
              href="https://wakatime.com/badge/github/Adedoyin-Emmanuel/adedoyinemmanuel.dev"
            >
              <img
                src="https://wakatime.com/badge/github/Adedoyin-Emmanuel/adedoyinemmanuel.dev.svg"
                alt="wakatime"
              />
            </Link>
          </Link>
          <span className="block mt-2 font-bold">— Project Lead</span>
        </blockquote>
        <p className="text-gray-600 mt-4">...and many more.</p>
      </section>
    </div>
  );
};

export default HallOfFame;
