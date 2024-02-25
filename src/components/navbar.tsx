/** @format */

import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Logo from "./logo";

export default function Navbar(props: React.HTMLProps<HTMLDivElement>) {
  // bg-zinc-800
  return (
    <nav
      className={cn(
        "sticky top-0 flex  w-full  items-center justify-between  border-b-[1px] border-slate-600   bg-black px-10 py-2 text-white backdrop-blur-sm ",
        props.className,
      )}
    >
      <Logo />

      <div className="  relative flex items-center ">
        <IoSearch className="absolute left-2" />
        <input
          type="text"
          placeholder="Search Projects..."
          className=" h-10 w-[320px] max-w-full rounded border  border-gray-400 bg-[#1a1a1b] p-2 pl-10  outline-white"
        />
      </div>
    </nav>
  );
}
