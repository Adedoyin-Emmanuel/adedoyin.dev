import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover my portfolio of projects, from full-stack web applications to open-source tools and libraries.",
  openGraph: {
    title: "Projects | Adedoyin Emmanuel",
    description:
      "Discover my portfolio of projects, from full-stack web applications to open-source tools and libraries.",
    images: ["/emma-3.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
