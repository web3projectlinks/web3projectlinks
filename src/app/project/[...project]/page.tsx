"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { useQuery } from "@tanstack/react-query";
import { CryptoDataType, ProjectData } from "@/types/type";
import { fetchCoinData } from "@/actions/fetch-projects";

import { Spinner } from "@/components/spinner";
import { ChainDetailCard } from "./components/ChainDetailCard";
import { URLCard } from "./components/URLCard";
import { SocialPlatformsCard } from "./components/SocialPlatformsCard";
import { ProjectCard } from "./components/ProjectCard";
import { scientificToDecimal } from "@/lib/utils";

export default function ProjectDetails({
  params,
}: {
  params: { project: string };
}) {
  const { isLoading: isProjectLoading, data: project } = useQuery<ProjectData>({
    queryKey: ["singleProject", params.project],
    queryFn: () =>
      fetch(`/database/${params.project}.json`).then((res) => res.json()),
  });
  const { data: coinData, isLoading: isCoinLoading } = useQuery<
    CryptoDataType[]
  >({
    queryKey: ["coinData", params.project],
    queryFn: () => fetchCoinData(params.project),
  });

  const currentCoinData: CryptoDataType | null = coinData ? coinData[0] : null;
  console.log("project", project);
  console.log("coinData", coinData);
  console.log("currentCoinData?.current_price", currentCoinData?.current_price);

  // if (isProjectLoading || isCoinLoading)
  //   return (
  //     <div className="flex h-full w-full items-center justify-center">
  //       <Spinner />
  //     </div>
  //   );

  // const decimalNotation: string = currentCoinData
  //   ? scientificToDecimal(currentCoinData?.current_price)
  //   : "";
  return (
    <div className="flex flex-col gap-5 bg-background p-10 text-foreground">
      <section className="flex flex-col   gap-2">
        <div className="flex items-center gap-3">
          {isCoinLoading ? (
            <h2 className="h-6 w-8 animate-pulse rounded bg-secondary" />
          ) : (
            <h2 className="text-2xl text-slate-300">
              #{currentCoinData?.market_cap_rank}{" "}
            </h2>
          )}
          <div className="h-16 w-16 overflow-hidden rounded-full bg-secondary ">
            {project?.id && (
              <img
                width={100}
                height={100}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/assets/black.png";
                }}
                // src={"https://cdn-icons-png.flaticon.com/512/6001/6001368.png"}
                // src={currentCoinData?.image}
                src={`/logos/${project.id}.ico`}
                className="card-img-top h-full w-full      object-cover "
                alt={"project-img"}
              />
            )}
          </div>
          <h5 className="card-title text-2xl font-bold capitalize">
            {project?.coin_details.name}
          </h5>

          {isCoinLoading ? (
            <h2 className="h-4 w-16 animate-pulse rounded bg-secondary" />
          ) : (
            <h5 className="card-title text-lg font-medium capitalize">
              : ${currentCoinData?.current_price}
            </h5>
          )}
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
      {project?.meta_data?.map((d, i) => (
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
