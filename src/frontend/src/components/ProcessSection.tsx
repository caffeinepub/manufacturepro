import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation & Design",
    desc: "We work closely with your engineering team to understand specifications, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Engineering Review",
    desc: "Our DFM engineers analyze designs for manufacturability, cost optimization, and quality assurance.",
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    desc: "State-of-the-art machinery and skilled operators execute production to tight tolerances.",
  },
  {
    number: "04",
    title: "Quality Assurance",
    desc: "100% inspection with CMM, optical, and non-destructive testing before any part leaves the floor.",
  },
  {
    number: "05",
    title: "Delivery & Support",
    desc: "On-time global delivery with full documentation, compliance certs, and ongoing technical support.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-pad bg-navy relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, oklch(0.65 0.18 45) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.55 0.12 220) 0%, transparent 50%)",
        }}
      />

      <div className="container-wide relative z-10">
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
              How We Work
            </span>
            <div className="h-0.5 w-10 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Manufacturing Process
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            A disciplined, transparent process from brief to delivery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-white/10" />
          <div
            className="hidden md:block absolute top-10 left-0 h-0.5 bg-orange"
            style={{ width: "100%" }}
          />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center md:text-left"
                data-ocid={`process.item.${i + 1}`}
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-navy-deep border-2 border-orange flex flex-col items-center justify-center mx-auto md:mx-0 mb-5 shadow-orange-glow">
                  <span className="font-display font-black text-orange text-xl leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
