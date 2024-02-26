"use client";
import { useState } from "react";
import * as React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "./spinner";
import { Input } from "./ui/input";
import axios from "axios";
import { useDebounce } from "use-debounce";

interface Suggestions {
  id: string;
  image: string;
  market_cap_rank: number;
}

export function SearchBar() {
  // http://localhost:3000/api/suggestions?query=eth

  const [query, setQuery] = useState("");
  const [value] = useDebounce(query, 300);

  const { isLoading, error, data, refetch } = useQuery<Suggestions[]>({
    queryKey: ["suggestions", value],
    queryFn: () =>
      fetch(`/api/suggestions?query=${value}`).then((res) => res.json()),
  });

  // React.useEffect(() => {
  //   refetch;
  // }, [value]);

  console.log("searchData", data);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="  relative flex items-center "
      >
        <IoSearch className="absolute left-2" />
        <input
          type="text"
          placeholder="Search Projects..."
          className=" h-9 w-full max-w-[320px] rounded-md border  border-gray-400 bg-background/70 p-2 pl-10  outline-white"
        />
        <p className="absolute right-2 text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={(e) => setQuery(e)}
          autoFocus
          placeholder="Type a command or search..."
        />
        <div className="max-h-[400px] overflow-y-auto p-4">
          {data?.length === 0 && !isLoading && query.length > 0 && (
            <div className="w-full text-center">No results found.</div>
          )}
          {isLoading && (
            <div className="flex h-full w-full items-center justify-center py-4">
              <Spinner />
            </div>
          )}
          <section className="flex flex-col gap-2">
            {data &&
              data.map((item: Suggestions, i) => (
                <div key={i}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={`/project/${item.id}`}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-secondary "
                  >
                    <img
                      className=" h-6 w-6 rounded-full bg-primary object-contain  "
                      src={item.image}
                      alt=""
                    />

                    <p className="capitalize">{item.id}</p>
                  </Link>
                </div>
              ))}
          </section>
        </div>
      </CommandDialog>
    </>
  );
}
