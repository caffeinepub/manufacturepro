import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    title: "Industrial Components",
    desc: "High-tolerance machined components for heavy industry, energy, and automotive — built to withstand extreme operating conditions.",
    image: "/assets/generated/product-industrial-components.dim_600x400.jpg",
    tags: ["CNC Machined", "Heat Treated", "Surface Finished"],
  },
  {
    title: "Structural Systems",
    desc: "Engineered steel structures, frames, and support systems for construction, infrastructure, and industrial facilities worldwide.",
    image: "/assets/generated/product-structural-systems.dim_600x400.jpg",
    tags: ["Welded", "Galvanized", "Load-Rated"],
  },
  {
    title: "Custom Assemblies",
    desc: "Complex multi-component assemblies integrating mechanical, electrical, and hydraulic subsystems to your exact specifications.",
    image: "/assets/generated/product-custom-assemblies.dim_600x400.jpg",
    tags: ["Custom", "Integrated", "Tested"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-pad bg-background">
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
              Products
            </span>
            <div className="h-0.5 w-10 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Product Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded overflow-hidden shadow-industrial border border-border hover:border-orange/30 transition-all duration-300"
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-orange/10 text-orange text-xs font-semibold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 text-orange text-sm font-semibold hover:gap-3 transition-all"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  data-ocid={`products.secondary_button.${i + 1}`}
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
