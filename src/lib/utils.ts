import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToHyphenated(input: string): string {
  // Convert input string to lowercase and replace spaces with hyphens
  return input.toLowerCase().replace(/\s+/g, "-");
}
