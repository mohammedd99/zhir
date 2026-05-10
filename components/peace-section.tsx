const problems = [
  "Operational ambiguity that slows decisions and execution",
  "Unclear ownership across teams, processes, and stakeholders",
  "Compliance and risk concerns surfacing late in the workflow",
  "Inconsistent client and service experiences across touchpoints",
  "Fragmented information that makes planning and reporting harder",
];

const solutions = [
  "Clear operating rhythms that reduce risk and prevent surprises",
  "Streamlined coordination that turns plans into deliverables faster",
  "Ongoing validation of requirements, controls, and performance",
  "Consistent service standards through accountable leadership",
  "Reliable context and reporting that accelerate decision-making",
];

export function PeaceSection() {
  return (
    <section
      className="w-full px-6 py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#FEFEFE" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            <svg className="h-4 w-4 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Clarity
          </span>
        </div>

        {/* heading */}
        <div className="mt-6 overflow-visible text-center">
          <h2 className="text-4xl font-medium leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Lead with confidence.
          </h2>
          <p
            className="-mt-1 inline-block overflow-visible pb-[0.18em] text-4xl font-medium leading-snug sm:text-5xl lg:text-6xl sm:-mt-1.5"
            style={{
              backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 35%, #a855f7 65%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Build sustainable growth.
          </p>
        </div>

        {/* 3-column layout */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_760px_1fr]">

          {/* left — problems */}
          <ul className="flex flex-col gap-3">
            {problems.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-5 text-sm leading-snug text-gray-500 shadow-sm"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {text}
              </li>
            ))}
          </ul>

          {/* center — circle video */}
          <div className="flex items-center justify-center">
            <div className="h-[720px] w-[720px] overflow-hidden rounded-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/img/circle.webm" type="video/webm" />
              </video>
            </div>
          </div>

          {/* right — solutions */}
          <ul className="flex flex-col gap-3">
            {solutions.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-5 text-sm leading-snug text-gray-500 shadow-sm"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {text}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
