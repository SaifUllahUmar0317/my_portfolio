import { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router";
import { Github, Linkedin, Mail, Phone, ChevronRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";

// ── Typewriter ──────────────────────────────────────────────────────────────
const TITLES = [
  "Machine Learning Engineer",
  "AI Developer",
  "NLP Specialist",
  "Data Scientist",
  "RAG Chatbot Builder",
];

function useTypewriter(
  words: string[],
  typingSpeed = 75,
  erasingSpeed = 32,
  pauseMs = 1900,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!erasing) {
      if (displayed.length < word.length) {
        timer = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else {
        timer = setTimeout(() => setErasing(true), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          erasingSpeed,
        );
      } else {
        setErasing(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, erasing, wordIdx, words, typingSpeed, erasingSpeed, pauseMs]);

  return displayed;
}

// ── Count-up stat ───────────────────────────────────────────────────────────
function CountUp({ to, suffix = "" }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 55;
    const id = setInterval(() => {
      frame++;
      setVal(Math.round((to * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <div ref={ref} className="inline">
      {val}{suffix}
    </div>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: "Hate Speech Recognition",
    subtitle: "Roman Urdu NLP",
    description: "NLP model detecting hate speech in Roman Urdu using text classification.",
    tags: ["NLP", "Python", "ML"],
    image: "/assets/projects/hate-speech.jpg",
  },
  {
    title: "Fake News Detection",
    subtitle: "Text Classification",
    description: "ML model identifying misinformation using text feature analysis.",
    tags: ["NLP", "Python", "Classification"],
    image: "/assets/projects/fake-news.jpg",
  },
  {
    title: "Diabetes Predictor",
    subtitle: "Healthcare AI",
    description: "Predictive model for early diabetes detection via health parameters.",
    tags: ["Healthcare", "Scikit-learn"],
    image: "/assets/projects/diabetes-predictor.jpg",
  },
  {
    title: "TutorConnect Pakistan",
    subtitle: "EdTech Platform",
    description: "AI-powered platform connecting students with qualified tutors across Pakistan.",
    tags: ["Full Stack", "AI", "React"],
    image: "/assets/projects/tutor-connect.jpg",
  },
];

const techStack = [
  "Python", "Scikit-learn", "TensorFlow", "Pandas",
  "NumPy", "React", "FastAPI", "Jupyter",
];

const stats = [
  { to: 10, suffix: "+", label: "Projects Completed" },
  { to: 3, suffix: "+", label: "Years of Experience" },
  { to: 2, suffix: "+", label: "Achievements" },
  { to: 100, suffix: "%", label: "Quality" },
];

// Floating background particles
const PARTICLES = [
  { x: "7%", y: "22%", size: 5, dur: 3.8, delay: 0, color: "rgba(139,92,246,0.55)" },
  { x: "91%", y: "17%", size: 3, dur: 4.2, delay: 1.3, color: "rgba(6,182,212,0.55)" },
  { x: "74%", y: "66%", size: 6, dur: 3.1, delay: 0.5, color: "rgba(139,92,246,0.45)" },
  { x: "14%", y: "72%", size: 4, dur: 4.7, delay: 2.1, color: "rgba(6,182,212,0.45)" },
  { x: "53%", y: "7%", size: 3, dur: 3.9, delay: 1.6, color: "rgba(167,139,250,0.5)" },
  { x: "34%", y: "86%", size: 5, dur: 3.3, delay: 0.9, color: "rgba(103,232,249,0.45)" },
  { x: "87%", y: "51%", size: 4, dur: 4.4, delay: 0.4, color: "rgba(139,92,246,0.5)" },
  { x: "3%", y: "46%", size: 3, dur: 3.6, delay: 1.9, color: "rgba(6,182,212,0.5)" },
  { x: "61%", y: "34%", size: 4, dur: 2.9, delay: 0.7, color: "rgba(167,139,250,0.45)" },
  { x: "44%", y: "91%", size: 3, dur: 4.0, delay: 1.2, color: "rgba(103,232,249,0.5)" },
  { x: "28%", y: "12%", size: 4, dur: 3.5, delay: 2.4, color: "rgba(139,92,246,0.5)" },
  { x: "80%", y: "80%", size: 3, dur: 4.1, delay: 0.2, color: "rgba(6,182,212,0.45)" },
];

// ── Memoised typewriter display (isolated re-renders) ───────────────────────
const TypewriterTitle = memo(function TypewriterTitle() {
  const text = useTypewriter(TITLES);
  return (
    <div className="flex items-center mt-3 h-9">
      <span className="text-xl sm:text-2xl font-semibold" style={{ color: "#22d3ee" }}>
        {text}
      </span>
      <span className="cursor-blink ml-0.5" />
    </div>
  );
});

// Hero animation variants
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ── Component ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: p.color }}
            animate={{ y: [0, -22, 0], opacity: [0.18, 0.75, 0.18] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: text ── */}
            <motion.div
              className="space-y-7 order-2 lg:order-1"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Name + typewriter */}
              <motion.div variants={heroItem}>
                <p className="text-gray-400 text-base mb-1 font-medium tracking-wide">Hi I&apos;m</p>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Saifullah Umar
                </h1>

                {/* Typewriter title — isolated in its own memo to avoid re-rendering the whole page */}
                <TypewriterTitle />
              </motion.div>

              {/* Description */}
              <motion.p variants={heroItem} className="text-gray-400 leading-relaxed max-w-lg">
                AI &amp; Artificial Intelligence Student passionate about building intelligent
                systems, deploying machine learning models, and solving real-world challenges
                through data-driven solutions.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={heroItem} className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="btn-shimmer btn-gradient inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm"
                >
                  Explore My Work <ChevronRight size={15} />
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
                    style={{ color: "#a78bfa", border: "1px solid rgba(139,92,246,0.4)" }}
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>

              {/* Socials */}
              <motion.div variants={heroItem} className="flex items-center gap-3 pt-1">
                {[
                  { href: "https://github.com/SaifUllahUmar0317", icon: <Github size={18} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/saifullah-umar-624115409/", icon: <Linkedin size={18} />, label: "LinkedIn" },
                  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com", icon: <Mail size={18} />, label: "Email" },
                  { href: "tel:03175046044", icon: <Phone size={18} />, label: "Phone" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#9ca3af",
                    }}
                    whileHover={{ scale: 1.2, color: "#a78bfa", background: "rgba(139,92,246,0.2)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: avatar ── */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.75, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                {/* Glow layers */}
                <div
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
                    transform: "scale(1.3)",
                    filter: "blur(30px)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
                    transform: "scale(1.5)",
                    filter: "blur(50px)",
                  }}
                />

                {/* Spinning rings */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px dashed rgba(139,92,246,0.5)", animation: "spin 25s linear infinite" }}
                />
                <div
                  className="absolute inset-4 rounded-full"
                  style={{ border: "1px solid rgba(6,182,212,0.3)", animation: "spin 18s linear infinite reverse" }}
                />

                {/* Photo */}
                <div
                  className="absolute inset-8 rounded-full overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #4c1d95, #1e1b4b, #0c4a6e)" }}
                >
                  <img
                    src="/assets/profile.png"
                    alt="Saifullah Umar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(76,29,149,0.3) 0%, transparent 60%)" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="rounded-2xl p-6 text-center cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    background: "linear-gradient(135deg, #c4b5fd, #67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex items-end justify-between mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>Portfolio</p>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium flex items-center gap-1 transition-colors hover:opacity-80"
              style={{ color: "#a78bfa" }}
            >
              View All <ChevronRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                className="rounded-2xl overflow-hidden group"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, borderColor: "rgba(139,92,246,0.4)" }}
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                  <div
                    className="absolute bottom-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
                  >
                    {p.subtitle}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-white font-semibold text-sm leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: "rgba(139,92,246,0.15)", color: "#c4b5fd" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 text-xs font-medium pt-1 transition-colors hover:opacity-80"
                    style={{ color: "#a78bfa" }}
                  >
                    View Project <ExternalLink size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>Technologies</p>
            <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          </motion.div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {techStack.map((t, i) => (
              <motion.div
                key={t}
                className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.08, borderColor: "rgba(139,92,246,0.4)" }}
              >
                <span className="text-gray-300 text-xs text-center font-medium">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="relative rounded-3xl p-14 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(76,29,149,0.5), rgba(30,27,75,0.8))",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Looking for a passionate ML engineer to bring your AI vision to life? I&apos;m ready
                to collaborate on impactful projects.
              </p>
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="btn-shimmer btn-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm"
                >
                  Get In Touch <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
