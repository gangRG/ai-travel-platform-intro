import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { UtensilsCrossed, Coffee, Hotel, Landmark, Calendar, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  emoji: string;
  title: string;
  description: string[];
  color: string;
  delay: number;
  isInView: boolean;
}

function FeatureCard({ icon: Icon, emoji, title, description, color, delay, isInView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
        style={{ backgroundColor: `${color}20` }}
      >
        <span className="text-4xl">{emoji}</span>
      </div>
      <h3 className="text-2xl text-[#333333] mb-4">{title}</h3>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-[#757575] flex items-start">
            <span className="text-[#4CAF50] mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: UtensilsCrossed,
      emoji: '🍽️',
      title: '맛집 추천 에이전트',
      description: [
        'Serper API 기반 실시간 맛집 검색',
        '지역, 음식 종류, 분위기별 필터링',
        'Google Maps 연동 위치 정보 제공'
      ],
      color: '#FF7043'
    },
    {
      icon: Coffee,
      emoji: '☕',
      title: '카페/디저트 추천',
      description: [
        '오션뷰, 루프탑 등 특별한 카페 추천',
        '분위기와 메뉴 기반 큐레이션',
        '사진과 리뷰 정보 제공'
      ],
      color: '#FFAB91'
    },
    {
      icon: Hotel,
      emoji: '🏨',
      title: '숙소 추천',
      description: [
        '호텔, 펜션, 한옥스테이 등 다양한 숙소',
        '예산과 위치 기반 맞춤 추천',
        '실시간 가격 및 예약 정보'
      ],
      color: '#42A5F5'
    },
    {
      icon: Landmark,
      emoji: '🗺️',
      title: '관광지 추천',
      description: [
        '랜드마크, 자연 명소, 문화 체험',
        '계절별, 테마별 추천',
        '대중교통 및 이동 경로 안내'
      ],
      color: '#4CAF50'
    },
    {
      icon: Calendar,
      emoji: '📅',
      title: '일정표 자동 생성',
      description: [
        '하루 단위 상세 일정 생성',
        '이동 시간 및 경로 최적화',
        'Google Maps 경로 링크 자동 생성'
      ],
      color: '#81C784'
    },
    {
      icon: MessageSquare,
      emoji: '💬',
      title: '대화형 AI 플래너',
      description: [
        '귀여운 캐릭터(고양이, 수달)와 채팅',
        '자연어 기반 여행 상담',
        '실시간 질문 응답 및 추천'
      ],
      color: '#64B5F6'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">무엇을 할 수 있나요?</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            AI 에이전트가 여행의 모든 순간을 완벽하게 계획합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
