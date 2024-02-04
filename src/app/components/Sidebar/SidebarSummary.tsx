const SidebarSummary = ({ data }) => {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex items-center gap-1 font-medium cursor-pointer list-none ml-2">
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="15"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
          <span className="text-[12px] font-semibold">{data.title}</span>
        </summary>
        <div className="text-gray-100 mt-3 mx-3 group-open:animate-fadeIn flex items-center gap-1 flex-wrap">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-[3px] bg-gray-700 px-2 py-1 text-xs font-medium text-gray-100 ring-1 ring-inset ring-gray-500/10"
            >
              {tag[0].toUpperCase() + tag.slice(1)}
            </span>
          ))}
        </div>
      </details>
    </div>
  );
};

export default SidebarSummary;
