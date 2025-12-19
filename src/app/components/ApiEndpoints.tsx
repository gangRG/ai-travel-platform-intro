import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function ApiEndpoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const endpoints = [
    { method: 'GET', endpoint: '/', description: '서버 상태 확인', color: '#42A5F5' },
    { method: 'GET', endpoint: '/api/v1/health', description: '헬스 체크', color: '#42A5F5' },
    { method: 'POST', endpoint: '/api/v1/auth/register', description: '회원가입', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/auth/login', description: '로그인', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/chat/message', description: 'AI 채팅 메시지 전송', color: '#4CAF50' },
    { method: 'GET', endpoint: '/api/v1/chat/history', description: '채팅 기록 조회', color: '#42A5F5' },
    { method: 'POST', endpoint: '/api/v1/agents/restaurant', description: '맛집 추천 요청', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/agents/dessert', description: '카페 추천 요청', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/agents/accommodation', description: '숙소 추천 요청', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/agents/landmark', description: '관광지 추천 요청', color: '#4CAF50' },
    { method: 'POST', endpoint: '/api/v1/agents/itinerary', description: '일정표 생성 요청', color: '#4CAF50' }
  ];

  return (
    <section id="api" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">주요 API 엔드포인트</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            RESTful API로 모든 기능에 쉽게 접근할 수 있습니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#42A5F5] text-white px-6 py-4 grid grid-cols-12 gap-4">
            <div className="col-span-2">Method</div>
            <div className="col-span-6">Endpoint</div>
            <div className="col-span-4">설명</div>
          </div>

          {/* Rows */}
          <div className="bg-white">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="border-b border-[#F5F5F5] px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="col-span-2">
                  <span
                    className="inline-block px-3 py-1 rounded text-white text-sm"
                    style={{ backgroundColor: endpoint.color }}
                  >
                    {endpoint.method}
                  </span>
                </div>
                <div className="col-span-6">
                  <code className="text-[#333333] bg-[#F5F5F5] px-2 py-1 rounded text-sm">
                    {endpoint.endpoint}
                  </code>
                </div>
                <div className="col-span-4 text-[#757575] text-sm">
                  {endpoint.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden mt-8 space-y-4">
          {endpoints.map((endpoint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-block px-3 py-1 rounded text-white text-sm"
                  style={{ backgroundColor: endpoint.color }}
                >
                  {endpoint.method}
                </span>
                <code className="text-[#333333] bg-[#F5F5F5] px-2 py-1 rounded text-xs flex-1">
                  {endpoint.endpoint}
                </code>
              </div>
              <p className="text-[#757575] text-sm">{endpoint.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
