export function PeaceSection() {
  return (
    <section
      className="w-full px-6 py-16 sm:py-20 lg:py-28 lg:-mt-122"
      style={{ backgroundColor: "#FEFEFE" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            <svg className="h-4 w-4 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Background
          </span>
        </div>

        {/* heading */}
        <div className="mt-6 overflow-visible text-center">
          <h2 className="text-4xl font-medium leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            With a background in{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 35%, #a855f7 65%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              International Studies
            </span>{" "}
            and{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 35%, #a855f7 65%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Energy Engineering,
            </span>{" "}
            I combine geopolitical insight, technical knowledge, and business strategy to strengthen{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 35%, #a855f7 65%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              organizational performance
            </span>{" "}
            and position Qyam Group for long-term success.
          </h2>
        </div>

        {/* circle video */}
        <div className="mt-16 flex items-center justify-center">
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


      </div>
    </section>
  );
}
