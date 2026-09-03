import Image from "next/image";
import { testimonials } from "@/lib/testimonial-data";

const testimonial = testimonials[0];

export function TestimonialsSection() {
  return (
    <section className="section-space bg-[var(--color-page-bg)]">
      <div className="site-container">
        <div className="grid gap-10 border-t border-[var(--color-navbar-border)] pt-8 md:grid-cols-12 md:gap-8 md:pt-12">
          <div className="md:col-span-3">
            <p className="font-accent text-base text-accent">Kundenstimme</p>
          </div>

          <figure className="md:col-span-9">
            <blockquote className="max-w-[62ch] text-balance text-[clamp(1.45rem,2.4vw,2.5rem)] leading-[1.18] text-[var(--color-heading)]">
              „{testimonial.quote}“
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[var(--color-surface)]">
                <Image
                  src={testimonial.imageUrl}
                  alt={`Porträt von ${testimonial.name}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-lg text-[var(--color-heading)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{testimonial.company}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
