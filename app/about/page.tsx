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

const About = () => {
  return (
    <GsapReveal className="my-4 content-section">
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
              I'm a Product Engineer. I'm also an alumnus of the{" "}
              <Link href="https://alxafrica.com" className="underline text-blue-500">
                ALX Software Engineering Program
              </Link>{" "}
              and a Computer Science major. I also build fullstack applications
              (Web Apps and Mobile apps). I build fast, accessible and seamless
              user interfaces along with scalable backend systems. I'm the
              dependency that any engineering team can count on to build
              production ready applications with Godspeed.
            </p>

            <Separator className="my-5" />

            <p>
              I mostly work with <span className="font-semibold">TypeScript,
              Python, Next.js, and Node.js</span>. A lot of what I do these days
              is building AI agents and making them behave, plus the usual product
              work: clean APIs, scalable backend APIs, seamless and accessible
              frontends, and shipping code that doesn't break.
            </p>

            <br />

            <p>
              I also judge and mentor at AI hackathons, and I build open source
              tools and libraries in my spare time. I share most of them because I
              like helping other devs ship faster.
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
    </GsapReveal>
  );
};

export default About;
