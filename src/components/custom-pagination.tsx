import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              variant={"ghost"}
              className="flex gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
          </PaginationItem>

          {getPageNumbers().map((page, index, array) => (
            <React.Fragment key={index}>
              {index > 0 && page - array[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <Button
                  disabled={currentPage === page}
                  onClick={() => onPageChange(page)}
                  variant={"ghost"}
                >
                  {page}
                </Button>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <Button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              variant={"ghost"}
              className="flex gap-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default CustomPagination;
