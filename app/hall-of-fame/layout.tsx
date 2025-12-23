import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall Of Fame",
  description:
    "Celebrating professional achievements, hackathon wins, and key milestones in my software engineering career.",
  openGraph: {
    title: "Hall Of Fame | Adedoyin Emmanuel",
    description:
      "Celebrating professional achievements, hackathon wins, and key milestones in my software engineering career.",
    images: ["/emma-3.jpg"],
  },
};

export default function HallOfFameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
