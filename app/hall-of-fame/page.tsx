import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import GsapReveal from "@/app/components/gsap-reveal";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const HallOfFame = () => {
  return (
    <GsapReveal className="my-8 content-section">
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
          <li className="mb-6 list-none">
            <div className="font-bold text-lg mb-2">
              Product Engineer & Technical Judge @ {" "}
              <Link href="https://nativelyai.com" className="underline text-blue-500" target="_blank">NativelyAI</Link>
              {" "}&{" "}
              <Link href="https://lablab.ai" className="underline text-blue-500" target="_blank">LabLab.ai</Link>
            </div>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <span className="font-medium text-foreground">Agentic Core Architectures:</span> Engineered autonomous state machines for task execution within <span className="italic">Builder</span>, enabling LLM agents to auto-start, self-assign, track, and complete full-stack features sequentially.
              </li>
              <li>
                <span className="font-medium text-foreground">Agent Behavior & Guardrails:</span> Designing alignment protocols to eliminate non-deterministic UI output, reducing streaming latency over broken sockets, and writing security rules to neutralize prompt injection and jailbreaks.
              </li>
              <li>
                <span className="font-medium text-foreground">Custom Design System Implementation:</span> Re-architected the layout engine for generated projects, shifting output away from generic code templates toward a standardized design token system.
              </li>
              <li>
                <span className="font-medium text-foreground">Developer Relations & Technical Evaluation:</span> Serve as an official Hackathon Judge and engineering mentor at Lablab.ai, alongside leading DevRel hotfix responses for beta platform testers.
              </li>
            </ul>
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
            Creator of{" "}
            <Link
              href="https://github.com/adedoyin-emmanuel/telebot"
              className="underline text-blue-500"
              target="_blank"
            >
              Telebot
            </Link>{" "}
            — a Telegram bot starter kit built on Cloudflare Workers, so you can
            ship a bot to production without the boilerplate.
          </li>

          <li>
            Creator of{" "}
            <Link
              href="https://github.com/adedoyin-emmanuel/tsfluent"
              className="underline text-blue-500"
              target="_blank"
            >
              Tsfluent
            </Link>{" "}
            — a fluent Result type for TypeScript that makes handling success and
            failure states clean and expressive.
          </li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <blockquote className="italic text-gray-600 border-l-4 pl-4">
          "Emmanuel delivers consistently, every single time. He's the person you
          can trust to build and fix things quickly."
          <span className="block mt-2 font-bold">— Team Lead</span>
        </blockquote>
        <blockquote className="italic text-gray-600 border-l-4 pl-4 mt-4">
          "Emma consistently ships high-quality products quickly. A reliable
          asset to any team!"
          <span className="block mt-2 font-bold">— Project Lead</span>
        </blockquote>
        <p className="text-gray-600 mt-4">...and many more.</p>
      </section>
    </GsapReveal>
  );
};

export default HallOfFame;
