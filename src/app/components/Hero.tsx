import { motion } from 'motion/react';
import { Github, Rocket } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Localy
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-4">
            AI가 만들어주는 나만의 즉흥 여행
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            LangGraph 기반 멀티 에이전트가 실시간으로 맞춤 여행을 추천합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://github.com/gangRG/localy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#24292e] text-white rounded-full hover:bg-[#1a1e22] transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub에서 보기
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4CAF50] to-[#42A5F5] text-white rounded-full hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} />
              프로젝트 시작하기
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
