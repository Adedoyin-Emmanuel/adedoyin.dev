import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about my journey as a Software Engineer, my academic background in Computer Science, and my passion for open source.",
  openGraph: {
    title: "About Me | Adedoyin Emmanuel",
    description:
      "Learn about my journey as a Software Engineer, my academic background in Computer Science, and my passion for open source.",
    images: ["/emma-3.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
