import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Github,
  Linkedin,
  Menu,
  MoveDown,
  Plus,
  Sparkles,
  X,
} from 'lucide-react';

type ProjectStatus = 'completed' | 'in-progress' | 'empty';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  tone: string;
  status: ProjectStatus;
  href?: string;
  image?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Movie Recommender System',
    description: 'Recommends movies similar to a user\'s selected movie using machine learning and content-based filtering.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    tone: 'project-sage',
    status: 'completed',
    href: 'https://movie-recommender-manavbidlan.streamlit.app/',
    image: '/images/cards/Screenshot_2026-08-17_143604.png',
  },
  {
    number: '02',
    title: 'Sentiment Analysis',
    description: 'Analyzes text and predicts whether the sentiment is positive, negative, or neutral.',
    tags: ['Python', 'NLP', 'Scikit-learn'],
    tone: 'project-blue',
    status: 'completed',
    href: 'https://sentiment-analysis-manavbidlan.streamlit.app/',
    image: '/images/cards/Screenshot_2026-08-17_143428.png',
  },
  {
    number: '03',
    title: 'Facial Expression Recognition',
    description: 'A real-time facial expression recognition system that analyzes uploaded photos and webcam snapshots using EfficientNetV2, fine-tuned on RAF-DB.',
    tags: ['Python', 'EfficientNetV2', 'OpenCV', 'Streamlit'],
    tone: 'project-amber',
    status: 'completed',
    href: 'https://facial-expression-recognition-manavbidlan.streamlit.app/',
  },
  { number: '04', title: '', description: '', tags: [], tone: 'project-rose', status: 'empty' },
  { number: '05', title: '', description: '', tags: [], tone: 'project-slate', status: 'empty' },
];

const capabilities = [
  { label: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'EfficientNetV2', 'NLP'] },
  { label: 'Programming & Data', items: ['Python', 'Pandas', 'NumPy', 'SQL'] },
  { label: 'Tools & Learning', items: ['Git', 'Jupyter', 'OpenCV', 'Streamlit'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const openForm = () => {
    setFormOpen(true);
    setSubmitted(false);
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Go to top"><span className="brand-mark">M</span><span>MANAV<span className="brand-dot">.</span>BIDLAN</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#stack" onClick={closeMenu}>Stack</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); closeMenu(); openForm(); }}>Get in touch <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> B.TECH CSE / ML BUILDER</p>
            <h1>From data to<br /><span className="gradient-text">predictions.</span></h1>
            <p className="hero-intro">I'm a B.Tech CSE student building my way into machine learning through hands-on projects and constant experimentation. I like taking an idea, understanding the problem behind it, and seeing what I can build from there.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16} /></a><a className="button button-quiet" href="#contact" onClick={(e) => { e.preventDefault(); openForm(); }}>Get in touch</a></div>
            <div className="hero-meta"><span>Machine Learning &amp; AI</span><span className="meta-line" /><span>Always building</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay" aria-label="Decorative neural network illustration">
            <div className="visual-glow" /><div className="orbit orbit-one"><span /></div><div className="orbit orbit-two"><span /></div>
            <div className="neural-card"><div className="window-bar"><i /><i /><i /><span>model.py</span></div><div className="code-block"><span className="code-muted">01</span><span><b>class</b> Model:</span><span className="code-muted">02</span><span>&nbsp;&nbsp;<b>def</b> <em>train</em>(self, data):</span><span className="code-muted">03</span><span>&nbsp;&nbsp;&nbsp;&nbsp;weights = self.fit(data)</span><span className="code-muted">04</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> predict(weights)</span><span className="code-muted">05</span><span className="cursor">_</span></div><div className="card-status"><span className="status-pulse" /> training <span>in progress</span></div></div>
            <div className="floating-chip chip-top"><BrainCircuit size={16} /> machine learning</div><div className="floating-chip chip-bottom"><Sparkles size={15} /> curious by default</div>
          </div>
          <a className="scroll-cue" href="#work"><MoveDown size={15} /> scroll to explore</a>
        </section>

        <section id="work" className="section-wrap section-space">
          <div className="section-heading reveal"><div><p className="eyebrow">SELECTED WORK <span>／ PROJECTS</span></p><h2>Built with intent.</h2></div><p className="section-note">A few things I've made while exploring the space between data, models, and useful software.</p></div>
          <div className="project-grid">{projects.map((project) => {
            const inner = project.status === 'empty' ? <EmptyProjectArt number={project.number} /> : <><div className={`project-art ${project.tone}`}>{project.image ? <img className="project-image" src={project.image} alt="" /> : <><div className="art-lines" /><div className="art-orb" /></>}<span className="project-number">{project.number}</span>{project.status === 'in-progress' && <span className="status-badge">In Progress</span>}<ArrowUpRight className="project-arrow" size={20} /></div><div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></>;
            return project.href ? <a className="project-card project-card-link reveal" href={project.href} target="_blank" rel="noopener noreferrer" key={project.number}>{inner}</a> : <article className="project-card reveal" key={project.number}>{inner}</article>;
          })}</div>
        </section>

        <section id="about" className="section-wrap section-space about-section"><div className="about-layout"><div className="reveal"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious by nature.<br /><span className="gradient-text">Precise by practice.</span></h2><p className="about-copy">I'm a B.Tech Computer Science student focused on Machine Learning and AI. I learn best by building — taking an idea, understanding the problem behind it, and working through it until something works. So far that's meant a content-based movie recommender, a sentiment analysis model, and a facial expression recognition system built with EfficientNetV2 and fine-tuned on RAF-DB.</p><p className="about-copy">I recently completed Andrew Ng's Machine Learning Specialization, which gave me a stronger foundation to keep building on. I'm not trying to know everything upfront — I'm trying to understand enough of each problem to make something useful, then learn the rest along the way.Recently, that meant computer vision. I'm continuing to explore what comes next.</p><a className="text-link" href="#contact" onClick={(e) => { e.preventDefault(); openForm(); }}>Let's build something meaningful <ArrowUpRight size={15} /></a></div><div className="stats-grid reveal reveal-delay"><div className="stat-card"><strong>3</strong><span>Projects Completed</span></div><div className="stat-card"><strong>1</strong><span>ML Specialization</span></div><div className="stat-card"><strong className="stat-text">B.Tech</strong><span>CSE Student</span></div><div className="stat-card stat-card-accent"><Code2 size={21} /><span>Always Learning</span></div></div></div></section>

        <section id="stack" className="section-wrap section-space stack-section"><div className="section-heading reveal"><div><p className="eyebrow">THE TOOLKIT</p><h2>My working stack.</h2></div><p className="section-note">The tools change. The principles stay: understand the problem, build something, learn the rest.</p></div><div className="capability-grid">{capabilities.map((capability, index) => <div className="capability reveal" key={capability.label}><span className="capability-index">0{index + 1}</span><h3>{capability.label}</h3><ul>{capability.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul></div>)}</div></section>

        <section id="contact" className="contact-section section-wrap reveal">
          <div className="contact-inner">
            <p className="eyebrow">HAVE A GOOD PROBLEM?</p>
            <h2>Let's make it<br /><span className="gradient-text">interesting.</span></h2>
            <p>Whether you have a project idea, a question about ML, or just want to talk shop — my inbox is open.</p>
            {formOpen ? (
              <div className="contact-form" ref={formRef}>
                {submitted ? (
                  <div className="contact-success"><Check size={18} /><span>Thanks — your message is on its way. I'll reply soon.</span></div>
                ) : (
                  <form
                    className="form-stack"
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const form = e.currentTarget;

                      try {
                        await emailjs.sendForm(
                          import.meta.env.VITE_EMAILJS_SERVICE_ID,
                          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                          form,
                          {
                            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                          }
                        );

                        setSubmitted(true);
                        form.reset();
                      } catch (error) {
                        console.error('EmailJS error:', error);
                        alert('Failed to send message. Please try again.');
                      }
                    }}
                  > 
                    <div className="form-field"><input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  /></div>
                    <div className="form-field"><input
                      type="email"
                      name="from_email"
                      required
                      placeholder="Email address"
                      autoComplete="email"
                    /></div>
                    <div className="form-field"><textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your idea or question"
                    ></textarea></div>
                    <button type="submit" className="button button-primary form-submit">Send message <ArrowUpRight size={16} /></button>
                  </form>
                )}
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">M</span><span>MANAV<span className="brand-dot">.</span>BIDLAN</span></a><span>Designed & built with curiosity.</span><div className="socials"><a href="https://github.com/Manav-bidlan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/manav-bidlan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></footer>
    </div>
  );
}

function EmptyProjectArt({ number }: { number: string }) {
  return (
    <>
      <div className="project-art project-empty">
        <span className="project-number">{number}</span>
        <div className="empty-icon"><Plus size={28} /></div>
      </div>
      <div className="project-content project-content-empty">
        <div>
          <h3 className="empty-title">Coming soon</h3>
          <p>A future project will live here. Check back as I keep building.</p>
        </div>
        <div className="tag-list"><span className="tag-placeholder">TBD</span></div>
      </div>
    </>
  );
}

export default App;
