import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import ColoredLink from "@/app/components/link";
import GsapReveal from "@/app/components/gsap-reveal";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className="my-4">
      <br />

      <GsapReveal className="content-section">
        <h1
          className={cn(playFairDisplay.className, "lg:text-[50px] text-3xl")}
        >
          Engineering Production-Ready Applications.
        </h1>
        <br />
        <br />

        <div className="lg:text-[20px] text-[15px]">
          <p>
            Hi, I'm Adedoyin Emmanuel Adeniyi. I currently work at ({" "}
            <ColoredLink href="https://nativelyai.com">Natively AI</ColoredLink>{" "}
            , <ColoredLink href="https://lablab.ai">Lablab.ai</ColoredLink> ) as
            a Product Engineer & Technical Judge. Ex{" "}
            <ColoredLink href="https://punch.cool">Punch Agency</ColoredLink>
          </p>

          <br />
          <p>
            I'm currently building{" "}
            <ColoredLink href="https://holycreed.app">Holy Creed</ColoredLink>{" "}
            and maintaining my open source projects such as{" "}
            <ColoredLink href="https://github.com/adedoyin-emmanuel/telebot">
              Telebot
            </ColoredLink>
            ,{" "}
            <ColoredLink href="https://leetbase.adedoyin.dev">
              Leetbase
            </ColoredLink>{" "}
            and{" "}
            <ColoredLink href="https://github.com/adedoyin-emmanuel/tsfluent">
              Tsfluent
            </ColoredLink>
            .
          </p>

          <br />
          <p>
            I strongly believe that you can do great things from a small place.
          </p>

          <br />

          <Link href={"/Adedoyin-Emmanuel-Resume.pdf"} target="_blank">
            <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-40 flex items-center justify-center">
              Resume <ArrowUpRight strokeWidth={1.5} />
            </button>
          </Link>
        </div>
      </GsapReveal>
    </div>
  );
};

export default Home;
