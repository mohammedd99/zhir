function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block overflow-visible pb-[0.12em] font-semibold"
      style={{
        backgroundImage: "linear-gradient(90deg, #6366f1 0%, #ec4899 55%, #f97316 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-lg font-medium text-gray-900">
              <GradientWord>Zhir</GradientWord> Salam Raouf
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
              General Manager at Qyam Group. Executive leadership across banking, financial services, and corporate management.
            </p>
          </div>

          <div className="lg:justify-self-center">
            <div className="text-sm font-semibold text-gray-800">Navigation</div>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
              <li>
                <a className="transition-colors hover:text-gray-900" href="#features">
                  Leadership
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#pricing">
                  Experience
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#about">
                  Profile
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <div className="text-sm font-semibold text-gray-800">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <a className="block transition-colors hover:text-gray-900" href="mailto:hello@qyamgroup.com">
                hello@qyamgroup.com
              </a>
              <a className="block transition-colors hover:text-gray-900" href="#contact">
                Qyam Group
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-400">© {year} Qyam Group. All rights reserved.</div>
          <div className="text-sm text-gray-400">
            Built with <span className="text-gray-500">clarity</span>, <span className="text-gray-500">discipline</span>, and{" "}
            <span className="text-gray-500">care</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}

