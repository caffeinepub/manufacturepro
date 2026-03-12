import { Cpu, Drill, Globe2, Layers, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Drill,
    title: "Precision Machining",
    desc: "5-axis CNC machining achieving tolerances of ±0.001mm for complex geometries in aerospace-grade alloys.",
  },
  {
    icon: Layers,
    title: "Metal Fabrication",
    desc: "Full-spectrum fabrication including laser cutting, welding, stamping, and sheet metal forming.",
  },
  {
    icon: Wrench,
    title: "Assembly & Integration",
    desc: "Sub-assembly and full system integration with certified technicians in ISO class environments.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "CMM inspection, X-ray, and ultrasonic testing to guarantee every component meets exact specifications.",
  },
  {
    icon: Cpu,
    title: "Custom Engineering",
    desc: "Co-engineering services from concept to production — design for manufacturability built in from day one.",
  },
  {
    icon: Globe2,
    title: "Global Logistics",
    desc: "Integrated supply chain management with just-in-time delivery to 50+ countries worldwide.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-secondary/40">
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
              Capabilities
            </span>
            <div className="h-0.5 w-10 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Manufacturing Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From raw material to finished product, we deliver end-to-end
            manufacturing capabilities under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded p-7 shadow-industrial border border-border hover:border-orange/40 transition-all duration-300"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded bg-orange/10 group-hover:bg-orange/20 flex items-center justify-center mb-5 transition-colors">
                <service.icon
                  className="w-6 h-6 text-orange"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
