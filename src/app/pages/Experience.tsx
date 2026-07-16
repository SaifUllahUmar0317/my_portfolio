import { motion } from "motion/react";
import { BrainCircuit, BriefcaseBusiness, CalendarDays, Code2, GraduationCap, Sparkles } from "lucide-react";

const experienceEntries = [
  {
    role: "Freelance AI & Python Developer",
    company: "Self-Employed",
    period: "2025 – Present",
    description:
      "Builds AI-powered web applications, data analysis dashboards, and responsive business websites for clients worldwide while delivering machine learning solutions tailored to real business needs.",
    highlights: [
      "Developed AI-powered web applications with interactive user experiences",
      "Built data analysis and visualization dashboards for business insights",
      "Implemented machine learning models for classification and predictive tasks",
    ],
    accent: "#7c3aed",
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Sep 2025 – Oct 2025",
    description:
      "Completed a hands-on internship focused on building machine learning solutions using Python and Scikit-learn, with emphasis on preprocessing, feature engineering, and model evaluation.",
    highlights: [
      "Developed machine learning solutions using Python and Scikit-learn",
      "Performed data cleaning, preprocessing, and feature engineering",
      "Evaluated and optimized predictive models for real-world tasks",
    ],
    accent: "#06b6d4",
  },
];

const educationEntries = [
  {
    title: "BS in Artificial Intelligence",
    institution: "NUTECH University",
    period: "2024 – Now",
    accent: "#7c3aed",
  },
  {
    title: "Intermediate in Computer Science",
    institution: "PAEC Model College",
    period: "2022 – 2024",
    accent: "#06b6d4",
  },
  {
    title: "Matric in Computer Science",
    institution: "IMCG Nilore College",
    period: "2020 – 2022",
    accent: "#34d399",
  },
];

const skillHighlights = [
  "AI Development",
  "Machine Learning",
  "Exploratory Data Analysis",
  "Model Evaluation",
  "Python",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Streamlit",
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

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
          <motion.div
            className="rounded-3xl p-6 sm:p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl" style={{ background: "rgba(124,58,237,0.14)", color: "#a78bfa" }}>
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                <p className="text-gray-500 text-sm">Professional growth in AI, development, and problem-solving</p>
              </div>
            </div>

            <div className="space-y-7">
              {experienceEntries.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  className="relative pl-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-2.5 w-3 h-3 rounded-full" style={{ background: exp.accent, boxShadow: `0 0 0 6px ${exp.accent}20` }} />
                  <div className="border-l border-white/10 pl-5 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${exp.accent}18`, color: exp.accent }}>
                        {exp.period}
                      </span>
                      <span className="text-gray-500 text-sm">{exp.company}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: exp.accent }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="rounded-3xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl" style={{ background: "rgba(6,182,212,0.14)", color: "#67e8f9" }}>
                  <Sparkles size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">Core Strength</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Machine Learning Engineer and Python Developer with hands-on experience in building AI solutions, predictive models, data analysis pipelines, and interactive web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {skillHighlights.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-200" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl" style={{ background: "rgba(16,185,129,0.14)", color: "#6ee7b7" }}>
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {educationEntries.map((edu) => (
                  <div key={edu.title} className="flex items-start gap-3 rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="p-2 rounded-xl mt-0.5" style={{ background: `${edu.accent}14`, color: edu.accent }}>
                      <Code2 size={14} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="text-white font-semibold text-sm">{edu.title}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${edu.accent}15`, color: edu.accent }}>
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
