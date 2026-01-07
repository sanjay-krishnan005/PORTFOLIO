import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Customer Sales Analysis',
      description: 'Built and deployed classification models to predict customer sales outcomes using historical data. Performed data cleaning, feature engineering, and exploratory data analysis to uncover patterns and trends.',
      details: [
        'Implemented Random Forest Classifier achieving 87% accuracy',
        'F1-score of 0.84 on test data',
        'Comprehensive EDA and feature engineering',
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      repo: 'https://github.com/sanjay-krishnan005/customer_sales_analysis',
    },
    {
      title: 'Image Classification Using CNN',
      description: 'Developed a Convolutional Neural Network model using TensorFlow/Keras to classify images into 10 object categories from the CIFAR-10 dataset.',
      details: [
        'Achieved 82% test accuracy on CIFAR-10',
        'Applied dropout and batch normalization',
        'Effective model tuning and performance optimization',
      ],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CNN', 'TensorFlow/Keras', 'Computer Vision', 'PyTorch'],
      repo: 'https://github.com/sanjay-krishnan005/image-classification-cifar10-datsets',
    },
    {
      title: 'FastAPI Payslip Generator & Automated Email System',
      description: 'Built a FastAPI backend to generate A4 PDF payslips (ReportLab) and email them automatically using SMTP. Processes Excel/CSV payroll data and handles bulk employee processing with async workers and robust error logging.',
      details: [
        'Processed Excel/CSV payroll data and generated A4 PDF payslips using ReportLab',
        'Implemented async processing and background tasks for bulk handling',
        'Automated emailing via SMTP with batching and retry logic',
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['FastAPI', 'ReportLab', 'Python', 'Async', 'SMTP'],
      repo: 'https://github.com/sanjay-krishnan005/FASTAPI_PAYROLE_GENERATOR',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-xl text-gray-400">Showcasing my machine learning and data science work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6 flex-1">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-cyan-400 text-sm">✓</span>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 mb-3 font-semibold uppercase">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
                      >
                        <Github className="w-4 h-4 text-gray-300" />
                        <span className="text-xs text-gray-300">Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
