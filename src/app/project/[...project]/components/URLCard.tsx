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
      {/*     src={`/logos/${project.id}.ico`} */}
      <div className="h-8 w-8 overflow-hidden rounded-full border bg-secondary ">
        <img
          width={20}
          height={20}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/assets/black.png";
          }}
          // src={"https://cdn-icons-png.flaticon.com/512/6001/6001368.png"}
          // src={currentCoinData?.image}
          src={`/logos/${projectId}.ico`}
          className="card-img-top h-full w-full      object-cover "
          alt={" "}
          // alt={"project-img"}
        />
      </div>

      <Link href={`/project/${projectId}`} className=" font-semibold">
        {name}
      </Link>
      {/* copy */}
      <IoCopy
        onClick={handleCopy}
        className="cursor-pointer hover:opacity-80"
      />
      <Link
        href={url}
        target="_blank"
        className="flex min-h-6  min-w-6 items-center justify-center hover:opacity-70"
      >
        <HiOutlineExternalLink size={20} />
      </Link>
    </div>
  );
}
