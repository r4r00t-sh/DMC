import { continentsWeOperate } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export function Partners() {
  const loop = [...continentsWeOperate, ...continentsWeOperate];

  return (
    <Section density="tight" className="overflow-hidden bg-mist">
      <Container>
        <p className="mb-6 text-center text-sm font-medium text-purple md:mb-8">
          Continents we operate
        </p>
      </Container>
      <div className="continent-marquee">
        <div className="continent-track flex w-max items-stretch gap-4 px-4">
          {loop.map((continent, i) => (
            <article
              key={`${continent.name}-${i}`}
              className="flex w-56 shrink-0 flex-col justify-center rounded-2xl border border-ink/[0.08] bg-white px-5 py-4 sm:w-64"
            >
              <p className="font-display text-lg font-semibold text-purple">
                {continent.name}
              </p>
              <p className="mt-1 text-sm text-muted">{continent.note}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
