import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ManufacturingExperience from "@/components/ManufacturingExperience";
import ManufacturingSystems from "@/components/ManufacturingSystems";
import ManufacturingMaterialFlow from "@/components/ManufacturingMaterialFlow";
import ManufacturingCTA from "@/components/ManufacturingCTA";

export default function ManufacturingPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Manufacturing Solutions
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Technology Built for
                <br />
                How Manufacturing Actually Works
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Improve visibility, reduce manual work, and connect inventory,
                purchasing, production, material planning, and operational data
                with practical technology designed around the shop floor.
              </p>
            </div>
          </div>
        </section>
        <ManufacturingCapabilities />
        <ManufacturingExperience />
        <ManufacturingSystems />
        <ManufacturingMaterialFlow />
        <ManufacturingCTA />
      </main>

      <Footer />
    </>
  );
}