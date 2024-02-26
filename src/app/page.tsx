/** @format */
"use client";

import { fetchCoinData, fetchCoinsData } from "@/actions/fetch-projects";
import CryptoCard from "@/components/crypto-card";
import { CryptoDataType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomPagination from "@/components/custom-pagination";
import { Spinner } from "@/components/spinner";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Example function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can perform additional actions here, such as fetching data for the new page
  };

  // Example total number of pages
  const totalPages = 260;

  const { isLoading, data, refetch } = useQuery<CryptoDataType[]>({
    queryKey: ["coinsData", currentPage],
    queryFn: () => fetchCoinsData(currentPage),
  });

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <main className="flex h-full flex-col gap-4 overflow-auto  px-3 pb-10 sm:px-10">
      <h1 className="  border-b border-gray-700 py-5 text-3xl font-semibold text-white ">
        All Projects
      </h1>

      <section className=" grid h-full  grid-cols-1 gap-6    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data?.length > 0 &&
          data?.map((d, i) => <CryptoCard key={i} {...{ ...d }} />)}
      </section>

      {/* pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Add more CryptoCard components as needed */}
    </main>
  );
}
