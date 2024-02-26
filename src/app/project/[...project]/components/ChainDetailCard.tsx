import { ChainDetail } from "@/types/type";

export function ChainDetailCard(props: ChainDetail) {
  const { name, type } = props;

  return (
    <div className=" flex items-center gap-2 rounded border  px-3 py-1 shadow-md">
      <h2 className=" font-semibold">{name} :</h2>
      <p className="text-gray-400">{type}</p>
    </div>
  );
}
