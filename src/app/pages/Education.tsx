import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
    const [educationDetails, setEducationDetails] = useState<any[]>([]);

    useEffect(() => {
        fetch("/data/portfolio-data.json")
            .then((res) => res.json())
            .then((data) => setEducationDetails(data.education || []))
            .catch((err) => console.error("Error loading education data:", err));
    }, []);

    const getIconComponent = (iconName: string) => {
        const IconComp = (Icons as any)[iconName];
        return IconComp ? <IconComp size={22} /> : <Icons.GraduationCap size={22} />;
    };
    return (
        <div className="relative py-20 px-6 overflow-hidden">
            {/* Decorative localized glow orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #0891b2, transparent 70%)" }} />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>
                        Academic Journey
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">My Education</h1>
                    <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
                    <p className="text-gray-400 mt-5 max-w-lg mx-auto leading-relaxed">
                        A track record of dedication, scientific study, and evolving technical specialization in Artificial Intelligence.
                    </p>
                </motion.div>

                {/* Education flow container */}
                <div className="space-y-8 relative">
                    {/* Vertical connecting line */}
                    <div
                        className="absolute left-7 sm:left-1/2 top-4 bottom-4 w-0.5 transform -translate-x-1/2 hidden md:block"
                        style={{ background: "linear-gradient(to bottom, #7c3aed, #0891b2, #059669)" }}
                    />

                    {educationDetails.map((edu, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={edu.title}
                                className={`flex flex-col md:flex-row items-stretch justify-between w-full relative mb-12`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                {/* Visual Timeline Node */}
                                <div className="absolute left-7 sm:left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full z-20"
                                    style={{
                                        background: "#0c0a22",
                                        border: `2px solid ${edu.color}`,
                                        boxShadow: `0 0 15px ${edu.shadowColor}`,
                                        color: edu.color
                                    }}>
                                    {getIconComponent(edu.icon)}
                                </div>

                                {/* Left side card space (or offset for timeline balance) */}
                                <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-start order-2 md:order-1'}`}>
                                    {isEven && (
                                        <motion.div
                                            className="w-full p-6 sm:p-8 rounded-2xl cursor-default"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.03)",
                                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                                backdropFilter: "blur(12px)"
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                borderColor: edu.borderColor,
                                                boxShadow: `0 8px 30px ${edu.shadowColor}`
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: edu.badgeColor, color: edu.color }}>
                                                    {edu.type}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                                    <Calendar size={13} style={{ color: edu.color }} />
                                                    <span>{edu.duration}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-white text-xl font-bold mb-1 leading-normal">{edu.title}</h3>
                                            <p className="font-semibold text-sm mb-3" style={{ color: edu.color }}>{edu.institution}</p>

                                            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{edu.location}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: edu.color, boxShadow: `0 0 6px ${edu.color}` }} />
                                                <span className="text-xs font-semibold text-gray-300">{edu.status}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Center Gap spacer */}
                                <div className="w-16 hidden md:block order-2" />

                                {/* Right side card space (or offset for timeline balance) */}
                                <div className={`w-full md:w-[45%] flex ${!isEven ? 'md:justify-start' : 'md:justify-end order-1 md:order-2'}`}>
                                    {!isEven && (
                                        <motion.div
                                            className="w-full p-6 sm:p-8 rounded-2xl cursor-default"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.03)",
                                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                                backdropFilter: "blur(12px)"
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                borderColor: edu.borderColor,
                                                boxShadow: `0 8px 30px ${edu.shadowColor}`
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: edu.badgeColor, color: edu.color }}>
                                                    {edu.type}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                                    <Calendar size={13} style={{ color: edu.color }} />
                                                    <span>{edu.duration}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-white text-xl font-bold mb-1 leading-normal">{edu.title}</h3>
                                            <p className="font-semibold text-sm mb-3" style={{ color: edu.color }}>{edu.institution}</p>

                                            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{edu.location}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: edu.color, boxShadow: `0 0 6px ${edu.color}` }} />
                                                <span className="text-xs font-semibold text-gray-300">{edu.status}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
