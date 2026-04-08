import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { Stagger, fadeItem } from "./Motion.jsx";
import { portfolioProjects } from "../data/portfolio.js";

export default function Portfolio() {
  const featuredProject =
    portfolioProjects.find((project) => project.featured) || portfolioProjects[0];
  const secondaryProjects = portfolioProjects.filter(
    (project) => project !== featuredProject
  );

  return (
    <section id="portfolio" className="section">
      <div className="section-inner flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Portfolio"
            title="Proof of premium demand."
            subtitle="A curated selection of launches, repositionings, and growth programs. Every project is built to convert attention into measurable revenue."
          />
          <div className="flex items-center gap-3">
            <Button variant="ghost" as={Link} to="/contact">
              Download Case Studies
            </Button>
          </div>
        </div>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="card grid gap-8 overflow-hidden p-8 lg:grid-cols-[1.1fr_0.9fr]"
          whileHover={{ y: -6 }}
        >
          <div className="flex flex-col justify-between gap-6">
            <div>
              <span className="chip">Featured project</span>
              <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {featuredProject.description}
              </p>
              <p className="mt-4 text-sm text-brand">
                {featuredProject.results}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button as={Link} to="/contact">
                Request full case study
              </Button>
              <Button as={Link} to="/services" variant="ghost">
                Explore services
              </Button>
            </div>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[24px] border border-white/10 md:h-[360px]">
            <motion.img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
              {featuredProject.category}
            </div>
          </div>
        </motion.article>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                  {project.category}
                </div>
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-brand">
                  {project.results}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition group-hover:text-white"
                >
                  View case study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
