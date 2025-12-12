import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'AI & ML Internship',
      company: 'IBM SkillsBuild, AICTE-Virtual',
      period: '06/2025 – 07/2025',
      location: 'Virtual',
      highlights: [
        'Gained practical skills in data preprocessing, model training, evaluation metrics, and deployment using Streamlit with Python',
        'Developed a machine learning model to predict customer sales outcomes using historical purchase and behavior data',
        'Performed data cleaning, EDA, and feature engineering using Pandas and NumPy',
        'Achieved improved accuracy by tuning hyperparameters and validating results with cross-validation techniques',
        'Explored AI ethics, responsible AI, and real-world applications as part of training modules',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                  <Briefcase className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {exp.period} • {exp.location}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
