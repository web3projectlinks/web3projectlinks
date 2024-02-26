import { useToast } from "@/components/ui/use-toast";
import { convertToHyphenated, copyText } from "@/lib/utils";
import { UrlData } from "@/types/type";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoCopy } from "react-icons/io5";

export function URLCard(props: UrlData) {
  const { toast } = useToast();
  const { name, url } = props;
  const projectId = convertToHyphenated(name);
  // convertToHyphenated;
  function handleCopy() {
    copyText(url);
    toast({
      description: `Copied : ${url}`,
    });
  }

  return (
    <div className=" flex items-center gap-2 rounded border  px-3 py-1 shadow-md">
      <Link
        href={url}
        target="_blank"
        className="flex min-h-6  min-w-6 items-center justify-center hover:opacity-70"
      >
        <HiOutlineExternalLink size={20} />
      </Link>
      <Link href={`/project/${projectId}`} className=" font-semibold">
        {name}
      </Link>
      {/* copy */}
      <IoCopy
        onClick={handleCopy}
        className="cursor-pointer hover:opacity-80"
      />
    </div>
  );
}
