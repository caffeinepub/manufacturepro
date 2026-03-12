import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      if (actor) {
        await actor.submitInquiry(
          form.name,
          form.email,
          form.company,
          form.message,
        );
      }
      setSubmitted(true);
      toast.success("Inquiry submitted! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad bg-navy relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 80% 50%, oklch(0.65 0.18 45) 0%, transparent 70%)",
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
              Get in Touch
            </span>
            <div className="h-0.5 w-10 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Request a Quote
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Tell us about your project. Our team will respond within one
            business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Headquarters
                    </div>
                    <div className="text-white/60 text-sm">
                      2400 Industrial Blvd, Suite 800
                      <br />
                      Detroit, MI 48210, USA
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Phone
                    </div>
                    <div className="text-white/60 text-sm">
                      +1 (313) 555-0148
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Email
                    </div>
                    <div className="text-white/60 text-sm">
                      inquiries@manufacturepro.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded p-5 border border-white/10">
              <div className="text-white font-semibold mb-2">Response Time</div>
              <div className="text-white/60 text-sm">
                We respond to all inquiries within 1 business day. For urgent
                requests, call us directly.
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div
                className="bg-white/5 border border-orange/40 rounded p-12 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-16 h-16 text-orange mx-auto mb-5" />
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-white/60">
                  Thank you for reaching out. Our team will review your request
                  and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded p-8 space-y-5"
                data-ocid="contact.panel"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-white/80 text-sm font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.input"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange focus-visible:ring-orange/30"
                    />
                    {errors.name && (
                      <p
                        className="text-red-400 text-xs"
                        data-ocid="contact.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-white/80 text-sm font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      data-ocid="contact.input"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange focus-visible:ring-orange/30"
                    />
                    {errors.email && (
                      <p
                        className="text-red-400 text-xs"
                        data-ocid="contact.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-company"
                    className="text-white/80 text-sm font-medium"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="contact-company"
                    data-ocid="contact.input"
                    placeholder="Acme Corporation"
                    value={form.company}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, company: e.target.value }))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange focus-visible:ring-orange/30"
                  />
                  {errors.company && (
                    <p
                      className="text-red-400 text-xs"
                      data-ocid="contact.error_state"
                    >
                      {errors.company}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-white/80 text-sm font-medium"
                  >
                    Project Details *
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="Describe your manufacturing needs, quantities, materials, tolerances, and timeline..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange focus-visible:ring-orange/30 resize-none"
                  />
                  {errors.message && (
                    <p
                      className="text-red-400 text-xs"
                      data-ocid="contact.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  data-ocid="contact.submit_button"
                  disabled={isSubmitting}
                  className="w-full bg-orange hover:bg-orange-bright text-white font-bold text-base py-6 shadow-orange-glow transition-all hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span data-ocid="contact.loading_state">
                        Submitting...
                      </span>
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
