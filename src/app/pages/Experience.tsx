import { motion } from "motion/react";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

const experienceEntries = [
  {
    role: "Freelance AI & Python Developer",
    company: "Self-Employed",
    period: "2025 – Present",
    description:
      "Delivering AI-powered applications, data-driven dashboards, and high-quality web solutions for clients across different industries with a focus on impact and reliability.",
    highlights: [
      "Built AI-powered web applications with modern, responsive interfaces",
      "Developed dashboards for data analysis, visualization, and business insights",
      "Implemented machine learning models for classification and predictive tasks",
    ],
    accent: "#7c3aed",
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Sep 2025 – Oct 2025",
    description:
      "Completed an intensive internship focused on real-world machine learning workflows, including data preparation, model development, evaluation, and optimization.",
    highlights: [
      "Developed machine learning solutions using Python and Scikit-learn",
      "Performed data cleaning, preprocessing, and feature engineering",
      "Evaluated and improved predictive models for practical use cases",
    ],
    accent: "#06b6d4",
  },
];

export default function Experience() {
  return (
    <div className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-16 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
      <div className="absolute bottom-16 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>
            Professional Background
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Experience</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            A results-driven machine learning engineer and Python developer focused on building AI solutions, data pipelines, and polished web experiences.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl p-6 sm:p-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl" style={{ background: "rgba(124,58,237,0.14)", color: "#a78bfa" }}>
              <BriefcaseBusiness size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              <p className="text-gray-500 text-sm">Focused on building impactful AI solutions and dependable software products</p>
            </div>
          </div>

          <div className="space-y-6">
            {experienceEntries.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="rounded-2xl p-5 sm:p-6"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: `${exp.accent}40` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white text-xl font-bold">{exp.role}</h3>
                    <p className="text-sm font-medium" style={{ color: exp.accent }}>{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${exp.accent}18`, color: exp.accent }}>
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: exp.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
