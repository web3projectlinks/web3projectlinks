import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { IconType } from "react-icons";

import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaReddit,
} from "react-icons/fa";

interface SocialLinkType {
  href: string;
  title: string;
  className?: string;
  icon: IconType;
}
// Define data for each social media platform
const socialLinks: SocialLinkType[] = [
  { href: "#", title: "Discord", icon: FaDiscord },
  { href: "#", title: "GitHub", icon: FaGithub },
  { href: "#", title: "Twitter", icon: FaTwitter },
  { href: "#", title: "Telegram", icon: FaTelegram },
  { href: "#", title: "LinkedIn", icon: FaLinkedin },
  { href: "#", title: "Facebook", icon: FaFacebook },
  { href: "#", title: "Reddit", icon: FaReddit },
];

export default function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      {...props}
      className={cn(
        "  flex flex-col   items-center  justify-between gap-3   border-b-[1px] border-t border-slate-600 bg-black px-10 py-3 text-white  transition-all sm:flex-row ",
        props.className,
      )}
    >
      <Logo />
      <div>
        <p className="text-sm text-gray-300">
          Copyright 2024. All rights reserved.
        </p>
        <p className="flex items-center gap-1  text-xs text-gray-300">
          <span> Data Powered by</span>

          <Link
            target="_blank"
            href={"https://www.coingecko.com/en/api "}
            className="text-blue-500"
          >
            CoinGecko API
          </Link>
        </p>
      </div>

      <section className="flex gap-4">
        {socialLinks.map((d, i) => (
          <SocialLink key={i} {...{ ...d }} />
        ))}
      </section>
    </footer>
  );
}

function SocialLink({ href, className, title, icon: Icon }: SocialLinkType) {
  return (
    <Link
      href={href}
      className={className + " flex items-center gap-1 hover:opacity-80"}
    >
      <Icon size={20} />
      {/* <p className="text-sm">{title}</p> */}
    </Link>
  );
}
