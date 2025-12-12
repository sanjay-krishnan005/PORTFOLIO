import { BookOpen, Code, Database, Brain, Zap, Network } from 'lucide-react';
import sanjayImg from '../../sanjay_image.png';

export default function About() {
  const skills = [
    { icon: Code, label: 'Python, Java' },
    { icon: Brain, label: 'ML & Deep Learning' },
    { icon: Database, label: 'MySQL, Data Analysis' },
    { icon: Zap, label: 'TensorFlow, PyTorch' },
    { icon: Network, label: 'NLP, Computer Vision' },
    { icon: BookOpen, label: 'Pandas, Scikit-learn' },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-400/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={sanjayImg}
                      alt="Sanjay Krishnan"
                      className="w-48 h-48 mx-auto rounded-full object-cover mb-4 border-2 border-cyan-400/30"
                    />
                    <p className="text-sm text-gray-400">Sanjay Krishnan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Focused and adaptable professional with a strong commitment to learning, growth, and delivering high-quality results. Known for problem-solving abilities, collaborative mindset, and dedication to achieving organizational goals.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently pursuing a B.Tech in Artificial Intelligence and Data Science with a CGPA of 8.5. Passionate about machine learning, deep learning, and applying data-driven solutions to solve real-world problems.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-center">
                  <p className="text-2xl font-bold text-cyan-400">8.5</p>
                  <p className="text-xs text-gray-400 mt-1">CGPA</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-center">
                  <p className="text-2xl font-bold text-cyan-400">B.Tech</p>
                  <p className="text-xs text-gray-400 mt-1">AI & Data Science</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-center">
                  <p className="text-2xl font-bold text-cyan-400">5</p>
                  <p className="text-xs text-gray-400 mt-1">Certifications</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group p-6 rounded-xl bg-cyan-500/5 backdrop-blur-sm border border-cyan-400/20 hover:bg-cyan-500/10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <skill.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-medium text-gray-300">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
