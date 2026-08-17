import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mt-5 text-sm font-semibold text-slate-200">
  Software
  <span className="mx-2 text-blue-500">•</span>
  Automation
  <span className="mx-2 text-blue-500">•</span>
  Data
  <span className="mx-2 text-blue-500">•</span>
  Manufacturing Technology
</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Practical Technology
          <br />
           Solutions for Real
           <br />
              <span className="text-blue-500">Business Problems</span>
        </h1>
            
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            DB Logical Solutions helps businesses improve operations through
            custom software, automation, database solutions, manufacturing
            expertise, and purpose-built technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
            >
              Discuss Your Project
            </a>

            <a
              href="/services"
              className="rounded-md border border-slate-700 px-5 py-3 font-semibold text-white hover:border-slate-500"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
  <Image
    src="/images/hero-technology.png"
    alt="Connected software, database, manufacturing, analytics, and automation systems"
    width={1600}
    height={1000}
    className="h-full w-full object-cover"
    priority
  />
</div>
      </div>
    </section>
  );
}