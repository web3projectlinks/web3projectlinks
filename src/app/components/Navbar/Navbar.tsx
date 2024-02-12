/** @format */

import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex  w-full  items-center justify-between  border-b-[1px] border-slate-600  bg-[#323232] px-10 py-2 text-white backdrop-blur-sm">
      <Link href={"/"} className="text-2xl font-semibold">
        Logo
      </Link>
      <div className="  relative flex items-center ">
        <IoSearch className="absolute left-2" />
        <input
          type="text"
          placeholder="Search Projects..."
          className=" h-10 w-[320px] max-w-full rounded border-none bg-[#1a1a1b] p-2 pl-10  outline-white"
        />
      </div>
    </nav>
  );
}
