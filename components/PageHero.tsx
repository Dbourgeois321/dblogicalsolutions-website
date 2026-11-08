import type { ReactNode } from "react";

export default function PageHero({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-rule bg-slip">
      <div className="wrap py-14 md:py-20">
        <h1 className="display max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)]">
          {title}
        </h1>
        {children && (
          <div className="prose-block mt-6 text-lg leading-8 text-mute">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
