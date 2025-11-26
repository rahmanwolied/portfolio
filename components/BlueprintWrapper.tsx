import React, { ReactNode } from 'react';

interface BlueprintWrapperProps {
  children: ReactNode;
  title?: string;
  id?: string;
  className?: string;
}

const BlueprintWrapper: React.FC<BlueprintWrapperProps> = ({ children, title, id, className = "" }) => {
  return (
    <div className={`relative border border-blueprint-600/50 bg-white/90 backdrop-blur-sm p-6 md:p-8 my-8 transition-all duration-300 group hover:border-blueprint-500 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] hover:-translate-y-2 overflow-hidden ${className}`}>
      
      {/* Background Grid Pattern Reveal */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(rgba(37,99,235,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.2)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blueprint-400/20 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none z-0"></div>

      {/* Corner Markers - Expand on Hover */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blueprint-600 -translate-x-0.5 -translate-y-0.5 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-blueprint-500 z-10"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blueprint-600 translate-x-0.5 -translate-y-0.5 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-blueprint-500 z-10"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blueprint-600 -translate-x-0.5 translate-y-0.5 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-blueprint-500 z-10"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blueprint-600 translate-x-0.5 translate-y-0.5 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-blueprint-500 z-10"></div>

      {/* Decorative Lines - Extend on Hover */}
      <div className="absolute top-4 left-0 w-2 h-[1px] bg-blueprint-600 transition-all duration-300 group-hover:w-16 opacity-50 group-hover:opacity-100"></div>
      <div className="absolute top-4 right-0 w-2 h-[1px] bg-blueprint-600 transition-all duration-300 group-hover:w-16 opacity-50 group-hover:opacity-100"></div>
 
      {/* Side Metadata (Desktop Only) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pr-2">
         <div className="text-[10px] text-blueprint-600/50 rotate-90 whitespace-nowrap origin-left translate-y-8">
           
         </div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlueprintWrapper;