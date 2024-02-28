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
  FaWhatsappSquare,
} from "react-icons/fa";

interface SocialLinkType {
  href: string;
  title: string;
  className?: string;
  icon: IconType;
}
// Define data for each social media platform
const socialLinks: SocialLinkType[] = [
  { href: "https://discord.gg/ZnuJzgp94V", title: "Discord", icon: FaDiscord },
  {
    href: "https://github.com/web3projectlinks/web3projectlinks",
    title: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://twitter.com/web3projectlink",
    title: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://t.me/web3projectlinks",
    title: "Telegram",
    icon: FaTelegram,
  },
  {
    href: "https://www.linkedin.com/company/web3projectlinks/",
    title: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/web3projectlinks",
    title: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://www.reddit.com/r/web3projectlinks/",
    title: "Reddit",
    icon: FaReddit,
  },
  {
    href: "https://whatsapp.com/channel/0029VaOabViJ93wYMUu3I71X",
    title: "Whatsapp",
    icon: FaWhatsappSquare,
  },
];

export default function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      {...props}
      className={cn(
        "  flex flex-col   items-center  justify-between gap-3   border-b-[1px] border-t border-slate-600 bg-background px-10 py-3 text-foreground  transition-all sm:flex-row ",
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
            className="text-blue-500 hover:opacity-80"
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
