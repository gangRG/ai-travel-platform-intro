import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const layers = [
    { name: '사용자', color: '#757575', width: 'w-32' },
    { name: 'React Frontend\n(Vite + TypeScript)', color: '#42A5F5', width: 'w-64' },
    { name: 'FastAPI Backend', color: '#4CAF50', width: 'w-64' },
    { name: 'LangGraph Coordinator', color: '#9C27B0', width: 'w-64' }
  ];

  const agents = [
    'Restaurant Agent (맛집)',
    'Dessert Agent (카페)',
    'Accommodation Agent (숙소)',
    'Landmark Agent (관광지)',
    'Region Agent (지역 정보)',
    'Emergency Agent (긴급 정보)',
    'Shopping Agent (쇼핑)',
    'Itinerary Generator (일정 생성)'
  ];

  const externalApis = [
    'Google Maps API',
    'Serper API',
    'Google Places API'
  ];

  return (
    <section id="architecture" className="py-20 md:py-32 bg-gradient-to-b from-[#F5F5F5] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">시스템 구조</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            멀티 에이전트 시스템으로 구성된 강력한 아키텍처
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Flow */}
          <div className="flex flex-col items-center gap-6">
            {layers.map((layer, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${layer.width} px-6 py-4 rounded-xl shadow-lg text-white text-center whitespace-pre-line`}
                  style={{ backgroundColor: layer.color }}
                >
                  {layer.name}
                </motion.div>
                {index < layers.length - 1 && (
                  <ArrowDown className="text-[#757575] my-2" size={24} />
                )}
              </div>
            ))}

            {/* Agents Grid */}
            <div className="mt-6 mb-6">
              <ArrowDown className="text-[#757575] mx-auto" size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full bg-gradient-to-br from-[#9C27B0]/10 to-[#7B1FA2]/10 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl text-[#333333] text-center mb-6">멀티 에이전트 시스템</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {agents.map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="bg-white rounded-lg px-4 py-3 shadow text-center text-sm text-[#333333]"
                  >
                    {agent}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* External APIs */}
            <div className="mt-6 mb-6">
              <ArrowDown className="text-[#757575] mx-auto" size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="w-full bg-gradient-to-br from-[#FF7043]/10 to-[#F4511E]/10 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl text-[#333333] text-center mb-6">External APIs</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {externalApis.map((api, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="bg-white rounded-lg px-6 py-3 shadow"
                  >
                    <span className="text-[#333333]">{api}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <div className="mt-6 mb-6">
              <ArrowDown className="text-[#757575] mx-auto" size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="w-64 px-6 py-4 rounded-xl shadow-lg bg-[#FF9800] text-white text-center"
            >
              MySQL Database
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
