import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <h1 className="text-2xl font-bold">Contact Me.</h1>
      <p className="flex gap-1 my-4 flex-wrap">
        <span className="text-gray-500">Reach out to me</span>{" "}
        <span className="flex flex-wrap">
          <Link
            href={"mailto:hi@adedoyinemmanuel.dev"}
            className="underline flex items-end"
          >
            adedoyine535@gmail.com
            <ArrowUpRight className="h-5 w-5" />
          </Link>{" "}
        </span>
      </p>

      <div className="flex items-center gap-4 my-5">
        <Link
          href={"https://github.com/adedoyin-emmanuel"}
          className="underline flex items-end"
        >
          Github <ArrowUpRight className="h-5 w-5" />
        </Link>

        <Link
          href={"https://linkedin.com/in/adedoyin-emmanuel"}
          className="underline flex items-end"
        >
          Linkedin <ArrowUpRight className="h-5 w-5" />
        </Link>

        <Link
          href={"https://twitter.com/Emmysoft_Tm"}
          className="underline flex items-end"
        >
          Twitter <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
