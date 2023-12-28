import Link from "next/link";
import classNames from "classnames";

interface LogoProps {
  logoType: "header" | "footer";
}

export default function Logo({ logoType }: LogoProps) {
  const logoStyles = classNames({
    "text-32 leading-28 font-bold": true,
    "text-black_1": logoType === "header",
    "text-pr_purple": logoType === "footer",
  });
  return (
    <Link className={logoStyles} href="/">
      Ivan.dev
    </Link>
  );
}
