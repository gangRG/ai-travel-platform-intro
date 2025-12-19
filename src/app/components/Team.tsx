import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User } from 'lucide-react';

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const teamMembers = [
    {
      name: '김대영',
      role: 'Tech Leader',
      responsibilities: [
        '랭그래프 및 랭체인 담당',
        '메인 에이전트 개발',
        '에이전트 아키텍처 설계'
      ],
      color: '#4CAF50'
    },
    {
      name: '윤샘',
      role: 'Full Stack Developer',
      responsibilities: [
        '서브 에이전트 개발',
        '서브 프론트엔드',
        '메인 백엔드 개발'
      ],
      color: '#42A5F5'
    },
    {
      name: '신효빈',
      role: 'Database Engineer',
      responsibilities: [
        'DB 구축 및 서버 담당',
        'ERD 설계 및 관리',
        '데이터 모델링'
      ],
      color: '#FF9800'
    },
    {
      name: '공민우',
      role: 'Frontend Developer',
      responsibilities: [
        '서브 에이전트 개발',
        '메인 프론트엔드 개발',
        'UI/UX 구현'
      ],
      color: '#9C27B0'
    },
    {
      name: '정기홍',
      role: 'Planner & Database',
      responsibilities: [
        '프로젝트 기획',
        '서브 DB 관리',
        '요구사항 정의'
      ],
      color: '#FF7043'
    },
    {
      name: '황재성',
      role: 'AI Specialist',
      responsibilities: [
        'LLM 성격 설정',
        '프롬프트 파인튜닝',
        '서브 에이전트 개발'
      ],
      color: '#FFAB91'
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-[#F5F5F5] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">함께 만든 사람들</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            열정과 협업으로 만들어낸 최고의 팀워크
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: `${member.color}20` }}
              >
                <User size={40} style={{ color: member.color }} />
              </div>
              <h3 className="text-2xl text-[#333333] text-center mb-2">{member.name}</h3>
              <p
                className="text-center mb-6 px-4 py-2 rounded-full inline-block w-full"
                style={{ color: member.color, backgroundColor: `${member.color}10` }}
              >
                {member.role}
              </p>
              <ul className="space-y-2">
                {member.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-[#757575] flex items-start">
                    <span className="text-[#4CAF50] mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
