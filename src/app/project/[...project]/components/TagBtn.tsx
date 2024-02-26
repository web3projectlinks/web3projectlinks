import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";

export function TagButton() {
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
