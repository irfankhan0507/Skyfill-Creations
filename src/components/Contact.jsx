import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { FadeIn } from "./Motion.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { company } from "../data/company.js";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner grid gap-10 lg:grid-cols-[1fr_1fr]">
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build your next luxury launch."
            subtitle="Share your goals and we will respond with a premium growth roadmap within 48 hours."
          />
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span>{company.address}</span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/portfolio">
              Explore Work
            </Button>
            <Button as={Link} to="/services" variant="ghost">
              View Services
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form className="glass grid gap-4 rounded-[28px] p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Full Name
                <input
                  type="text"
                  name="name"
                  className="input mt-2"
                  placeholder="Avery Johnson"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
                <input
                  type="email"
                  name="email"
                  className="input mt-2"
                  placeholder="hello@brand.com"
                />
              </label>
            </div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Company
              <input
                type="text"
                name="company"
                className="input mt-2"
                placeholder="Brand or venture"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Project Summary
              <textarea
                name="message"
                rows="4"
                className="input mt-2 resize-none"
                placeholder="Share goals, timelines, and any key challenges."
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span>Typical engagement begins at $8K/month.</span>
              <Button type="submit">Send Inquiry</Button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
