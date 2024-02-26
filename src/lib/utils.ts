import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToHyphenated(input: string): string {
  // Convert input string to lowercase and replace spaces with hyphens
  return input.toLowerCase().replace(/\s+/g, "-");
}

export function copyText(text: string) {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // Make the textarea invisible
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); /*For mobile devices*/

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea from the document
  document.body.removeChild(textarea);

  // Alert the copied text
  // alert("Copied the text: " + text);
}

export function scientificToDecimal(number: number): string {
  return number.toFixed(15).replace(/\.?0+$/, "");
}
