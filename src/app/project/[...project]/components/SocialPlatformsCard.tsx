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
import { copyText } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { IoCopy } from "react-icons/io5";

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
  function handleCopy() {
    copyText(props.href);
    toast({
      description: `Copied : ${props.href}`,
    });
  }
  const { icon: Icon } = props;
  return (
    <p className="flex items-center gap-2 rounded border-2 p-1 opacity-80 ">
      {Icon && <Icon size={20} />}
      <p className="text-sm">{props.name}</p>
      <IoCopy
        onClick={handleCopy}
        className="cursor-pointer hover:opacity-80 "
      />
      <Link
        href={props.href}
        target="_blank"
        className="flex min-h-6  min-w-6 items-center justify-center gap-2"
      >
        <HiOutlineExternalLink size={20} />
      </Link>
    </p>
  );
}
