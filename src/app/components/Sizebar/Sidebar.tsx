import SidebarSummary from "./SidebarSummary";
import { sideBarData } from "@/app/database/data";

const Sidebar = () => {
  return (
    <div className="h-full w-[300px] bg-[#1a1a1b] text-gray-300 border-[1px] border-[rgba(255,255,255,0.2)]">
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto">
        {sideBarData.map((data, index) => (
          <SidebarSummary key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
