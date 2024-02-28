import { SocialPlatforms } from "@/types/type";
import { IconType } from "react-icons";
import { HiOutlineExternalLink } from "react-icons/hi";

import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaReddit,
} from "react-icons/fa";
import Link from "next/link";

export function SocialPlatformsCard(props: SocialPlatforms) {
  return (
    <div className="rounded-lg   ">
      <section className="flex flex-wrap gap-4 text-sm">
        <SocialLinkBtn href={props.discord} icon={FaDiscord} name="Discord" />
        <SocialLinkBtn href={props.twitter} icon={FaTwitter} name="Twitter" />
        <SocialLinkBtn href={props.reddit} icon={FaReddit} name="Reddit" />
        <SocialLinkBtn href={props.community} name="Community" />
        <SocialLinkBtn
          href={props.coinmarketcap_community}
          name="Coinmarketcap Community"
        />
        <SocialLinkBtn href={props.twitter_hashtag} name="Twitter Hashtag" />
      </section>
    </div>
  );
}

function SocialLinkBtn(props: { href: string; icon?: IconType; name: string }) {
  const { icon: Icon } = props;
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex items-center gap-2 rounded border-2 p-1 opacity-80 hover:opacity-50"
    >
      {Icon && <Icon size={20} />}
      <p className="text-sm">{props.name}</p>
      <div className="flex min-h-6  min-w-6 items-center justify-center">
        <HiOutlineExternalLink size={20} />
      </div>
    </Link>
  );
}
