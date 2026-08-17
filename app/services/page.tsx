import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetails from "@/components/ServiceDetails";
import ServicePaths from "@/components/ServicePaths";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Our Services
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Technology Solutions Built
                <br />
                Around Your Business
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                From custom software and automation to manufacturing systems
                and technology infrastructure, DB Logical Solutions builds
                practical solutions around the way your business actually
                operates.
              </p>
            </div>
          </div>
        </section>
        <ServiceDetails />
        <ServicePaths />
        <CTA />
      </main>

      <Footer />
    </>
  );
}