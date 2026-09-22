import { Linkedin, Mail, ArrowRight } from 'lucide-react';

export const ConnectSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">Connect</h2>
        <p className="text-sm text-text-secondary">Let's discuss opportunities, collaborations, or just talk tech.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LinkedIn Card */}
        <a 
          href="https://linkedin.com/in/rahul-pamula" 
          target="_blank" 
          rel="noreferrer"
          className="group flex flex-col justify-between p-6 rounded-xl border border-border/50 bg-surface-elevated/50 hover:bg-surface-elevated hover:border-[#0A66C2]/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
            <Linkedin size={80} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#0A66C2] rounded-lg text-white shadow-lg shadow-[#0A66C2]/20">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-lg">LinkedIn</h3>
              <p className="text-sm text-text-secondary">Professional Network</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm font-medium text-[#0A66C2]">
            <span>Connect with me</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Email Card */}
        <a 
          href="mailto:pamularahul123@gmail.com" 
          className="group flex flex-col justify-between p-6 rounded-xl border border-border/50 bg-surface-elevated/50 hover:bg-surface-elevated hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
            <Mail size={80} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-500 rounded-lg text-white shadow-lg shadow-emerald-500/20">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-lg">Email</h3>
              <p className="text-sm text-text-secondary">pamularahul123@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm font-medium text-emerald-500">
            <span>Send me a message</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  );
};
