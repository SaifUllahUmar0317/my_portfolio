import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function Journey() {
  const [timeline, setTimeline] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/portfolio-data.json")
      .then((res) => res.json())
      .then((data) => setTimeline(data.journey || []))
      .catch((err) => console.error("Error loading journey data:", err));
  }, []);

  const getIconComponent = (iconName: string) => {
    const IconComp = (Icons as any)[iconName];
    return IconComp ? <IconComp size={20} /> : <Icons.Code size={20} />;
  };
  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Timeline</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Journey</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            From writing my first line of Python to deploying AI-powered platforms — here&apos;s how the story unfolded.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — sticky avatar */}
          <motion.div
            className="hidden lg:flex lg:col-span-3 flex-col items-center sticky top-28"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-52 h-52 animate-float">
              <div className="absolute inset-0 rounded-full opacity-40" style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", filter: "blur(20px)", transform: "scale(1.3)" }} />
              <div className="absolute inset-0 rounded-full" style={{ border: "2px solid rgba(139,92,246,0.4)" }} />
              <div className="absolute inset-4 rounded-full" style={{ border: "1px solid rgba(6,182,212,0.25)" }} />
              <div className="absolute inset-8 rounded-full overflow-hidden" style={{ background: "linear-gradient(135deg, #4c1d95, #1e1b4b, #0c4a6e)" }}>
                <img src="/assets/profile.png" alt="Saifullah Umar" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white font-bold">Saifullah Umar</p>
              <p className="text-gray-500 text-sm">ML Engineer</p>
            </div>
            <div className="mt-8 space-y-3 w-full">
              {[
                { label: "Years Learning", value: "4+" },
                { label: "Projects Built", value: "10+" },
                { label: "ML Models", value: "7+" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex justify-between items-center px-4 py-2.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.12)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-gray-400 text-xs">{s.label}</span>
                  <span className="text-sm font-bold" style={{ color: "#a78bfa" }}>{s.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <div className="lg:col-span-9 relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ background: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)" }}
            />

            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  className="sm:pl-16 relative"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Icon dot */}
                  <motion.div
                    className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center"
                    style={{ background: `${item.color}20`, border: `2px solid ${item.color}50`, color: item.color }}
                    whileHover={{ scale: 1.15 }}
                  >
                    {getIconComponent(item.icon)}
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    whileHover={{ borderColor: `${item.color}40`, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-black px-3 py-1 rounded-full"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.year}
                      </span>
                      <span className="text-gray-500 text-xs">{item.subtitle}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((chip, ci) => (
                        <motion.span
                          key={chip}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.08 + ci * 0.06 + 0.3 }}
                        >
                          {chip}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
