"use client";

import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";
import { TfiWorld } from "react-icons/tfi";
import { useQuery } from "@tanstack/react-query";
import {
  ChainDetail,
  CryptoDataType,
  ProjectData,
  SocialPlatforms,
  UrlData,
} from "@/types/type";
import { fetchCoinData, fetchProject } from "@/actions/fetch-projects";
import { IconType } from "react-icons";

import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaReddit,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { convertToHyphenated } from "@/lib/utils";
import Image from "next/image";

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr
export default function ProjectDetails({
  params,
}: {
  params: { project: string };
}) {
  const { isLoading, data: project } = useQuery<ProjectData>({
    queryKey: ["projectData"],
    queryFn: () => fetchProject(params.project),
  });
  const { data: coinData } = useQuery<CryptoDataType[]>({
    queryKey: ["coinData"],
    queryFn: () => fetchCoinData(params.project),
  });
  const currentCoinData: CryptoDataType | null = coinData ? coinData[0] : null;
  console.log("project", project);
  console.log("coinData", coinData);

  return (
    <div className="flex flex-col gap-5 p-10 text-white">
      <section className="flex flex-col   gap-2">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl text-slate-300">
            #{currentCoinData?.market_cap_rank}{" "}
          </h2>
          <div className="h-16 w-16 rounded-full bg-gray-100 ">
            {project?.id && (
              <img
                width={100}
                height={100}
                // src={"https://cdn-icons-png.flaticon.com/512/6001/6001368.png"}
                // src={currentCoinData?.image}
                src={`/logos/${project.id}.ico`}
                className="card-img-top h-full w-full     object-cover "
                alt={"project-img"}
              />
            )}
          </div>
          <h5 className="card-title text-2xl font-bold capitalize">
            {project?.id}
          </h5>
        </div>
        {/* discription */}
        <Balancer>
          <p className=" text-gray-500 ">{project?.description}</p>
        </Balancer>
      </section>
      <hr
        className="border-gray-600
      "
      />
      {/* <h2>SocialPlatforms </h2> */}
      <section className="flex flex-col gap-3 border-b border-gray-500 pb-5">
        <h2 className=" text-xl font-semibold">Social Platforms</h2>
        <div className="flex flex-wrap gap-3">
          {project?.social_platforms ? (
            <SocialPlatformsCard {...project?.social_platforms} />
          ) : null}
        </div>
      </section>
      {/*  */}
      {/* <h2>Chain Detail </h2> */}
      <section className="flex flex-col gap-3 border-b border-gray-500 pb-5">
        <h2 className=" text-xl font-semibold">Chain Detail</h2>
        <div className="flex flex-wrap gap-3">
          {project?.chain_details?.map((d, i) => (
            <ChainDetailCard key={i} {...{ ...d }} />
          ))}
        </div>
      </section>
      {project?.meta_data.map((d, i) => (
        <section
          key={i}
          className="flex flex-col gap-3 border-b border-gray-500 pb-5"
        >
          <h2 className=" text-xl font-semibold">{d.name}</h2>
          <div className="flex flex-wrap gap-3">
            {d.data.map((innerData, i) => (
              <URLCard key={i} {...{ ...innerData }} />
            ))}
          </div>
        </section>
      ))}

      {/*  */}

      <section className=" grid  grid-cols-1 gap-6  pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  );
}

export interface MetaData {
  name: string;
  data: { name: string; url: string }[];
}
function URLCard(props: UrlData) {
  const { name, url } = props;
  const projectId = convertToHyphenated(name);
  convertToHyphenated;
  return (
    <div className=" flex items-center gap-2 rounded border  px-3 py-1 shadow-md">
      <Link href={`/project/${projectId}`} className=" font-semibold">
        {name}
      </Link>
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

function ChainDetailCard(props: ChainDetail) {
  const { name, type } = props;

  return (
    <div className=" flex items-center gap-2 rounded border  px-3 py-1 shadow-md">
      <h2 className=" font-semibold">{name} :</h2>
      <p className="text-gray-400">{type}</p>
    </div>
  );
}

function SocialPlatformsCard(props: SocialPlatforms) {
  return (
    <div className="rounded-lg   shadow-md">
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

function ProjectCard() {
  return (
    <div className="flex  flex-col gap-4 rounded-lg border border-gray-300 p-2 text-white shadow shadow-white transition-all ">
      <h3>Offical Links</h3>

      <div className="flex flex-wrap gap-1.5">
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
      </div>
    </div>
  );
}

function TagButton() {
  return (
    <Link
      href="#"
      className=" flex gap-1 rounded  bg-neutral-700  px-2 py-1 text-white shadow hover:opacity-60 "
    >
      {/* logo */}
      <TfiWorld size={20} className="" />
      <p>Website</p>

      {/* title */}
    </Link>
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
