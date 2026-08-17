import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Let's Talk
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Tell Us What You're
                <br />
                Trying to Improve
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                You don't need to know what technology you need. Tell us about
                the problem, process, system, or project you're trying to
                improve and we'll start there.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
