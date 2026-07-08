import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/portfolio-data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);
  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Projects</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            A collection of machine learning, NLP, and AI projects built to solve real-world problems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl overflow-hidden group"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, borderColor: `${p.accent}40` }}
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
                <motion.div
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: p.accent, border: `1px solid ${p.accent}30` }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.13 + 0.3 }}
                >
                  {p.category}
                </motion.div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "rgba(139,92,246,0.12)", color: "#c4b5fd" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <motion.a
                    href="https://github.com/SaifUllahUmar0317"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(139,92,246,0.2)", color: "#c4b5fd" }}
                    whileHover={{ scale: 1.07, background: "rgba(139,92,246,0.35)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={12} /> View Code
                  </motion.a>
                  <motion.a
                    href="https://github.com/SaifUllahUmar0317"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(6,182,212,0.15)", color: "#67e8f9" }}
                    whileHover={{ scale: 1.07, background: "rgba(6,182,212,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={12} /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/SaifUllahUmar0317"
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
