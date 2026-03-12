import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    number: "40+",
    label: "Years Experience",
    desc: "Serving industries since 1985",
  },
  {
    number: "ISO 9001",
    label: "Certified",
    desc: "Rigorous quality management",
  },
  { number: "50+", label: "Countries Served", desc: "Truly global reach" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 w-10 bg-orange" />
              <span className="text-orange font-medium text-sm tracking-[0.15em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-orange">ManufacturePro</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 1985, ManufacturePro has been at the forefront of precision
              manufacturing, delivering exceptional industrial solutions to
              clients across six continents. Our ISO 9001 certified operations
              combine decades of engineering expertise with cutting-edge
              technology to produce components and assemblies that exceed the
              most demanding industry standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              With over 2,000 skilled engineers and technicians, we partner with
              global leaders in aerospace, automotive, energy, and
              infrastructure to transform complex designs into precision-built
              realities.
            </p>

            <ul className="space-y-3">
              {[
                "State-of-the-art CNC machining centers",
                "End-to-end supply chain management",
                "24/7 quality monitoring and assurance",
                "On-time delivery commitment ≥ 98.5%",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Big visual block */}
            <div className="relative bg-navy rounded overflow-hidden p-8 shadow-industrial">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent" />
              <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-orange/20 rounded-tr" />
              <div className="relative">
                <div className="font-display text-7xl font-black text-white/10 select-none mb-2">
                  1985
                </div>
                <div className="font-display text-2xl font-bold text-white">
                  Founded in Excellence
                </div>
                <div className="text-white/60 mt-2">
                  Four decades of precision manufacturing mastery
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-secondary rounded p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-orange leading-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
