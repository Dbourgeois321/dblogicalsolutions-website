import Link from "next/link";

export default function CallToAction({
  title = "Tell me what is slowing your shop down",
  text = "Describe the problem the way you would to a coworker. You will get a real reply and a practical next step. No obligation.",
  button = "Start a conversation",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="border-t border-rule bg-sheet">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-mute">{text}</p>
        </div>

        <div className="shrink-0">
          <Link href="/contact" className="btn btn-primary">
            {button}
          </Link>
          <p className="mt-3 text-sm text-mute">
            Or email{" "}
            <a
              href="mailto:info@dblogicalsolutions.com"
              className="font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
            >
              info@dblogicalsolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
