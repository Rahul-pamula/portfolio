import { GraduationCap, Camera, BookOpen, Music, Map, Coffee, Code2, GitBranch, Moon } from 'lucide-react';

export const PersonalIdentity = () => {
  return (
    <div className="flex flex-col gap-8 h-full justify-between">
      {/* Quote Section */}
      <div className="flex flex-col items-start justify-center px-2 pt-2">
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            Beyond the Code
          </h3>
          <Moon size={14} className="text-amber-200/50" />
        </div>
        <p className="text-[19px] xl:text-[21px] font-serif italic text-white font-medium leading-[1.55] drop-shadow-md">
          "My experiences<br />
          are the letters shared by<br />
          My pen 🖊️"
        </p>
        <p className="mt-4 text-sm font-medium text-amber-200/80 tracking-wide">
          Rahul Pamula ✨
        </p>
      </div>

      <div className="h-px w-full bg-white/5 my-0"></div>

      {/* Things I Love Section */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-2">
          Things I Love
        </h3>
        
        <div className="flex flex-col gap-4">
          {/* 01 - Teaching */}
          <div className="group flex items-start gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <div className="mt-0.5 text-amber-100/60 group-hover:text-amber-400 transition-colors duration-300">
              <GraduationCap size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">Teaching</span>
              <p className="text-xs text-white/50 leading-snug group-hover:text-white/70 transition-colors max-w-[200px]">
                Sharing knowledge and seeing others grow
              </p>
            </div>
          </div>

          {/* 02 - Shadow Photography */}
          <div className="group flex items-start gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <div className="mt-0.5 text-amber-100/60 group-hover:text-amber-400 transition-colors duration-300">
              <Camera size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">Shadow Photography</span>
              <p className="text-xs text-white/50 leading-snug group-hover:text-white/70 transition-colors max-w-[200px]">
                Finding stories in simple shadows
              </p>
            </div>
          </div>

          {/* 03 - Reading */}
          <div className="group flex items-start gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <div className="mt-0.5 text-amber-100/60 group-hover:text-amber-400 transition-colors duration-300">
              <BookOpen size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">Reading</span>
              <p className="text-xs text-white/50 leading-snug group-hover:text-white/70 transition-colors max-w-[200px]">
                New perspectives every time
              </p>
            </div>
          </div>

          {/* 04 - Music */}
          <div className="group flex items-start gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <div className="mt-0.5 text-amber-100/60 group-hover:text-amber-400 transition-colors duration-300">
              <Music size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">Music</span>
              <p className="text-xs text-white/50 leading-snug group-hover:text-white/70 transition-colors max-w-[200px]">
                Better thoughts on repeat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/5 my-0"></div>

      {/* Also Find Me Doing Section */}
      <div className="flex flex-col gap-5 pb-4">
        <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-2">
          Also Find Me Doing
        </h3>
        
        <div className="grid grid-cols-4 gap-2">
          {/* Exploring */}
          <div className="group flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <Map size={18} strokeWidth={1.5} className="text-amber-100/60 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-semibold text-white/80 group-hover:text-white transition-colors">Exploring</span>
              <span className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">New places</span>
            </div>
          </div>

          {/* Good Coffee */}
          <div className="group flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <Coffee size={18} strokeWidth={1.5} className="text-amber-100/60 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-semibold text-white/80 group-hover:text-white transition-colors leading-tight">Good Coffee</span>
              <span className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">Always welcome</span>
            </div>
          </div>

          {/* Building */}
          <div className="group flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <Code2 size={18} strokeWidth={1.5} className="text-amber-100/60 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-semibold text-white/80 group-hover:text-white transition-colors">Building</span>
              <span className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors leading-tight">Something useful</span>
            </div>
          </div>

          {/* Open Source */}
          <div className="group flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/5 cursor-pointer">
            <GitBranch size={18} strokeWidth={1.5} className="text-amber-100/60 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-semibold text-white/80 group-hover:text-white transition-colors leading-tight">Open Source</span>
              <span className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">Giving back</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
