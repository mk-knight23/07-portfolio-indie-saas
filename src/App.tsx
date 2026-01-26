import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Terminal, Code2, Globe, MessageSquare, Mail, Github, Linkedin,
    ExternalLink, CheckCircle2, Cpu, Layers, Zap, Shield, Grid, Box
} from 'lucide-react';

const vibeProducts = [
    { name: 'VIBE CLI', tagline: 'Multi-agent AI coding tool', icon: Terminal, status: 'In Development' },
    { name: 'VIBE VS Code', tagline: 'Multi-agent IDE assistant', icon: Code2, status: 'Planned' },
    { name: 'VIBE Web', tagline: 'Documentation hub', icon: Globe, status: 'Live' },
    { name: 'VIBE Chat', tagline: 'AI website builder', icon: MessageSquare, status: 'Planned' }
];

const selectedProjects = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', color: 'from-blue-500 to-cyan-500' },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', color: 'from-green-500 to-emerald-500' },
    { name: 'Meme Generator', category: 'Web', tech: 'React', color: 'from-yellow-500 to-orange-500' },
    { name: 'Mini Games', category: 'Game', tech: 'React', color: 'from-purple-500 to-pink-500' },
    { name: 'Portfolio Site', category: 'Web', tech: 'React', color: 'from-indigo-500 to-violet-500' },
    { name: 'Repo Browser', category: 'Tool', tech: 'TypeScript', color: 'from-red-500 to-rose-500' }
];

const skillsByCategory = {
    'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
    'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
    'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
    'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
};

export default function App() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Web', 'Game', 'Tool'];

    const filteredProjects = activeFilter === 'All'
        ? selectedProjects
        : selectedProjects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Background gradient */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <Grid className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-lg">Portfolio Gallery</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#vibe" className="text-sm text-gray-400 hover:text-white transition-colors">VIBE</a>
                        <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                        <a href="https://github.com/mk-knight23" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
                {/* Hero */}
                <section className="min-h-[60vh] flex items-center justify-center text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
                            AI Engineer & Indie Builder
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            MUSHARRAF <span className="text-gray-600">KAZI</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Building the <span className="text-indigo-400 font-medium">VIBE Ecosystem</span> —
                            a multi-product AI developer platform focused on AI-powered coding workflows,
                            multi-agent orchestration, and production-grade tooling.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
                                View Projects
                            </a>
                            <a href="#vibe" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors">
                                Explore VIBE
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-4 gap-4 mb-20">
                    {[
                        { value: '60+', label: 'Projects', icon: Box },
                        { value: '4', label: 'Products', icon: Grid },
                        { value: 'AI', label: 'Focus', icon: Cpu },
                        { value: 'India', label: 'Location', icon: Globe }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"
                        >
                            <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-3" />
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* About */}
                <section id="about" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 border border-white/10 rounded-3xl"
                    >
                        <h2 className="text-2xl font-bold mb-6">About</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-gray-400">
                            <p>
                                AI Engineer and Indie Product Builder specializing in <strong className="text-white">Agentic AI</strong>,
                                <strong className="text-white"> Developer Tools</strong>,
                                <strong className="text-white"> Multi-LLM Routing</strong>, and
                                <strong className="text-white"> SaaS Automation</strong>.
                            </p>
                            <p>
                                Building the <span className="text-indigo-400">VIBE Ecosystem</span> — a multi-product AI
                                developer platform focused on AI-powered coding workflows and production-grade tooling.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* VIBE Ecosystem */}
                <section id="vibe" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
                                Flagship Project
                            </span>
                            <h2 className="text-2xl font-bold">VIBE Ecosystem</h2>
                        </div>
                        <p className="text-gray-400 mb-8">Founder & AI Engineer — A multi-product AI developer platform</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {vibeProducts.map((product, i) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all group"
                                >
                                    <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4">
                                        <product.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <h3 className="font-semibold mb-1">{product.name}</h3>
                                    <p className="text-sm text-indigo-400 mb-2">{product.tagline}</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                        product.status === 'Live'
                                            ? 'bg-green-500/10 text-green-400'
                                            : 'bg-gray-700 text-gray-400'
                                    }`}>
                                        {product.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Technical Highlights */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                Technical Highlights
                            </h3>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-400">
                                {[
                                    'Hierarchical RAG (H-RAG) + Decision Agents',
                                    'Multi-provider LLM routing',
                                    '55-feature roadmap',
                                    'Monorepo strategy',
                                    'Security-first architecture'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-indigo-400">→</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Projects Gallery */}
                <section id="projects" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-8">Selected Projects</h2>

                        {/* Filter */}
                        <div className="flex gap-3 mb-8">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                        activeFilter === filter
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white/5 text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group cursor-pointer"
                                >
                                    {/* Visual Card */}
                                    <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} p-6 relative overflow-hidden mb-4`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                        <div className="relative z-10">
                                            <span className="text-xs font-medium px-2 py-1 bg-white/20 rounded-lg backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <Box className="w-12 h-12 text-white/30" />
                                        </div>
                                    </div>

                                    <div className="px-2">
                                        <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{project.tech}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://github.com/mk-knight23?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-8 text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            View all 60 projects <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>
                </section>

                {/* Skills */}
                <section id="skills" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {Object.entries(skillsByCategory).map(([category, skills], i) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {category.includes('AI') ? (
                                            <Cpu className="w-5 h-5 text-indigo-400" />
                                        ) : category.includes('Developer') ? (
                                            <Layers className="w-5 h-5 text-indigo-400" />
                                        ) : category.includes('LLM') ? (
                                            <Zap className="w-5 h-5 text-indigo-400" />
                                        ) : (
                                            <Shield className="w-5 h-5 text-indigo-400" />
                                        )}
                                        <h3 className="font-semibold">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-3xl text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
                            Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-sm">
                                <span className="text-gray-500">Location:</span>{' '}
                                <span className="text-white">India</span>
                            </span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-sm">
                                <span className="text-gray-500">Available:</span>{' '}
                                <span className="text-green-400">Remote & Hybrid</span>
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:mk.knight970@gmail.com" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors">
                                Email Me
                            </a>
                            <a href="https://github.com/mk-knight23" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; 2025 MUSHARRAF KAZI. All rights reserved.</p>
                    <p>Part of a 60-project portfolio ecosystem</p>
                </div>
            </footer>
        </div>
    );
}
