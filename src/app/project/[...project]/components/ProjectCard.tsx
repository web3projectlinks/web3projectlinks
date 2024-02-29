import { TagButton } from "./TagBtn";

export function ProjectCard() {
  return (
    <div className="flex  flex-col gap-4 rounded-lg border border-gray-300 p-2  shadow shadow-white transition-all ">
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
