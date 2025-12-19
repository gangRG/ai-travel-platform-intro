import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Users, MapPin, MessageCircle } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Sparkles,
      title: '즉흥적이고 자유로운 여행 계획',
      description: '복잡한 계획 없이도 완벽한 여행을 만들어보세요',
      color: '#FF7043'
    },
    {
      icon: Users,
      title: 'AI 에이전트 기반 개인화 추천',
      description: '당신의 취향을 학습하여 맞춤 여행을 제안합니다',
      color: '#42A5F5'
    },
    {
      icon: MapPin,
      title: '실시간 지도 연동 및 경로 안내',
      description: 'Google Maps와 연동하여 정확한 위치 정보를 제공합니다',
      color: '#4CAF50'
    },
    {
      icon: MessageCircle,
      title: '귀여운 캐릭터와 함께하는 대화형 인터페이스',
      description: '친근한 AI 가이드가 여행의 모든 순간을 함께합니다',
      color: '#FFAB91'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">Localy란?</h2>
          <p className="text-lg md:text-xl text-[#757575] max-w-4xl mx-auto leading-relaxed">
            Localy는 LangChain과 LangGraph를 활용한 AI 기반 여행 플래너입니다.<br />
            사용자의 취향, 일정, 예산을 분석하여 맛집, 카페, 숙소, 관광지를 실시간으로 추천하고,<br />
            하루 단위 여행 일정표를 자동으로 생성해줍니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${value.color}20` }}
              >
                <value.icon size={32} style={{ color: value.color }} />
              </div>
              <h3 className="text-xl text-[#333333] mb-3">{value.title}</h3>
              <p className="text-[#757575]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
