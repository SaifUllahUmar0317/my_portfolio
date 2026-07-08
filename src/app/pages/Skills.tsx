import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

// Animated progress bar — width animates 0 → level% when scrolled into view
function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <motion.span
          className="text-xs font-bold"
          style={{ color: "#a78bfa" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [skills, setSkills] = useState<{ mlSkills: any[]; programmingSkills: any[]; libraries: any[]; tools: any[] }>({
    mlSkills: [],
    programmingSkills: [],
    libraries: [],
    tools: []
  });

  useEffect(() => {
    fetch("/data/portfolio-data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills ?? { mlSkills: [], programmingSkills: [], libraries: [], tools: [] }))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  const { mlSkills, programmingSkills, libraries, tools } = skills;
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Expertise</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Skills</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Proficient in the full ML lifecycle — from data preprocessing to model deployment and evaluation.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="p-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold text-white mb-7">Machine Learning &amp; AI</h2>
            <div className="space-y-5">
              {mlSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(6,182,212,0.15)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold text-white mb-7">Programming &amp; Development</h2>
            <div className="space-y-5">
              {programmingSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </motion.div>
        </div>

        {/* Libraries */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Libraries &amp; Frameworks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {libraries.map((lib, i) => (
              <motion.div
                key={lib.name}
                className="p-5 rounded-2xl flex flex-col items-center text-center gap-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.4)", scale: 1.03 }}
              >
                <p className="text-white text-sm font-semibold">{lib.name}</p>
                <p className="text-gray-500 text-xs">{lib.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Tools &amp; Platforms</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {tools.map((t, i) => (
              <motion.div
                key={t}
                className="flex flex-col items-center gap-2 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -5, borderColor: "rgba(6,182,212,0.4)", scale: 1.06 }}
              >
                <span className="text-gray-300 text-xs text-center font-medium">{t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
