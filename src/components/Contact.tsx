import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sanjaykrishnan437@gmail.com', href: 'mailto:sanjaykrishnan437@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8072286139', href: 'tel:+918072286139' },
    { icon: MapPin, label: 'Location', value: 'Kumbakonam, Tamilnadu', href: '#' },
  ];

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:sanjaykrishnan437@gmail.com', color: 'hover:text-red-400 hover:border-red-400/40' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sanjay-krishnan-7a2210281', color: 'hover:text-blue-400 hover:border-blue-400/40' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/sanjay-krishnan005', color: 'hover:text-gray-300 hover:border-gray-300/40' },
  ];

  return (
    <footer id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"></div>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Open to opportunities, collaborations, and conversations about AI, machine learning, and data science
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/40"
            >
              <info.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-sm text-gray-500 mb-2">{info.label}</p>
              <a
                href={info.href}
                className="text-gray-300 font-medium break-all hover:text-cyan-400 transition-colors duration-300"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-400 mb-8 font-medium">Or connect with me on</p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.color} hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-1`}
            >
              <social.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2025 Sanjay Krishnan S. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            "Learn hard, grow fast, rise strong"
          </p>
        </div>
      </div>
    </footer>
  );
}
