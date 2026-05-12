const stages = [
  {
    tag: "Banking Foundations",
    body: "Build strong expertise in modern banking systems and compliance.",
    bullets: [" Financial operations & compliance", "Customer relationship management"],
  },

  

  {
    tag: "Executive Leadership",
    body: "Transitioned in 2024 to guide group-wide strategies and operations.",
    bullets: ["General Management at Qyam Group", "Strategic planning & direction"],
  },
  {
    tag: "Operational Excellence",
    body: "Oversee business development to optimize overall company performance.",
    bullets: ["Optimizing performance", "Business development"],
  },
  {
    tag: "Measurable Results",
    body: "Focus on driving sustainable growth through dedicated teamwork.",
    bullets: ["High-performing teams", "Sustainable growth & results"],
  },
] as const;

export function TrustedProcessSection() {
  return (
    <section className="w-full">
      {/* Grid stacking: image and content share the same cell.
          Cell height = max(image natural height, content height).
          On desktop the image is taller → full image shown, designed fade visible.
          On mobile content stacks taller → image scales up to cover. */}
      <div className="grid w-full">
        <img
          src="/img/bg.jpg"
          alt=""
          className="col-start-1 row-start-1 h-full w-full object-cover"
        />
        <div className="col-start-1 row-start-1 z-10 flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:justify-start lg:pt-72 lg:pb-28">
      <div className="mx-auto flex w-full max-w-[min(104rem,calc(100vw-2rem))] flex-col items-center text-center">
        <h2 className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
        Dynamic executive leadership:
        </h2>
        <p
          className="-mt-1 inline-block overflow-visible pb-[0.18em] text-4xl font-medium leading-snug sm:text-5xl lg:text-6xl sm:-mt-1.5"
          style={{
            backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #a855f7 40%, #ec4899 70%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
From banking discipline to sustainable business growth.        </p>
        <p className="mx-auto mt-5 w-full max-w-none text-base leading-relaxed text-white/60 sm:text-lg">
        Over eight years of experience across banking and corporate management—starting at NBI and FIB, to currently serving as General Manager at Qyam Group overseeing operations, strategy, and business development.        </p>

        <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {stages.map(({ tag, body, bullets }) => (
            <div
              key={tag}
              className="flex min-h-72 flex-col justify-between rounded-3xl p-7 text-left sm:min-h-96 sm:p-8 lg:min-h-104 lg:p-10"
              style={{
                background: "rgba(15,12,30,0.75)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{
                  background: "rgba(30,25,60,0.9)",
                  border: "1px solid rgba(139,92,246,0.5)",
                }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-violet-500">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                </span>
                {tag}
              </span>

              <div className="mt-auto">
                <p className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">{body}</p>

                <ul className="mt-4 flex flex-col gap-3 sm:mt-5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-white/70 sm:text-base">
                      <svg className="h-5 w-5 shrink-0 text-violet-500 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
