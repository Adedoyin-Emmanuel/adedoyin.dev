import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ColoredLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const ColoredLink = ({
  className,
  href,
  children,
  ...others
}: ColoredLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("text-blue-500 underline items-end inline-flex", className)}
      {...others}
    >
      {children}
    </Link>
  );
};

export default ColoredLink;
