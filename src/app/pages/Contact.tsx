import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: <Mail size={20} />, label: "Email", value: "saifullahumar.ai@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com", color: "#7c3aed" },
  { icon: <Phone size={20} />, label: "Phone", value: "03175046044", href: "tel:03175046044", color: "#0891b2" },
  { icon: <Github size={20} />, label: "GitHub", value: "SaifUllahUmar0317", href: "https://github.com/SaifUllahUmar0317", color: "#059669" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "saifullah-umar", href: "https://www.linkedin.com/in/saifullah-umar-624115409/", color: "#0891b2" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-Q2ISPQr5kpCtKBN7";
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_9xu772n";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0m4y6mz";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-Q2ISPQr5kpCtKBN7";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey,
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error - Full object:", err);
      console.error("EmailJS error - Type:", typeof err);
      if (err instanceof Error) {
        console.error("EmailJS error - Message:", err.message);
        console.error("EmailJS error - Stack:", err.stack);
      }
      const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
      setError(`Failed to send. Please email me directly at saifullahumar.ai@gmail.com. Details: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(139,92,246,0.2)",
    color: "#e2e8f0",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
    fontFamily: "'Poppins', sans-serif",
  };

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
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Me</h1>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Let&apos;s Talk</h2>
              <p className="text-gray-500 text-sm">I&apos;m open to freelance projects, full-time roles, and AI collaborations.</p>
            </div>

            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl block"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.1 }}
                whileHover={{ x: 4, borderColor: `${c.color}40` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${c.color}20`, color: c.color }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{c.label}</p>
                  <p className="text-white text-sm font-medium">{c.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              className="p-5 rounded-2xl"
              style={{ background: "linear-gradient(135deg, rgba(76,29,149,0.3), rgba(8,145,178,0.2))", border: "1px solid rgba(139,92,246,0.25)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 6px #4ade80" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently open to freelance projects, internships, and full-time ML engineering opportunities.
              </p>
            </motion.div>

            {/* Social row */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-gray-500 text-xs mb-3 font-medium uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/SaifUllahUmar0317", icon: <Github size={18} />, color: "#7c3aed" },
                  { href: "https://www.linkedin.com/in/saifullah-umar-624115409/", icon: <Linkedin size={18} />, color: "#0891b2" },
                  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com", icon: <Mail size={18} />, color: "#059669" },
                  { href: "tel:03175046044", icon: <Phone size={18} />, color: "#d97706" },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}30` }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)" }}
            >
              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.15)" }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <CheckCircle size={32} style={{ color: "#4ade80" }} />
                  </motion.div>
                  <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <motion.button
                    onClick={() => setSent(false)}
                    className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-xs font-medium block mb-2">Your Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Saif Ullah" required style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.2)")} />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-medium block mb-2">Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.2)")} />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-2">Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="ML project collaboration" required style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.2)")} />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." required rows={6}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.2)")} />
                  </div>
                  {error && (
                    <motion.div
                      className="flex items-start gap-2 p-3.5 rounded-xl text-sm"
                      style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      {error}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-shimmer w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-white text-sm disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm">Let&apos;s create the future with AI</p>
        </motion.div>
      </div>
    </div>
  );
}
