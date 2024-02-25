import Link from "next/link";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center gap-2 text-2xl font-semibold transition-all"
    >
      <img
        // height={47}
        // width={47}
        className=" h-10  w-auto rounded object-fill "
        src="/logo.png"
        alt=""
      />
      <p className="hidden md:flex">web3projectlinks</p>
    </Link>
  );
}
