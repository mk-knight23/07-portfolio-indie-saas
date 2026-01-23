import { motion } from 'framer-motion';
import { Cpu, Wind, Code2, Rocket, Globe, Shield, Terminal, Zap, Layers, Boxes, Activity, Database, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TECH_STACK = [
    { name: "React 18", icon: <Activity className="w-5 h-5 text-[#61DAFB]" />, desc: "Component architecture for scale" },
    { name: "TypeScript", icon: <Shield className="w-5 h-5 text-[#3178C6]" />, desc: "Type-safe development at speed" },
    { name: "Vite 5", icon: <Zap className="w-5 h-5 text-[#646CFF]" />, desc: "Next-gen front-end tooling" },
    { name: "Tailwind CSS", icon: <Wind className="w-5 h-5 text-[#06B6D4]" />, desc: "Utility-first performance styling" }
];

export default function App() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen circuit-bg selection:bg-brand selection:text-black">
            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/10 blur-[150px] rounded-full" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-24 border-b border-white/5 bg-slate-950/20 backdrop-blur-3xl z-50 px-8">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand/20 border border-brand/40 rounded-xl flex items-center justify-center text-brand">
                            <Boxes className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white uppercase tracking-tighter">Stack<span className="text-brand">Point</span></h1>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Starter Kit</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        {['Architecture', 'Components', 'Performance', 'Docs'].map((item) => (
                            <a key={item} href="#" className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-brand transition-all">{item}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Github className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
                        <button className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand transition-all shadow-xl shadow-brand/10">
                            Clone Template
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-40 pb-24 max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <section>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 bg-brand/5 border border-brand/20 rounded-full text-[10px] font-black uppercase text-brand tracking-[0.3em] mb-8"
                        >
                            <Rocket className="w-4 h-4 animate-bounce" /> Optimized for Production
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-10"
                        >
                            THE CORE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500 italic">FOUNDATION</span> <br /> OF MODERN APPS.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl mb-12"
                        >
                            A curated selection of world-class tools, pre-configured for speed, security, and developer happiness. Don't waste time on boilerplate.
                        </motion.p>
                        <div className="flex flex-wrap gap-6">
                            <button className="px-10 py-4 bg-brand text-black font-black text-xs uppercase tracking-widest rounded-2xl flex items-center gap-3 group">
                                Get Started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-slate-500">
                                <Terminal className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">npx create-stackpoint@latest</span>
                            </div>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-2 gap-6">
                        {TECH_STACK.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="neo-card flex flex-col justify-between group cursor-help h-64 overflow-hidden relative"
                            >
                                {hoveredIndex === i && (
                                    <motion.div
                                        layoutId="glow"
                                        className="absolute inset-0 bg-brand/5 blur-2xl -z-10"
                                    />
                                )}
                                <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:border-brand/40 transition-colors">
                                    {tech.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand transition-colors">{tech.name}</h3>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{tech.desc}</p>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-4 h-4 text-brand" />
                                </div>
                            </motion.div>
                        ))}
                    </section>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-12 mt-32 border-t border-white/5 pt-24">
                    {[
                        { title: "Modular Architecture", desc: "Easily swap or extend services with our built-in provider registry and adapter patterns.", icon: <Layers className="w-8 h-8 text-brand" /> },
                        { title: "Universal Deployment", desc: "Optimized build pipelines for Vercel, Netlify, or any modern edge hosting platform out-of-the-box.", icon: <Globe className="w-8 h-8 text-brand" /> },
                        { title: "Typed Persistence", desc: "Ready-to-use Prisma or Firebase adapters for reliable, type-safe data management flows.", icon: <Database className="w-8 h-8 text-brand" /> }
                    ].map((f, i) => (
                        <div key={i} className="group">
                            <div className="mb-8 p-4 bg-brand/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-4 italic">{f.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-8 mt-40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-4 h-4 text-brand" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">StackPoint Advanced Core</span>
                    </div>
                    <div className="flex gap-12">
                        {['Twitter', 'Discord', 'Github', 'Status'].map(m => (
                            <a key={m} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand transition-all">{m}</a>
                        ))}
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.5em]">© 2026 STACKPOINT // ADVANCED • 29/30 DISPATCHED</p>
                </div>
            </footer>
        </div>
    );
}
