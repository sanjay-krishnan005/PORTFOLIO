import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-glow">
            Sanjay Krishnan S
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"></div>
          <p className="text-2xl md:text-3xl text-cyan-300 font-light tracking-wide mb-3">
            AI & Data Science | Machine Learning Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            B.Tech in Artificial Intelligence and Data Science | Exploring deep learning, computer vision, and NLP
          </p>
          <p className="text-base md:text-lg text-gray-500 mt-3 font-light">
            Kumbakonam, Tamilnadu • Focused on problem-solving and delivering high-quality ML solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-fadeIn delay-500">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:border-cyan-400/60"
          >
            <span className="relative z-10 font-medium">View Projects</span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-white/30"
          >
            <span className="relative z-10 font-medium">Get in Touch</span>
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400/60" />
        </div>
      </div>
    </section>
  );
}
