import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Bot, Server, Palette, Map, Lock } from 'lucide-react';

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const techCategories = [
    {
      icon: Bot,
      title: 'AI & Agent',
      color: '#9C27B0',
      technologies: [
        { name: 'LangChain', version: '0.3.13' },
        { name: 'LangGraph', version: '0.2.59' },
        { name: 'OpenAI GPT-4', version: '' },
        { name: 'LangChain Community', version: '' }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: '#4CAF50',
      technologies: [
        { name: 'FastAPI', version: '0.115.5' },
        { name: 'Python', version: '3.12' },
        { name: 'SQLAlchemy', version: '2.0.36' },
        { name: 'MySQL (PyMySQL)', version: '' }
      ]
    },
    {
      icon: Palette,
      title: 'Frontend',
      color: '#42A5F5',
      technologies: [
        { name: 'React', version: '18.3.1' },
        { name: 'TypeScript', version: '' },
        { name: 'Vite', version: '6.3.5' },
        { name: 'TailwindCSS', version: '4.1.17' },
        { name: 'Radix UI', version: '' }
      ]
    },
    {
      icon: Map,
      title: 'External APIs',
      color: '#FF7043',
      technologies: [
        { name: 'Google Maps API', version: '' },
        { name: 'Serper API', version: '' },
        { name: 'Google Places API', version: '' }
      ]
    },
    {
      icon: Lock,
      title: 'Authentication',
      color: '#FFAB91',
      technologies: [
        { name: 'JWT (python-jose)', version: '' },
        { name: 'Bcrypt', version: '' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">어떤 기술로 만들어졌나요?</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            최신 기술 스택으로 안정적이고 강력한 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-white to-[#F5F5F5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <category.icon size={32} style={{ color: category.color }} />
              </div>
              <h3 className="text-2xl text-[#333333] mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm"
                  >
                    <span className="text-[#333333]">{tech.name}</span>
                    {tech.version && (
                      <span
                        className="text-xs px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        {tech.version}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
