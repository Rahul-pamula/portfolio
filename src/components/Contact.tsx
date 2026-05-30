import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Terminal } from 'lucide-react';
import rahulImage from '../assets/rahul.png';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "pamularahul123@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - CTA Text & CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Available for projects</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Let’s build something impactful together.
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed font-normal">
              Whether you are looking to audit an existing backend database, integrate AI extraction models, or build a scalable platform from the ground up—get in touch today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center">
              {/* Primary Email CTA */}
              <a
                href={`mailto:${emailAddress}?subject=Let's%20Work%20Together`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-premium text-white font-bold text-sm hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 active:scale-[0.98]"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-semibold">Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Links */}
            <div className="flex gap-6 items-center pt-8 border-t border-slate-800/60 max-w-sm">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Connect:</span>
              <a 
                href="https://linkedin.com/in/rahul-pamula" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Linkedin className="w-4.5 h-4.5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Rahul-pamula" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Github className="w-4.5 h-4.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Premium Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full aspect-square rounded-2xl p-2.5 bg-slate-850 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Colored ambient glow behind the card border */}
              <div className="absolute inset-0 bg-gradient-premium opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700/50">
                <img 
                  src={rahulImage} 
                  alt="Rahul Pamula Portrait" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="border-t border-slate-850 mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Rahul Pamula. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              FastAPI / NLP Stack
            </span>
            <span>Based in Telangana, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
