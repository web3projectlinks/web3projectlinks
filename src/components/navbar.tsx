"use client";

import { cn } from "@/lib/utils";

import Logo from "./logo";
import { SearchBar } from "./searchbar";

export default function Navbar(props: React.HTMLProps<HTMLDivElement>) {
  // bg-zinc-800
  return (
    <nav
      className={cn(
        "sticky top-0 flex  w-full  items-center justify-between  border-b-[1px] border-slate-600   bg-background px-10 py-2 text-foreground backdrop-blur-sm ",
        props.className,
      )}
    >
      <Logo />

      <SearchBar />
    </nav>
  );
}
