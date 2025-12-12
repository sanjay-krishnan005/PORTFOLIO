import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { title: 'Machine Learning Specialization', provider: 'Coursera' },
    { title: 'Data Science Master Class', provider: 'Udemy' },
    { title: 'Introduction to Machine Learning', provider: 'NPTEL' },
    { title: 'IBM Deep Learning', provider: 'Coursera' },
    { title: 'Intro to SQL', provider: 'Kaggle' },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
