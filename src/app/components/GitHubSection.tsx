import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Star, GitFork, BookOpen } from 'lucide-react';

export function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const actions = [
    { icon: Star, text: 'Star 주기', color: '#FFD700' },
    { icon: GitFork, text: 'Fork 하기', color: '#42A5F5' },
    { icon: BookOpen, text: '문서 읽기', color: '#4CAF50' }
  ];

  return (
    <section id="github" className="py-20 md:py-32 bg-gradient-to-br from-[#1a1e22] to-[#24292e]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Github size={64} className="text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl text-white mb-6">프로젝트 더 알아보기</h2>
          <p className="text-lg md:text-xl text-white/80 mb-12">
            GitHub에서 전체 소스 코드와 상세한 문서를 확인하세요
          </p>

          <motion.a
            href="https://github.com/gangRG/localy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#24292e] rounded-full hover:bg-[#F5F5F5] transition-all shadow-2xl text-xl mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Github size={28} />
            GitHub 저장소 방문하기
          </motion.a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {actions.map((action, index) => (
              <motion.div
                key={action.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <action.icon size={32} className="mx-auto mb-3" style={{ color: action.color }} />
                <p className="text-white">{action.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
