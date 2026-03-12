import { motion } from "motion/react";

const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "10,000+", label: "Products Manufactured" },
  { value: "500+", label: "Clients Worldwide" },
  { value: "50+", label: "Countries Served" },
];

export default function StatsSection() {
  return (
    <section className="bg-navy-deep relative overflow-hidden">
      {/* Decorative bg pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.65 0.18 45) 0px, oklch(0.65 0.18 45) 1px, transparent 1px, transparent 50px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="container-wide py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="font-display text-5xl md:text-6xl font-black text-orange mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
