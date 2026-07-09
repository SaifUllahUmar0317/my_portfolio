import { Link } from "react-router";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { motion } from "motion/react";

const drivesMe = [
  { title: "Innovation", desc: "Constantly exploring new ML techniques and frameworks to stay at the forefront of AI." },
  { title: "Problem Solving", desc: "Transforming complex challenges into elegant, data-driven solutions that create real impact." },
  { title: "Learning", desc: "Dedicated to continuous growth in Machine Learning, Deep Learning, and AI research." },
  { title: "Impact", desc: "Building AI solutions that address real-world problems and benefit communities." },
];

const personalDetails = [
  { label: "Full Name", value: "Saifullah Umar" },
  { label: "Email", value: "saifullahumar.ai@gmail.com" },
  { label: "Phone", value: "03175046044" },
  { label: "Specialty", value: "Machine Learning Engineer" },
  { label: "GitHub", value: "SaifUllahUmar0317" },
  { label: "Status", value: "Open to Work" },
];

const statCards = [
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Yrs Experience" },
  { value: "7+", label: "ML Models Built" },
  { value: "100%", label: "Dedication" },
];

const driveColors = ["#c4b5fd", "#67e8f9", "#6ee7b7", "#fda4af"];

export default function About() {
  return (
    <div className="relative">

      {/* ── Header ── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Get To Know Me</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About Me</h1>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — avatar + stats */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Avatar */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-10 animate-float">
                <div
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", filter: "blur(20px)", transform: "scale(1.2)" }}
                />
                <div className="absolute inset-0 rounded-full" style={{ border: "2px solid rgba(139,92,246,0.4)" }} />
                <div className="absolute inset-4 rounded-full" style={{ border: "1px solid rgba(6,182,212,0.25)" }} />
                <div
                  className="absolute inset-8 rounded-full overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #4c1d95, #1e1b4b, #0c4a6e)" }}
                >
                  <img src="/assets/profile.png" alt="Saifullah Umar" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {statCards.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                  >
                    <div
                      className="text-2xl font-black mb-0.5"
                      style={{ background: "linear-gradient(135deg, #c4b5fd, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — bio */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">I&apos;m Saifullah Umar</h2>
                <p className="font-semibold text-base" style={{ color: "#22d3ee" }}>Machine Learning Engineer &amp; AI Student</p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                I am a passionate AI &amp; Machine Learning Engineer specializing in model training, deployment, evaluation, and tuning. My expertise spans across Python, Scikit-learn, RAG-based chatbots, and building front-end interfaces for ML models.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From hate speech recognition in Roman Urdu to building TutorConnect-Pakistan, I channel my technical skills into impactful projects. I&apos;m committed to continuous learning and staying at the cutting edge of artificial intelligence.
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalDetails.map((d, i) => (
                  <motion.div
                    key={d.label}
                    className="flex items-start gap-3 p-3.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    whileHover={{ borderColor: "rgba(139,92,246,0.3)" }}
                  >
                    <User size={14} className="mt-0.5 shrink-0" style={{ color: "#a78bfa" }} />
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{d.label}</p>
                      <p className="text-white text-sm font-medium">{d.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href="https://github.com/SaifUllahUmar0317" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                >
                  <Github size={15} /> GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/saifullah-umar-624115409/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #0891b2, #0e7490)" }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                >
                  <Linkedin size={15} /> LinkedIn
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                    style={{ color: "#a78bfa", border: "1px solid rgba(139,92,246,0.4)" }}
                  >
                    <Mail size={15} /> Contact Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What Drives Me ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Motivation</p>
            <h2 className="text-3xl font-bold text-white">What Drives Me</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {drivesMe.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -8, borderColor: "rgba(139,92,246,0.35)" }}
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-5"
                  style={{ background: driveColors[i] }}
                />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-14 p-8 rounded-2xl text-center"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 text-lg italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;The best way to predict the future is to create it — and with AI, we have the tools to do exactly that.&rdquo;
            </p>
            <p className="text-gray-500 text-sm mt-3 font-medium">— Saifullah Umar</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
