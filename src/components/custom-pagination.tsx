import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      // Show first, last, current page, and 2 adjacent pages
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="  w-full overflow-x-auto px-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <button
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="flex gap-2"
            >
              <Link
                href={`/?page=${currentPage - 1}`}
                className={cn(
                  "flex items-center gap-2",
                  buttonVariants({ variant: "ghost" }),
                )}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Link>
            </button>
          </PaginationItem>

          {getPageNumbers().map((page, index, array) => (
            <React.Fragment key={index}>
              {index > 0 && page - array[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <button
                  disabled={currentPage === page}
                  onClick={() => onPageChange(page)}
                >
                  <Link
                    href={`/?page=${page}`}
                    className={cn(buttonVariants({ variant: "ghost" }), {
                      "bg-secondary text-foreground": currentPage === page,
                    })}
                  >
                    {page}
                  </Link>
                </button>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              <Link
                href={`/?page=${currentPage + 1}`}
                className={cn(
                  "flex items-center gap-2",
                  buttonVariants({ variant: "ghost" }),
                )}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
