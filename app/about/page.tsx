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

const About = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="my-4 content-section">
      <br />
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        Adedoyin Emmanuel Adeniyi
      </h1>
      <br />

      <div className="mx-auto flex items-center justify-center">
        <span className="text-gray-600 mx-1">CS Major </span> @{" "}
        <Link
          href={"https://uopeople.edu "}
          className="underline flex items-end text-center mx-1"
        >
          {" "}
          University Of The People <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="lg:flex items-start justify-center lg:gap-6 lg:w-[900px] my-5">
          <img
            src={"/emma-3.jpg"}
            alt="Adedoyin Emmanuel Adeniyi"
            width={400}
            height={600}
            className="rounded-lg mx-auto lg:my-0 my-4"
          />

          <div className="lg:my-0 my-3">
            <p>
              I am a Software Engineer with over 4 years of experience and an
              alumnus of the{" "}
              <Link
                href="https://alxafrica.com"
                className="underline text-blue-500"
              >
                ALX Software Engineering Program
              </Link>{" "}
              , currently pursuring a Bachelors degree in Computer Science with
              a focus on Backend systems and Cloud infrastructure.
            </p>

            <Separator className="my-5" />

            <p>
              Currently, I enjoy working on backend systems, bot development,
              web scraping and automation.
            </p>

            <br />

            <p>
              I also build fullstack applications (Web Apps and Mobile apps). I
              build fast,accessible and seamless user interfaces along with
              scaleable backend systems. I'm the dependency that any engineering
              team can count on to build production ready applications with
              Godspeed.
            </p>

            <br />

            <p>
              I am passionate about open source which is why I make most of my
              side projects publicly available. My goal is to help others learn
              from and use the tools I create. I've built serveral libraries,
              SDKs, CLI tools & BOTs, spanning web-frameworks, payment gateways,
              automation and bot development. You can find all my projects on
              GitHub.{" "}
              <Link
                href="https://github.com/adedoyin-emmanuel"
                className="underline text-blue-500"
              >
                Github - @adedoyin-emmanuel
              </Link>{" "}
            </p>

            <Separator className="my-5" />

            <p>
              In my free time, I enjoy playing Call Of Duty and Racing Games.{" "}
            </p>

            <Link href={"/projects"}>
              <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-32 flex items-center justify-center">
                Projects <ArrowUpRight strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
