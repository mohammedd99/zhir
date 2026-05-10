export function HeroSection() {
  return (
    <section className="w-full">
      <div className="grid w-full">
        <img
          src="/img/hero.jpg"
          alt=""
          className="col-start-1 row-start-1 h-full w-full object-cover"
        />
        <div className="col-start-1 row-start-1 z-10 flex flex-col items-center justify-start px-6 pt-[15%] pb-16 text-center text-white sm:pt-[12%]">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Zhir Salam Raouf
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:text-lg">
            General Manager at Qyam Group • Former banking & corporate leader
          </p>
        </div>
      </div>
    </section>
  );
}
