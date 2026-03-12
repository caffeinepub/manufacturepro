import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "ManufacturePro consistently delivers precision-machined components within tolerance and ahead of schedule. Their quality management system is exceptional — we've reduced our incoming inspection time by 70%.",
    name: "Dr. Marcus Heller",
    company: "Heller Aerospace Systems",
    role: "VP of Supply Chain",
  },
  {
    quote:
      "We've partnered with ManufacturePro for over 12 years. Their engineering team's ability to solve complex DFM challenges and their commitment to continuous improvement sets them apart from every other supplier we work with.",
    name: "Priya Nataraj",
    company: "Nataraj Industrial Group",
    role: "Chief Procurement Officer",
  },
  {
    quote:
      "When we needed custom structural assemblies for our offshore platform, ManufacturePro delivered certified components in record time. Flawless execution, outstanding technical support throughout the project.",
    name: "Lars Johansen",
    company: "Nordic Energy Solutions",
    role: "Project Engineering Director",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-10 bg-orange" />
            <span className="text-orange font-medium text-sm tracking-[0.15em] uppercase">
              Testimonials
            </span>
            <div className="h-0.5 w-10 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded p-8 shadow-industrial border border-border flex flex-col"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center font-display font-bold text-orange text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
