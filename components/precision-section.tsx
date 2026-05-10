const columns = [
  {
    label: "Builds",
    color: "#6366f1",
    items: ["trust", "compliance", "clarity", "client relationships"],
    topOffset: "sm:pt-44",
  },
  {
    label: "Aligns",
    color: "#a855f7",
    items: ["stakeholders", "operations", "processes", "execution"],
    topOffset: "sm:pt-24",
  },
  {
    label: "Optimizes",
    color: "#fb923c",
    items: ["performance", "controls", "quality", "results"],
    topOffset: "sm:pt-10",
  },
  {
    label: "Leads",
    color: "#f59e0b",
    items: ["teams", "strategy", "growth", "delivery"],
    topOffset: "sm:pt-0",
  },
];

export function PrecisionSection() {
  return (
    <section
      className="w-full px-6 py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#FEFEFE" }}
    >
      <div>
        <div className="mx-auto w-full max-w-7xl px-0 sm:px-2">

        {/* badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm">
            <svg className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Executive Leadership
          </span>
        </div>

        {/* heading */}
        <div className="mt-6 overflow-visible text-center">
          <h2 className="text-4xl font-medium leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            One practical, holistic approach.
          </h2>
          <p
            className="-mt-1 inline-block overflow-visible pb-[0.18em] text-4xl font-medium leading-snug sm:text-5xl lg:text-6xl sm:-mt-1.5"
            style={{
              backgroundImage: "linear-gradient(90deg, #6366f1 0%, #ec4899 50%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sustainable, measurable impact.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm text-gray-400 sm:text-base">
            From banking operations and compliance to leading Qyam Group—focused on strategy, performance optimization, and high-performing teams.
          </p>
        </div>

        {/* staggered 4 columns — centered as a group under headings; icon column matches line */}
        <div className="mt-16 grid grid-cols-2 items-start justify-items-center gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-6 lg:gap-10">
          {columns.map(({ label, color, items, topOffset }) => (
            <div key={label} className={`flex w-max max-w-full flex-col ${topOffset}`}>
              {/* heading row */}
              <div className="flex items-center gap-3">
                <img src="/img/smallcircle.png" alt="" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
                <span className="text-base font-semibold text-gray-800 sm:text-lg">{label}</span>
              </div>

              {/* vertical line + items — line centered under small circle (same width as icon) */}
              <div className="mt-4 flex gap-5">
                <div className="flex w-6 shrink-0 justify-center sm:w-7">
                  <div
                    className="h-[260px] w-px shrink-0 sm:h-[280px]"
                    style={{
                      backgroundImage: "linear-gradient(to bottom, #f97316, #ec4899, #a855f7, transparent)",
                    }}
                  />
                </div>
                <ul className="flex flex-col gap-6 pt-0.5">
                  {items.map((item) => (
                    <li key={item} className="text-base leading-snug text-gray-400 sm:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* wave shape — centered with main content (max-w-7xl), pulled up toward columns */}
        <div className="-mt-14 mx-auto w-full max-w-7xl px-0 sm:px-2 sm:-mt-16 lg:-mt-20">
          <img
            src="/img/shape.png"
            alt=""
            className="mx-auto block h-auto w-full object-center"
          />
        </div>
      </div>
    </section>
  );
}
