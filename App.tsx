import React, { useState, useEffect } from 'react';
import HeroCanvas from './components/HeroCanvas';
import BlueprintWrapper from './components/BlueprintWrapper';
import SkillsMarquee from './components/SkillsMarquee';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, EDUCATION, EXTRACURRICULAR } from './constants';
import { Mail, Github, MapPin, Phone, ExternalLink, Box, Terminal, Cpu, ChevronRight, Download, Crosshair } from 'lucide-react';

const TypewriterText = ({ text, delay = 50 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Reset when text changes
    
    const timer = setInterval(() => {
      // Use i + 1 because slice end is exclusive
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{displayedText}<span className="animate-pulse">_</span></span>;
};

const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState(0);
  const roles = ["Backend Developer", "Blockchain Architect", "Solidity Engineer", "Fullstack Builder"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-blueprint-900 grid-bg min-h-screen selection:bg-blueprint-200">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b-4 border-blueprint-600">
        <HeroCanvas />
        
        {/* HUD Elements */}
        <div className="absolute top-0 left-0 p-6 md:p-10 text-[10px] md:text-xs font-bold text-blueprint-600/60 hidden md:block">
            <div className="flex flex-col gap-1">
                <span>SYS.STATUS: ONLINE</span>
                <span>NET.LATENCY: 12ms</span>
                <span>SEC.LEVEL: MAX</span>
            </div>
        </div>
        <div className="absolute top-0 right-0 p-6 md:p-10 text-[10px] md:text-xs font-bold text-blueprint-600/60 hidden md:block text-right">
            <div className="flex flex-col gap-1">
                <span>COORDS: 23.8103° N, 90.4125° E</span>
                <span>LOC: DHAKA_HQ</span>
                <span>TIME: {new Date().toLocaleTimeString()}</span>
            </div>
        </div>

        {/* Decorative Crosshairs */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border-t border-l border-blueprint-600 opacity-50 hidden md:block"></div>
        <div className="absolute bottom-1/4 right-10 w-4 h-4 border-b border-r border-blueprint-600 opacity-50 hidden md:block"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
            
            {/* Main Command Console */}
            <div className="bg-white/70 backdrop-blur-md border border-blueprint-200 shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden group">
                
                {/* Scanner Line Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blueprint-400/20 animate-[float_4s_ease-in-out_infinite] pointer-events-none"></div>

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 border border-blueprint-600 bg-blueprint-50 px-3 py-1 mb-8 text-[10px] md:text-xs font-bold tracking-[0.3em] text-blueprint-700 uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Portfolio_V1.0.4
                </div>
                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-blueprint-900 leading-[0.9]">
                  MOSHEUR RAHMAN<br/><span className="text-blueprint-600 text-stroke">WOLIED</span>
                </h1>
                
                {/* Dynamic Role */}
                <div className="h-8 md:h-12 mb-8 text-lg md:text-2xl font-medium text-blueprint-700 flex justify-center items-center">
                   <span className="mr-2 opacity-50">&gt;</span>
                   <TypewriterText text={roles[activeRole]} key={activeRole} />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-xs border-y border-blueprint-200 py-6 max-w-3xl mx-auto opacity-80">
                    <div className="flex flex-col items-center border-r border-blueprint-200 last:border-0">
                        <span className="font-bold text-xl text-blueprint-600">4+</span>
                        <span className="uppercase tracking-wider opacity-60">Years Exp</span>
                    </div>
                    <div className="flex flex-col items-center border-r border-blueprint-200 md:last:border-0">
                        <span className="font-bold text-xl text-blueprint-600">15+</span>
                        <span className="uppercase tracking-wider opacity-60">Contracts</span>
                    </div>
                    <div className="flex flex-col items-center border-r border-blueprint-200 last:border-0">
                        <span className="font-bold text-xl text-blueprint-600">L2</span>
                        <span className="uppercase tracking-wider opacity-60">Specialist</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-xl text-blueprint-600">100%</span>
                        <span className="uppercase tracking-wider opacity-60">Uptime</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-bold">
                    <a href="#projects" className="group relative px-8 py-3 bg-blueprint-600 text-white overflow-hidden transition-all hover:bg-blueprint-700 shadow-[4px_4px_0px_0px_rgba(30,58,138,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        <span className="relative z-10 flex items-center">
                           INITIALIZE PROTOCOLS <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </span>
                        {/* Button Scan Effect */}
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[marquee_1s_ease-in-out]"></div>
                    </a>
                    
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-3 border-2 border-blueprint-600 text-blueprint-600 hover:bg-blueprint-50 transition-colors flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2" /> ESTABLISH UPLINK
                    </a>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blueprint-600"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blueprint-600"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blueprint-600"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blueprint-600"></div>
            </div>

            {/* Bottom Links */}
            <div className="mt-12 flex justify-center gap-8 text-blueprint-800/70">
                 <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center hover:text-blueprint-600 hover:scale-110 transition-all">
                    <Github className="w-5 h-5 mr-2" /> <span className="text-xs tracking-widest uppercase">Source</span>
                </a>
                <a href="#" className="flex items-center hover:text-blueprint-600 hover:scale-110 transition-all">
                    <Download className="w-5 h-5 mr-2" /> <span className="text-xs tracking-widest uppercase">Resume_V2.pdf</span>
                </a>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center opacity-50">
                <span className="text-[10px] tracking-widest mb-2">SCROLL_DOWN</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-blueprint-600 to-transparent"></div>
            </div>
        </div>
      </section>

      <SkillsMarquee />

      <main className="container mx-auto px-4 md:px-6 py-16 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN (Experience & Projects) */}
            <div className="lg:col-span-8 space-y-16">
                
                {/* EXPERIENCE */}
                <section id="experience">
                    <div className="flex items-center mb-8">
                        <Terminal className="w-6 h-6 mr-3 text-blueprint-600" />
                        <h2 className="text-2xl font-bold uppercase tracking-widest">Work Experience</h2>
                        <div className="flex-1 h-[1px] bg-blueprint-600 ml-4 opacity-30"></div>
                    </div>

                    <div className="space-y-6">
                        {EXPERIENCE.map((job, idx) => (
                            <BlueprintWrapper key={idx} id={`EXP_${idx + 1}`} title={job.company}>
                                <div className="flex flex-col md:flex-row justify-between mb-4 border-b border-dashed border-blueprint-600/30 pb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-blueprint-700">{job.role}</h3>
                                        <div className="text-sm font-bold text-blueprint-500 mt-1">{job.company}</div>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <div className="text-xs font-bold bg-blueprint-100 text-blueprint-800 px-2 py-1 inline-block">
                                            {job.period}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">{job.location}</div>
                                    </div>
                                </div>
                                <ul className="list-none space-y-3">
                                    {job.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start text-sm leading-relaxed text-gray-700">
                                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blueprint-600 flex-shrink-0"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </BlueprintWrapper>
                        ))}
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects">
                    <div className="flex items-center mb-8">
                        <Box className="w-6 h-6 mr-3 text-blueprint-600" />
                        <h2 className="text-2xl font-bold uppercase tracking-widest">Projects</h2>
                        <div className="flex-1 h-[1px] bg-blueprint-600 ml-4 opacity-30"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS.map((project, idx) => (
                            <BlueprintWrapper key={idx} id={`PRJ_${idx + 1}`} className="h-full flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-lg text-blueprint-800 group-hover:text-blueprint-600 transition-colors">{project.name}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-blueprint-400 hover:text-blueprint-600">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <span className="text-[10px] uppercase font-bold text-blueprint-500 border border-blueprint-200 px-1 py-0.5">
                                        {project.type}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="pt-4 border-t border-dashed border-blueprint-600/20">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, tIdx) => (
                                            <span key={tIdx} className="text-[10px] bg-white border border-blueprint-200 text-blueprint-600 px-2 py-1 font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </BlueprintWrapper>
                        ))}
                    </div>
                </section>

            </div>

            {/* RIGHT COLUMN (Education, Extra, Summary) */}
            <div className="lg:col-span-4 space-y-12">
                
                {/* EDUCATION */}
                <section>
                     <div className="flex items-center mb-6">
                        <Cpu className="w-5 h-5 mr-3 text-blueprint-600" />
                        <h2 className="text-xl font-bold uppercase tracking-widest">Education</h2>
                    </div>
                    <BlueprintWrapper id="EDU_01" title="UNIVERSITY">
                        <h3 className="font-bold text-lg">{EDUCATION.institution}</h3>
                        <p className="text-sm text-blueprint-600 mb-2">{EDUCATION.degree}</p>
                        <div className="text-xs text-gray-500 mb-4">{EDUCATION.period}</div>
                        <div className="flex justify-between items-center border-t border-blueprint-600/20 pt-3">
                            <span className="text-xs font-bold">CGPA</span>
                            <span className="font-bold text-blueprint-700 bg-blueprint-100 px-2 py-1">{EDUCATION.gpa}</span>
                        </div>
                    </BlueprintWrapper>
                </section>

                {/* EXTRA CURRICULAR */}
                <section>
                    <div className="flex items-center mb-6">
                        <Crosshair className="w-5 h-5 mr-3 text-blueprint-600" />
                        <h2 className="text-xl font-bold uppercase tracking-widest">Achievements</h2>
                    </div>
                    <div className="space-y-4">
                        {EXTRACURRICULAR.map((item, idx) => (
                            <div key={idx} className="bg-white border-l-4 border-blueprint-600 p-5 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-sm mb-2 flex items-center">
                                     {item.title}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                 {/* DECORATIVE BLOCK */}
                 <div className="border border-blueprint-600/20 p-6 text-center opacity-60 bg-white/50 backdrop-blur-sm">
                    <div className="grid grid-cols-4 gap-2 mb-4">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className={`h-1 bg-blueprint-600 ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-20'}`}></div>
                        ))}
                    </div>
                    <div className="font-mono text-[10px] space-y-1 text-left">
                        <div className="flex justify-between"><span>SYS.MEM:</span><span>64GB</span></div>
                        <div className="flex justify-between"><span>SWAP:</span><span>0%</span></div>
                        <div className="flex justify-between"><span>LOAD:</span><span>0.12</span></div>
                    </div>
                </div>

            </div>

        </div>
      </main>

      <footer className="border-t-4 border-blueprint-600 bg-white py-12 mt-12 relative overflow-hidden">
          {/* Footer Grid Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
              <div className="flex justify-center items-center gap-2 mb-6 text-blueprint-600">
                   <Box className="w-6 h-6 animate-pulse" />
              </div>
              <p className="text-sm font-bold tracking-widest text-blueprint-800 mb-2">
                  © {new Date().getFullYear()} MOSHEUR RAHMAN WOLIED
              </p>
              <p className="text-xs text-gray-500">
                  SECURE CONNECTION ESTABLISHED · ENCRYPTED VIA TLS 1.3
              </p>
          </div>
      </footer>
    </div>
  );
};

export default App;