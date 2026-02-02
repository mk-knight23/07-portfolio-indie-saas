import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Rocket, Code2, Globe, Zap, Star, Heart, ArrowUpRight, Github, Linkedin, Mail, Phone,
    ExternalLink, TrendingUp, Users, Layers, Sparkles, Terminal, Palette, Gamepad2,
    Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Lock, FileText, ChefHat, Compass
} from 'lucide-react';

// Top 8 Featured Projects for Indie SaaS lens
const featuredProjects = [
    {
        id: 'ai-vibe',
        name: 'AI-VIBE-ECOSYSTEM',
        tagline: 'Multi-agent AI platform for developers',
        description: 'A suite of AI-powered tools including Automation, CLI, ChatWeb, and WebBuilder. Built for solopreneurs who want to ship faster.',
        tech: ['React', 'TypeScript', 'Node.js', 'AI/LLM'],
        category: 'Platform',
        status: 'In Development',
        icon: Zap,
        color: 'from-amber-400 to-orange-500',
        github: 'https://github.com/mk-knight23'
    },
    {
        id: 'quizflow',
        name: 'QuizFlow PDF Generator',
        tagline: 'Turn PDFs into interactive quizzes',
        description: 'Upload any PDF and generate AI-powered quizzes instantly. Perfect for educators and self-learners.',
        tech: ['React', 'PDF.js', 'OpenAI'],
        category: 'SaaS Tool',
        status: 'Live',
        icon: FileText,
        color: 'from-emerald-400 to-teal-500',
        github: 'https://github.com/mk-knight23/tool-quizflow-pdf-quiz-generator'
    },
    {
        id: 'vaultpass',
        name: 'VaultPass',
        tagline: 'Secure password generator',
        description: 'Military-grade password generation with entropy analysis. No data leaves your browser.',
        tech: ['JavaScript', 'Web Crypto API'],
        category: 'Security Tool',
        status: 'Live',
        icon: Lock,
        color: 'from-violet-400 to-purple-500',
        github: 'https://github.com/mk-knight23/tool-vaultpass-secure-password-generator'
    },
    {
        id: 'viral-creator',
        name: 'Viral Creator',
        tagline: 'Content creation toolkit',
        description: 'Tools and templates for creating viral social media content. Built for creators, by a creator.',
        tech: ['React', 'Canvas API', 'Tailwind'],
        category: 'Creator Tool',
        status: 'Live',
        icon: Sparkles,
        color: 'from-pink-400 to-rose-500',
        github: 'https://github.com/mk-knight23/web-viral-creator'
    },
    {
        id: 'career-navigator',
        name: 'Career Navigator',
        tagline: 'AI-powered career guidance',
        description: 'Personalized career roadmaps based on your skills and market trends.',
        tech: ['React', 'AI Integration', 'Charts'],
        category: 'Web App',
        status: 'Live',
        icon: Compass,
        color: 'from-blue-400 to-indigo-500',
        github: 'https://github.com/mk-knight23/web-career-navigator'
    },
    {
        id: 'culinary-discovery',
        name: 'Culinary Discovery',
        tagline: 'Recipe exploration platform',
        description: 'Discover recipes from around the world with smart filtering and meal planning.',
        tech: ['React', 'API Integration', 'PWA'],
        category: 'Web App',
        status: 'Live',
        icon: ChefHat,
        color: 'from-orange-400 to-amber-500',
        github: 'https://github.com/mk-knight23/web-culinary-discovery'
    },
    {
        id: 'flux-arcade',
        name: 'Flux Arcade',
        tagline: 'Browser-based gaming hub',
        description: 'Collection of addictive mini-games built with modern web tech. No installs, just play.',
        tech: ['Canvas', 'TypeScript', 'Game Logic'],
        category: 'Game',
        status: 'Live',
        icon: Gamepad2,
        color: 'from-cyan-400 to-blue-500',
        github: 'https://github.com/mk-knight23/game-flux-arcade'
    },
    {
        id: 'portfolio',
        name: 'This Portfolio',
        tagline: 'Indie SaaS founder showcase',
        description: 'You are here. Built to demonstrate that I can ship polished products fast.',
        tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
        category: 'Portfolio',
        status: 'Live',
        icon: Rocket,
        color: 'from-amber-500 to-orange-500',
        github: 'https://github.com/mk-knight23/07-portfolio-indie-saas'
    }
];

// All 60 projects organized by category
const allProjects = {
    portfolios: [
        { name: 'DevTools Portfolio', desc: 'Terminal-inspired developer portfolio', tech: 'Vite + React + TS' },
        { name: 'Fullstack Portfolio', desc: 'Product-focused SaaS showcase', tech: 'Next.js + React + TS' },
        { name: 'Frontend Portfolio', desc: 'Motion-first visual experience', tech: 'Vite + React + TS' },
        { name: 'Backend Portfolio', desc: 'Editorial text-dominant design', tech: 'Node.js + Express' },
        { name: 'Frontend AI Portfolio', desc: 'Futuristic AI lab aesthetic', tech: 'Next.js + React + TS' },
        { name: 'Senior Frontend Portfolio', desc: 'Swiss minimal design', tech: 'Next.js + React + TS' },
        { name: 'Indie SaaS Portfolio', desc: 'This site — authentic indie hacker', tech: 'React + Vite + Tailwind' },
        { name: 'AI Automation Portfolio', desc: 'Systems flow visualization', tech: 'Next.js + React + TS' }
    ],
    webApps: [
        { name: 'Geographic Explorer', desc: 'Interactive map exploration', tech: 'React + Map APIs' },
        { name: 'Time Display', desc: 'Beautiful timezone visualizer', tech: 'React + Canvas' },
        { name: 'Keyboard Practice', desc: 'Typing speed trainer', tech: 'React + TypeScript' },
        { name: 'Editorial Blog', desc: 'Content-focused blog platform', tech: 'Next.js + MDX' },
        { name: 'Brutalist Content', desc: 'Raw, honest web design', tech: 'HTML + CSS' },
        { name: 'AI Research', desc: 'AI paper discovery tool', tech: 'React + AI APIs' },
        { name: 'Luxury Boutique', desc: 'High-end e-commerce UI', tech: 'React + Tailwind' },
        { name: 'Editorial Layouts', desc: 'Magazine-style layouts', tech: 'React + Grid' },
        { name: 'Culinary Discovery', desc: 'Recipe exploration platform', tech: 'React + PWA' },
        { name: 'Atmospheric Dashboard', desc: 'Weather + mood dashboard', tech: 'Angular + APIs' },
        { name: 'Viral Creator', desc: 'Content creation toolkit', tech: 'React + Canvas' },
        { name: 'Career Navigator', desc: 'AI career guidance', tech: 'React + AI' },
        { name: 'Enterprise Input', desc: 'Form validation system', tech: 'React + Validation' },
        { name: 'Professional Showcase', desc: 'Portfolio template', tech: 'React + Animation' },
        { name: 'Financial Printing', desc: 'Invoice generator', tech: 'React + PDF' },
        { name: 'Sketch Studio', desc: 'Drawing application', tech: 'Canvas + React' }
    ],
    games: [
        { name: 'Neon Highway', desc: 'Retro racing game', tech: 'Canvas + JS' },
        { name: 'Retro Vault', desc: 'Classic arcade collection', tech: 'React + Canvas' },
        { name: 'World Net', desc: 'Geography puzzle game', tech: 'React + SVG' },
        { name: 'Squid Net', desc: 'Strategy survival game', tech: 'Canvas + TS' },
        { name: 'Snake Net', desc: 'Modern snake game', tech: 'React + Hooks' },
        { name: 'Dragon Surge', desc: 'Fantasy RPG elements', tech: 'Canvas + JS' },
        { name: 'Maze Net', desc: 'Procedural maze generator', tech: 'React + Algorithms' },
        { name: 'Flux Arcade', desc: 'Gaming hub platform', tech: 'TypeScript + Canvas' },
        { name: 'Aptitude Nexus', desc: 'Brain training games', tech: 'React + PWA' },
        { name: 'Sigma Nexus', desc: 'Strategy puzzle collection', tech: 'React + State' }
    ],
    tools: [
        { name: 'QuizFlow PDF', desc: 'PDF to quiz generator', tech: 'React + PDF.js' },
        { name: 'VaultPass', desc: 'Password generator', tech: 'Web Crypto API' },
        { name: 'Text to Speech', desc: 'Voice synthesis tool', tech: 'Web Speech API' },
        { name: 'Firebase File Uploader', desc: 'Cloud storage interface', tech: 'Firebase + React' },
        { name: 'Firebase Image Uploader', desc: 'Image management tool', tech: 'Firebase + React' },
        { name: 'React Image Uploader', desc: 'Client-side image handling', tech: 'React + Hooks' },
        { name: 'Firebase Auth', desc: 'Authentication system', tech: 'Firebase Auth' },
        { name: 'Facebook Login UI', desc: 'OAuth interface clone', tech: 'React + CSS' },
        { name: 'Agency Website Clone', desc: 'Landing page recreation', tech: 'HTML + CSS' },
        { name: 'GitHub Desktop Guide', desc: 'Git tutorial app', tech: 'React + MDX' }
    ],
    starters: [
        { name: 'React Vercel Starter', desc: 'Deploy-ready React template', tech: 'React + Vercel' },
        { name: 'Ionic React Starter', desc: 'Mobile app foundation', tech: 'Ionic + React' },
        { name: 'Django Starter', desc: 'Python web framework', tech: 'Django + Python' },
        { name: 'Flask Starter', desc: 'Lightweight Python backend', tech: 'Flask + Python' },
        { name: 'JAMstack Blog', desc: 'Static site generator', tech: '11ty + Netlify' },
        { name: 'React Boilerplate', desc: 'Production-ready setup', tech: 'React + Webpack' },
        { name: 'CodeSandbox Starter', desc: 'Online IDE template', tech: 'React + CSB' },
        { name: 'Hugo Blog', desc: 'Fast static generator', tech: 'Hugo + Go' },
        { name: 'Docusaurus Docs', desc: 'Documentation site', tech: 'Docusaurus + React' },
        { name: 'Gatsby Blog', desc: 'GraphQL-powered blog', tech: 'Gatsby + React' },
        { name: 'Angular Web', desc: 'Enterprise starter', tech: 'Angular + TS' },
        { name: 'Electron Desktop', desc: 'Cross-platform desktop', tech: 'Electron + React' },
        { name: 'Python Practice', desc: 'Learning exercises', tech: 'Python' },
        { name: 'Python Examples', desc: 'Code snippets collection', tech: 'Python' },
        { name: 'Repo Demo', desc: 'Git showcase project', tech: 'Git + Markdown' },
        { name: 'CADWork Internship', desc: 'Engineering project', tech: 'CAD + Documentation' }
    ]
};

const skills = {
    'Product': ['MVP Development', 'User Research', 'Growth Hacking', 'Monetization', 'Analytics'],
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    'Backend': ['Node.js', 'Python', 'Firebase', 'Supabase', 'PostgreSQL'],
    'AI/ML': ['LLM Integration', 'OpenAI API', 'Prompt Engineering', 'Agent Systems']
};

const buildInPublicMetrics = [
    { label: 'Projects Shipped', value: '60+', icon: Rocket, note: 'And counting' },
    { label: 'Lines of Code', value: '100K+', icon: Code2, note: 'Written this year' },
    { label: 'Coffees Consumed', value: '∞', icon: Heart, note: 'Essential fuel' },
    { label: 'Late Nights', value: 'Many', icon: Star, note: 'Worth every one' }
];

export default function App() {
    const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/90 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-serif font-bold text-xl text-stone-800">KM</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {['Story', 'Products', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-stone-600 hover:text-amber-600 font-medium transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <a
                        href="https://github.com/mk-knight23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                        <Github className="w-5 h-5 text-stone-600" />
                    </a>
                </div>
            </nav>

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Building in Public — Hyderabad, India
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
                            Indie founder
                            <br />
                            <span className="scribble-underline">shipping products</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl">
                            Hey, I'm Kazi. I build SaaS products and tools that solve real problems.
                            60+ projects shipped. Currently working on{' '}
                            <span className="font-semibold text-amber-700">AI-VIBE-ECOSYSTEM v2.0</span> —
                            a multi-agent platform for developers who want to ship faster.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#products" className="btn-primary">
                                See What I'm Building
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/mk-knight23" target="_blank" rel="noopener" className="btn-secondary">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Build in Public Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
                    >
                        {buildInPublicMetrics.map((metric, i) => (
                            <div key={metric.label} className="indie-card text-center">
                                <metric.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-stone-800">{metric.value}</div>
                                <div className="text-sm font-medium text-stone-600">{metric.label}</div>
                                <div className="text-xs text-stone-400 mt-1">{metric.note}</div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Story / About Section */}
                <section id="story" className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-divider mb-6"></div>
                            <h2 className="text-4xl font-bold text-stone-900 mb-6">The Story So Far</h2>
                            <div className="space-y-4 text-stone-600 leading-relaxed">
                                <p>
                                    I started coding because I wanted to build things that mattered.
                                    Not just tutorials or side projects — real products that real people could use.
                                </p>
                                <p>
                                    After joining <strong className="text-stone-800">Wipro</strong> as a Project Engineer,
                                    I realized the 9-to-5 wasn't enough. I wanted to create, to ship, to iterate in public.
                                    So I started building.
                                </p>
                                <p>
                                    60 projects later, I've learned that shipping beats perfection.
                                    Every project taught me something — about code, about users, about myself.
                                    Some failed. Some stuck. All moved me forward.
                                </p>
                                <p className="text-amber-700 font-medium">
                                    Now I'm focused on AI-powered developer tools that help others ship faster.
                                    Because the best products are built by people who understand the struggle.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="indie-card bg-gradient-to-br from-amber-100 to-orange-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                                        <Terminal className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-stone-800">Current Focus</div>
                                        <div className="text-sm text-stone-500">AI-VIBE-ECOSYSTEM v2.0</div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Multi-agent AI workflow orchestration',
                                        'CLI tool for AI-powered development',
                                        'Chat interface for agent management',
                                        'Web builder with AI assistance'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="indie-card mt-4 bg-white">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-stone-400" />
                                    <span className="text-sm text-stone-600">Hyderabad, India</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-stone-400" />
                                    <span className="text-sm text-stone-600">Project Engineer at Wipro</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Products Section */}
                <section id="products" className="bg-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="section-divider mx-auto mb-6"></div>
                            <h2 className="text-4xl font-bold text-stone-900 mb-4">Featured Products</h2>
                            <p className="text-stone-600 max-w-2xl mx-auto">
                                The 8 projects I'm most proud of. Each one solved a real problem,
                                taught me something new, and pushed me to be a better builder.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredProjects.map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="indie-card group cursor-pointer"
                                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                            <project.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className={`tag ${project.status === 'Live' ? 'tag-green' : 'tag-amber'}`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-amber-600 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-amber-700 font-medium text-sm mb-2">{project.tagline}</p>
                                    <p className="text-stone-600 text-sm mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tag tag-stone">{t}</span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-amber-600 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github className="w-4 h-4" />
                                        View on GitHub
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Projects Section */}
                <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="section-divider mx-auto mb-6"></div>
                        <h2 className="text-4xl font-bold text-stone-900 mb-4">All 60 Projects</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            Every project I've built, organized by category. Each one taught me something.
                            Some are polished. Some are experiments. All represent hours of learning.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Portfolios */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <Layers className="w-6 h-6 text-amber-500" />
                                Portfolios (8)
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {allProjects.portfolios.map((p, i) => (
                                    <div key={i} className="indie-card p-4">
                                        <div className="font-medium text-stone-800 mb-1">{p.name}</div>
                                        <div className="text-xs text-stone-500 mb-2">{p.desc}</div>
                                        <div className="tag tag-stone text-xs">{p.tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Web Apps */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-amber-500" />
                                Web Apps (16)
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {allProjects.webApps.map((p, i) => (
                                    <div key={i} className="indie-card p-4">
                                        <div className="font-medium text-stone-800 mb-1">{p.name}</div>
                                        <div className="text-xs text-stone-500 mb-2">{p.desc}</div>
                                        <div className="tag tag-stone text-xs">{p.tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Games */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <Gamepad2 className="w-6 h-6 text-amber-500" />
                                Games (10)
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {allProjects.games.map((p, i) => (
                                    <div key={i} className="indie-card p-4">
                                        <div className="font-medium text-stone-800 mb-1">{p.name}</div>
                                        <div className="text-xs text-stone-500 mb-2">{p.desc}</div>
                                        <div className="tag tag-stone text-xs">{p.tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-amber-500" />
                                Tools (10)
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {allProjects.tools.map((p, i) => (
                                    <div key={i} className="indie-card p-4">
                                        <div className="font-medium text-stone-800 mb-1">{p.name}</div>
                                        <div className="text-xs text-stone-500 mb-2">{p.desc}</div>
                                        <div className="tag tag-stone text-xs">{p.tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Starters */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-amber-500" />
                                Starters (16)
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {allProjects.starters.map((p, i) => (
                                    <div key={i} className="indie-card p-4">
                                        <div className="font-medium text-stone-800 mb-1">{p.name}</div>
                                        <div className="text-xs text-stone-500 mb-2">{p.desc}</div>
                                        <div className="tag tag-stone text-xs">{p.tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/mk-knight23?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <Github className="w-4 h-4" />
                            View All on GitHub
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="bg-stone-900 text-stone-100 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
                            <p className="text-stone-400 max-w-2xl mx-auto">
                                The tools and technologies I use to bring ideas to life.
                                Always learning, always shipping.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(skills).map(([category, skillList], i) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-stone-800 rounded-2xl p-6 border border-stone-700"
                                >
                                    <h3 className="text-lg font-bold text-amber-400 mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resume Section */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-divider mb-6"></div>
                        <h2 className="text-4xl font-bold text-stone-900 mb-12">Resume</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                {/* Experience */}
                                <div className="indie-card">
                                    <h3 className="text-lg font-bold text-stone-800 mb-6 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-amber-500" />
                                        Experience
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="border-l-2 border-amber-300 pl-6">
                                            <div className="flex flex-wrap justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-stone-800">Project Engineer (TURBO)</h4>
                                                <span className="text-sm text-stone-500">Jul 2022 – Present</span>
                                            </div>
                                            <p className="text-amber-700 font-medium mb-2">Wipro</p>
                                            <p className="text-stone-600 text-sm leading-relaxed">
                                                Building full-stack SaaS products and internal tools.
                                                Specialized in React, Next.js, and AI integration.
                                                Led development of multiple client projects from concept to deployment.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="indie-card">
                                    <h3 className="text-lg font-bold text-stone-800 mb-6 flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-amber-500" />
                                        Education
                                    </h3>
                                    <div className="border-l-2 border-amber-300 pl-6">
                                        <div className="flex flex-wrap justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-stone-800">B.Tech Computer Science</h4>
                                            <span className="text-sm text-stone-500">2022</span>
                                        </div>
                                        <p className="text-stone-600 text-sm">Focus on software engineering and web technologies</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <div className="indie-card bg-gradient-to-br from-amber-50 to-orange-50">
                                    <h3 className="font-bold text-stone-800 mb-4">Quick Facts</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-center gap-2 text-stone-600">
                                            <MapPin className="w-4 h-4 text-amber-500" />
                                            Hyderabad, India
                                        </li>
                                        <li className="flex items-center gap-2 text-stone-600">
                                            <Calendar className="w-4 h-4 text-amber-500" />
                                            3+ years shipping
                                        </li>
                                        <li className="flex items-center gap-2 text-stone-600">
                                            <Rocket className="w-4 h-4 text-amber-500" />
                                            60+ projects shipped
                                        </li>
                                    </ul>
                                </div>

                                <div className="indie-card">
                                    <h3 className="font-bold text-stone-800 mb-4">Connect</h3>
                                    <div className="space-y-3">
                                        <a href="https://github.com/mk-knight23" target="_blank" rel="noopener"
                                            className="flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors">
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">github.com/mk-knight23</span>
                                        </a>
                                        <a href="https://linkedin.com/in/kazi-musharraf" target="_blank" rel="noopener"
                                            className="flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                            <span className="text-sm">linkedin.com/in/kazi-musharraf</span>
                                        </a>
                                        <a href="mailto:mk.knight970@gmail.com"
                                            className="flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors">
                                            <Mail className="w-4 h-4" />
                                            <span className="text-sm">mk.knight970@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="indie-card bg-gradient-to-br from-amber-100 to-orange-50 text-center py-16"
                    >
                        <h2 className="text-4xl font-bold text-stone-900 mb-4">Let's Build Together</h2>
                        <p className="text-stone-600 max-w-xl mx-auto mb-8">
                            Have an idea? Want to collaborate? Or just want to chat about indie hacking?
                            I'm always open to interesting conversations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:mk.knight970@gmail.com" className="btn-primary">
                                <Mail className="w-5 h-5" />
                                Send Email
                            </a>
                            <a href="https://github.com/mk-knight23" target="_blank" rel="noopener" className="btn-secondary">
                                <Github className="w-5 h-5" />
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/kazi-musharraf" target="_blank" rel="noopener" className="btn-secondary">
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                            <a href="tel:+919765490536" className="btn-secondary">
                                <Phone className="w-5 h-5" />
                                Call
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-stone-200 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-stone-500 text-sm">
                        © 2025 Kazi Musharraf. Built with React, Vite, and lots of coffee.
                    </p>
                    <p className="text-stone-400 text-sm">
                        Shipping products from Hyderabad, India
                    </p>
                </div>
            </footer>
        </div>
    );
}
