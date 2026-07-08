import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Machine Learning Models",
    description: "Design, train, and fine-tune custom machine learning models tailored to your data and business objectives — from classification to regression and clustering.",
    features: ["Custom model architecture", "Hyperparameter tuning", "Model evaluation & metrics", "Cross-validation"],
    from: "#4c1d95", to: "#1e1b4b", accent: "#c4b5fd",
  },
  {
    title: "RAG-based Chatbot",
    description: "Build intelligent conversational AI systems powered by Retrieval-Augmented Generation (RAG) that answer questions from your custom knowledge base.",
    features: ["Custom knowledge base integration", "LLM fine-tuning", "Vector database setup", "API deployment"],
    from: "#0c4a6e", to: "#042f2e", accent: "#67e8f9",
  },
  {
    title: "Model Training & Tuning",
    description: "Optimize existing ML models through advanced hyperparameter search, architecture improvements, and regularization strategies to maximize performance.",
    features: ["Grid & random search", "Bayesian optimization", "Regularization techniques", "Ensemble methods"],
    from: "#052e16", to: "#0c4a6e", accent: "#6ee7b7",
  },
  {
    title: "Model Deployment",
    description: "Deploy your trained ML models to production environments using FastAPI, Docker, or cloud platforms — making your AI accessible via REST APIs.",
    features: ["FastAPI REST endpoints", "Docker containerization", "Cloud deployment", "Monitoring setup"],
    from: "#431407", to: "#1e1b4b", accent: "#fdba74",
  },
  {
    title: "Data Preprocessing & Analysis",
    description: "Transform raw data into clean, feature-rich datasets ready for ML. Includes EDA, visualization, feature engineering, and outlier handling.",
    features: ["Exploratory data analysis", "Feature engineering", "Data cleaning & imputation", "Visualization reports"],
    from: "#500724", to: "#0c4a6e", accent: "#fda4af",
  },
  {
    title: "Frontend for ML Models",
    description: "Build interactive, user-friendly web interfaces for your ML models using Streamlit or React — making AI accessible to non-technical stakeholders.",
    features: ["Streamlit dashboards", "React frontends", "Real-time predictions", "Interactive visualizations"],
    from: "#3b0764", to: "#042f2e", accent: "#d8b4fe",
  },
];

export default function Services() {
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>What I Offer</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Services</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            End-to-end machine learning solutions — from data exploration to production deployment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, borderColor: `${s.accent}40` }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${s.from}, ${s.accent})` }} />

              <div className="p-7">
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-400"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i % 3) * 0.13 + fi * 0.07 + 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.accent }} />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(76,29,149,0.5), rgba(8,145,178,0.3))", border: "1px solid rgba(139,92,246,0.3)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)" }} />
          <div className="relative">
            <p className="text-gray-400 text-sm mb-2">Ready to build?</p>
            <h2 className="text-3xl font-black text-white mb-4">Have a project in mind?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm">
              Whether you need a custom ML model, a chatbot, or a full data pipeline — I&apos;m here to help turn your idea into reality.
            </p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/contact"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
              >
                Let&apos;s Talk <ChevronRight size={15} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
