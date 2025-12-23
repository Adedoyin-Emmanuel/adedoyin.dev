import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

const gtAmericaRegular = localFont({
  src: "./fonts/GT-America-Regular.otf",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adedoyin.dev"),
  title: {
    default: "Adedoyin Emmanuel Adeniyi - Software Engineer",
    template: "%s | Adedoyin Emmanuel Adeniyi",
  },
  description:
    "Software Engineer specialized in Backend Systems, Cloud Infrastructure, and Full-Stack Development. Creating scalable solutions with modern technologies.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Adedoyin Emmanuel",
    "Adedoyin Emmanuel Adeniyi",
    "Next.js",
    "React",
    "TypeScript",
    "Cloudflare",
    "System Design",
    "Web Development",
  ],
  authors: [{ name: "Adedoyin Emmanuel Adeniyi", url: "https://adedoyin.dev" }],
  creator: "Adedoyin Emmanuel Adeniyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adedoyin.dev",
    title: "Adedoyin Emmanuel Adeniyi - Software Engineer",
    description:
      "Software Engineer specialized in Backend Systems, Cloud Infrastructure, and Full-Stack Development.",
    siteName: "Adedoyin Emmanuel Adeniyi",
    images: [
      {
        url: "/emma-3.jpg",
        width: 1200,
        height: 630,
        alt: "Adedoyin Emmanuel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adedoyin Emmanuel Adeniyi - Software Engineer",
    description:
      "Software Engineer specialized in Backend Systems, Cloud Infrastructure, and Full-Stack Development.",
    images: ["/emma-3.jpg"],
    creator: "@Emmysoft_TM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          gtAmericaRegular.className,
          "md:container md:mx-auto overflow-x-hidden"
        )}
      >
        <GoogleAnalytics gaId="G-WTPMMSFEEP" />
        <Navbar />
        <div className="w-full p-3">
          {children}

          <br />
          <br />
          <br />
          <Footer />
        </div>
      </body>
    </html>
  );
}
