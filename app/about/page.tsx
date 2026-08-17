import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutExperience from "@/components/AboutExperience";
import AboutProcess from "@/components/AboutProcess";
import AboutWhy from "@/components/AboutWhy";
import AboutCTA from "@/components/AboutCTA";
export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                About DB Logical Solutions
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Technology From an
                <br />
                Operational Perspective
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                DB Logical Solutions brings software, manufacturing,
                operations, data, automation, and hardware together with one
                goal: solve the real problem in a way that makes sense for the
                business.
              </p>
            </div>
          </div>
        </section>
         <AboutExperience />
         <AboutProcess />
         <AboutWhy />
         <AboutCTA />
      </main>

      <Footer />
    </>
  );
}