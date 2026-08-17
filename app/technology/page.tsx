import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologySystems from "@/components/TechnologySystems";
import TechnologyApproach from "@/components/TechnologyApproach";
import TechnologyDecision from "@/components/TechnologyDecision";
import TechnologyCTA from "@/components/TechnologyCTA";

export default function TechnologyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Technology Solutions
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hardware Selected Around
                <br />
                the Work It Needs to Do
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                From everyday business computers to engineering workstations,
                servers, storage, and custom-built systems, DB Logical
                Solutions selects and configures technology around the
                applications, workloads, and people who actually use it.
              </p>
            </div>
          </div>
        </section>

        <TechnologySystems />
        <TechnologyApproach />
        <TechnologyDecision />
        <TechnologyCTA />
      </main>

      <Footer />
    </>
  );
}