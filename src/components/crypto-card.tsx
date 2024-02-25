import React from "react";
import { ProjectType } from "../types/project-type";
import Link from "next/link";
import { CryptoDataType } from "@/types/type";

// interface CryptoCardProps {
//   imageSrc: string;
//   name: string;
//   detail: string;
// }

export default function CryptoCard(props: CryptoDataType) {
  return (
    <Link
      href={`project/${props.id}`}
      className="    flex cursor-pointer flex-col gap-4 rounded-lg border border-gray-300 p-2 text-white shadow shadow-white transition-all hover:opacity-60"
    >
      <section className="flex items-center gap-3">
        <h2 className="text-2xl"> #{props.market_cap_rank} </h2>
        <img
          // src={props.projectImg}
          // src={"https://cdn-icons-png.flaticon.com/512/6001/6001368.png"}
          src={props.image}
          className="card-img-top h-10 w-10 rounded-full border  object-cover p-1"
          alt={"project-img"}
        />
        <h5 className=" text-sm font-semibold capitalize">{props.id}</h5>
      </section>
      <div className="whitespace-nowrap  font-thin">
        {" "}
        $ {props.current_price}{" "}
      </div>
    </Link>
  );
}
