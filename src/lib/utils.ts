/** @format */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToHyphenated(sentence: string): string {
  // Replace spaces with hyphens using regular expression
  return sentence.toLowerCase().replace(/\s+/g, "-");
}
