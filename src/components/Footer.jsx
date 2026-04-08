import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../data/company.js";

export default function Footer() {
  const MotionLink = motion(Link);
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="section-inner grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={company.logo}
              alt={`${company.shortName} logo`}
              className="h-10 w-10 rounded-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div>
              <p className="text-lg font-semibold">{company.shortName}</p>
              <p className="text-xs text-slate-500">{company.name}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Premium digital marketing for brands with ambition.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
            Launch-ready in weeks
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Company
          </p>
          <MotionLink
            to="/about"
            className="transition hover:text-white"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            About
          </MotionLink>
          <MotionLink
            to="/services"
            className="transition hover:text-white"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Services
          </MotionLink>
          <MotionLink
            to="/about"
            className="transition hover:text-white"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            FAQ
          </MotionLink>
          <MotionLink
            to="/portfolio"
            className="transition hover:text-white"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Portfolio
          </MotionLink>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <MotionLink
            to="/contact"
            className="transition hover:text-white"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Request a demo
          </MotionLink>
          <a
            href={`mailto:${company.email}`}
            className="transition hover:text-white"
          >
            {company.email}
          </a>
          <a
            href={`tel:${company.phone}`}
            className="transition hover:text-white"
          >
            {company.phone}
          </a>
          <span className="text-xs text-slate-500">{company.address}</span>
        </div>
      </div>
      <div className="section-inner mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Skyfill Agency. All rights reserved.</span>
        <span>Designed for premium growth.</span>
      </div>
    </footer>
  );
}
