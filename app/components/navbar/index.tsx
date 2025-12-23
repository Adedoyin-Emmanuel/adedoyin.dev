"use client";
import Link from "next/link";
import { Drawer } from "vaul";
import { usePathname } from "next/navigation";
import { Twitter, Linkedin, Github, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={cn("w-full flex items-center justify-evenly p-2 my-6")}>
      <Link href={"/"} className="w-full">
        <div className="flex items-center w-full">
          <div className="">
            <img
              src="/emmysoft.png"
              alt="@Adedoyin-Emmanuel"
              className="rounded-full"
              width={40}
              height={40}
            />
          </div>
          <div className="mx-2">
            <h3 className="font-bold text-[0.89rem]">Adedoyin Emmanuel</h3>
            <p className="text-[0.74rem] text-[#8e8e8e] py-0 md-1">
              Software Engineer
            </p>
          </div>
        </div>
      </Link>

      <section className="w-full hidden lg:flex items-center justify-center gap-6 ">
        <Link
          href="/"
          className={`${
            isActive("/") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            isActive("/about") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            isActive("/projects") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/hall-of-fame"
          className={`${
            isActive("/hall-of-fame") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Hall Of Fame
        </Link>
      </section>

      <section className="w-full hidden lg:flex items-center justify-end gap-4">
        <Link href="https://twitter.com">
          <Twitter
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
        <Link href="https://github.com">
          <Github
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
        <Link href="https://linkedin.com">
          <Linkedin
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
      </section>

      <section className="lg:hidden">
        <Drawer.Root direction="left">
          <section className="w-full flex items-center justify-between p-1 ">
            <Drawer.Trigger asChild>
              <div aria-expanded="false" role="button">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </Drawer.Trigger>
          </section>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-[100] bg-black/80" />
            <Drawer.Content className="bg-white h-full w-3/4 fixed bottom-0 z-[1000] outline-none p-2 overflow-scroll">
              <Drawer.Close className="w-full flex items-end justify-end p-2">
                <X
                  className="text-red-500 m-0 p-0"
                  size={30}
                  strokeWidth={1.2}
                />
              </Drawer.Close>
              <ul className="flex flex-col gap-5 mx-4 mt-5 overflow-y-scroll">
                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"/"}>Home </Link>
                </li>
                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"/about"}>About </Link>
                </li>
                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"/projects"}>Projects </Link>
                </li>
                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"/hall-of-fame"}>Hall Of Fame </Link>
                </li>

                <Separator className="mt-3" />

                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"https://x.com/Emmysoft_Tm"}>Twitter </Link>
                </li>

                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"https://github.com/Adedoyin-Emmanuel"}>
                    Github{" "}
                  </Link>
                </li>

                <li className="hover:text-[#5A83ED] transition-colors ease-in-out underline block">
                  <Link href={"https://linkedin.com/in/Adedoyin-Emmanuel"}>
                    Linkedin{" "}
                  </Link>
                </li>
              </ul>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </section>
    </div>
  );
};

export default Navbar;
