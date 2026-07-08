import { Link, NavLink, Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/education", label: "Education", end: false },
  { to: "/skills", label: "Skills", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/journey", label: "Journey", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#05050f", fontFamily: "'Poppins', sans-serif" }}>
      {/* Global background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", transform: "translate(-50%, -50%)" }} />
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5, 5, 15, 0.95)" : "rgba(5, 5, 15, 0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold" style={{ color: "#a78bfa" }}>
            Saif.
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="/src/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer btn-glow px-5 py-2 rounded-full text-sm font-semibold text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", display: "inline-block" }}
            >
              Resume
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden px-6 py-4 space-y-1" style={{ background: "rgba(13, 13, 32, 0.98)", borderTop: "1px solid rgba(139, 92, 246, 0.1)" }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? "text-purple-400 bg-purple-500/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/src/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-shimmer block mt-3 px-4 py-2.5 rounded-full text-sm font-semibold text-white text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 mt-24 py-14"
        style={{ background: "rgba(3, 3, 12, 0.95)", borderTop: "1px solid rgba(139, 92, 246, 0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#a78bfa" }}>Saif.</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                AI & Machine Learning Engineer passionate about building intelligent systems that solve real-world problems.
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/SaifUllahUmar0317", icon: <Github size={16} /> },
                  { href: "https://www.linkedin.com/in/saifullah-umar-624115409/", icon: <Linkedin size={16} /> },
                  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com", icon: <Mail size={16} /> },
                  { href: "tel:03175046044", icon: <Phone size={16} /> },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="p-2 rounded-lg transition-colors"
                    style={{ background: "rgba(139, 92, 246, 0.1)", color: "#a78bfa" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139, 92, 246, 0.25)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(139, 92, 246, 0.1)")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Mail size={14} style={{ color: "#a78bfa" }} />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                    saifullahumar.ai@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Phone size={14} style={{ color: "#a78bfa" }} />
                  <span>03175046044</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Github size={14} style={{ color: "#a78bfa" }} />
                  <a href="https://github.com/SaifUllahUmar0317" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect With Me</h4>
              <div className="space-y-3">
                {[
                  { label: "GitHub", icon: <Github size={15} />, href: "https://github.com/SaifUllahUmar0317" },
                  { label: "LinkedIn", icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/saifullah-umar-624115409/" },
                  { label: "Email", icon: <Mail size={15} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=saifullahumar.ai@gmail.com" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white transition-all"
                    style={{ background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(139, 92, 246, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(139, 92, 246, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.1)";
                    }}
                  >
                    <span style={{ color: "#a78bfa" }}>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 text-center text-gray-600 text-xs" style={{ borderTop: "1px solid rgba(139, 92, 246, 0.08)" }}>
            © 2024 Saifullah Umar. All rights reserved. Built with passion for AI & ML.
          </div>
        </div>
      </footer>
    </div>
  );
}
