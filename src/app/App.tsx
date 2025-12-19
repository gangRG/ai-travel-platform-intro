import { useEffect, useState } from 'react';
import { Github, Sparkles, Zap, Brain, MapPin, ArrowRight, Menu, X, Star, Utensils, Coffee, Home, Landmark, ShoppingBag, AlertCircle, Calendar, ChevronDown, Database, Server, Layout, Cpu, Cloud, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import * as simpleIcons from 'simple-icons';
import imgMap from 'figma:asset/d82b999b8980d34710e0b50ce5f51836326670c4.png';
import imgLLMChat from 'figma:asset/8d4936a8ac65362cd09669993644d40df14d4ed7.png';
import imgLogin from 'figma:asset/70e4eef609fec191d88b4ef62f82d89b90091e5d.png';
import imgMainHome from 'figma:asset/d60b5367512d740efdc6a0d5c2e9000a82b0ccb2.png';
import catCharacter from 'figma:asset/0c8b0c9ea942f2b49abd074a4aa7e6344beaf3a1.png';
import chatbotScreen from 'figma:asset/a6660a96175f42ccb02170e9e4360f7e2e93e65b.png';
import mapScreen from 'figma:asset/d82b999b8980d34710e0b50ce5f51836326670c4.png';
import erdDiagram from 'figma:asset/32327793277442cd1d498c5a934f5a9dc9d6b431.png';

// Simple Icons Helper Component
const TechIcon = ({ iconName, size = 24 }: { iconName: string; size?: number }) => {
  const icon = (simpleIcons as any)[`si${iconName}`];
  if (!icon) return null;
  
  return (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size}
      fill={`#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeApiTab, setActiveApiTab] = useState('auth');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const features = [
    {
      icon: MapPin,
      title: '스마트 여행 추천',
      description: '맛집, 카페, 숙소, 관광지를 AI가 실시간으로 큐레이션합니다',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: Brain,
      title: '멀티 에이전트 시스템',
      description: '8개의 전문 AI 에이전트가 협업하여 완벽한 여행 계획을 생성합니다',
      gradient: 'from-blue-400 to-indigo-600'
    },
    {
      icon: Zap,
      title: '즉흥 여행의 재미',
      description: '복잡한 계획 없이도 AI가 당신만의 특별한 여행을 만들어줍니다',
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      icon: Sparkles,
      title: '귀여운 AI 가이드',
      description: '친근한 캐릭터와 함께 대화하며 여행을 계획하세요',
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  const techStack = [
    {
      category: 'AI & ML',
      icon: Brain,
      color: 'purple',
      items: [
        { name: 'LangChain 0.3.13', iconName: 'Langchain' },
        { name: 'LangGraph 0.2.59', iconName: 'OpenAI' },
        { name: 'OpenAI GPT-4', iconName: 'OpenAI' }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'green',
      items: [
        { name: 'FastAPI 0.115.5', iconName: 'Fastapi' },
        { name: 'Python 3.12', iconName: 'Python' },
        { name: 'MySQL', iconName: 'Mysql' }
      ]
    },
    {
      category: 'Frontend',
      icon: Layout,
      color: 'blue',
      items: [
        { name: 'React 18.3.1', iconName: 'React' },
        { name: 'TypeScript', iconName: 'Typescript' },
        { name: 'TailwindCSS', iconName: 'Tailwindcss' }
      ]
    },
    {
      category: 'APIs',
      icon: Cloud,
      color: 'orange',
      items: [
        { name: 'Google Maps', iconName: 'Googlemaps' },
        { name: 'Serper API', iconName: 'Google' },
        { name: 'Google Places', iconName: 'Google' }
      ]
    }
  ];

  const team = [
    { name: '김대영', role: 'Tech Leader', focus: '랭그래프 & 에이전트 아키텍처', color: 'from-blue-400 to-blue-600', icon: Brain },
    { name: '윤샘', role: 'Full Stack Developer', focus: '백엔드 & 에이전트 개발', color: 'from-green-400 to-green-600', icon: Server },
    { name: '신효빈', role: 'Database Engineer', focus: 'DB 구축 & ERD 설계', color: 'from-purple-400 to-purple-600', icon: Database },
    { name: '공민우', role: 'Frontend Developer', focus: '프론트엔드 & UI/UX', color: 'from-orange-400 to-orange-600', icon: Layout },
    { name: '정기홍', role: 'Planner', focus: '기획 & 요구사항 정의', color: 'from-pink-400 to-pink-600', icon: MessageCircle },
    { name: '황재성', role: 'AI Specialist', focus: 'LLM 튜닝 & 프롬프트', color: 'from-cyan-400 to-cyan-600', icon: Sparkles },
    { name: '박슬기', role: 'Agent Developer', focus: '서브 에이전트 개발', color: 'from-yellow-400 to-amber-600', icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">오디가냥</span>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Features</a>
              <a href="#screenshots" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Screenshots</a>
              <a href="#agents" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Agents</a>
              <a href="#tech" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Tech</a>
              <a href="#team" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Team</a>
              <a 
                href="https://github.com/gangRG/localy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              <a href="#features" className="block text-gray-700">Features</a>
              <a href="#screenshots" className="block text-gray-700">Screenshots</a>
              <a href="#agents" className="block text-gray-700">Agents</a>
              <a href="#tech" className="block text-gray-700">Tech</a>
              <a href="#team" className="block text-gray-700">Team</a>
              <a 
                href="https://github.com/gangRG/localy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full w-fit"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={catCharacter} 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm mb-8 border border-white/40 shadow-2xl">
              🚀 LangGraph Powered AI Travel Platform
            </div>
            
            <h1 className="text-7xl md:text-9xl text-white mb-8 tracking-tight font-black drop-shadow-2xl" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5), 1px -1px 2px rgba(0,0,0,0.5), -1px 1px 2px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.5)' }}>
              오디가냥
            </h1>
            
            <p className="text-3xl md:text-4xl text-white mb-6 font-semibold drop-shadow-xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5), 1px -1px 2px rgba(0,0,0,0.5), -1px 1px 2px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.5)' }}>
              AI가 만들어주는 나만의 즐흥 여행
            </p>
            
            <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5), 1px -1px 2px rgba(0,0,0,0.5), -1px 1px 2px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.5)' }}>
              멀티 에이전트 시스템이 실시간으로 맞춤 여행을 추천하고<br />
              완벽한 일정표를 자동으로 생성합니다
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="https://github.com/gangRG/localy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all shadow-2xl font-semibold text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={22} />
                View on GitHub
                <ArrowRight size={22} />
              </motion.a>
              
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/20 text-white rounded-full border-2 border-white/60 hover:bg-white/30 transition-all backdrop-blur-md font-semibold text-lg shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features
                <ChevronDown size={22} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-12 border-2 border-white/80 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
            <motion.div 
              className="w-2 h-3 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              Why 오디가냥?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI 에이전트가 여행의 모든 순간을 완벽하게 계획합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ y: -8 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-500`}></div>
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-7 shadow-lg`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-gray-900 font-bold">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              프로젝트 소개
            </h2>
            <p className="text-2xl text-gray-600">
              LangGraph 기반 멀티 에이전트 여행 플랫폼
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl mb-8 text-gray-900 font-bold">AI 기반 랜덤 즉흥 여행</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong className="text-gray-900 font-semibold">오디가냥</strong>은 LangGraph 기반의 멀티 에이전트 시스템을 활용하여 
                  사용자에게 맞춤형 여행 계획을 실시간으로 제공하는 AI 여행 플래너입니다.
                </p>
                <p>
                  복잡한 여행 계획 과정을 AI가 자동으로 처리하여, 맛집, 카페, 숙소, 관광지를 
                  한 번에 추천받고 완벽한 일정표를 생성할 수 있습니다.
                </p>
                <p>
                  8개의 전문화된 AI 에이전트가 협업하여 Google Maps, Places API 등의 
                  실시간 데이터를 활용하여 최적의 여행 루트를 제안합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-10 rounded-[2rem] shadow-xl border border-green-100"
            >
              <h4 className="text-3xl mb-8 text-gray-900 font-bold">핵심 기능</h4>
              <ul className="space-y-6">
                {[
                  { title: '실시간 장소 추천', desc: 'Google Places API 연동으로 최신 정보 제공' },
                  { title: '자동 일정표 생성', desc: 'AI가 최적의 동선으로 일정을 자동 구성' },
                  { title: '대화형 인터페이스', desc: '친근한 캐릭터와 자연스러운 대화로 계획 수립' },
                  { title: '맞춤형 추천', desc: '사용자 선호도 기반 개인화된 여행 코스' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 text-lg font-semibold">{item.title}</strong>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planning & Vision */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              기획 배경
            </h2>
            <p className="text-2xl text-gray-600">
              AI 시대, 새로운 여행 경험을 제시합니다
            </p>
          </motion.div>

          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-xl font-bold shadow-2xl mb-8">
                🎯 Target Audience
              </div>
              <h3 className="text-5xl mb-8 text-gray-900 font-black">
                여행을 좋아하는<br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">20~40대</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                복잡한 여행 계획은 부담스럽지만, 특별한 경험을 원하는<br />
                디지털 네이티브 세대를 위한 스마트한 여행 솔루션
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  emoji: '⏰',
                  title: '시간이 부족한',
                  desc: '바쁜 일상 속에서도 완벽한 여행을 원하는 직장인',
                  gradient: 'from-blue-400 to-blue-600'
                },
                {
                  emoji: '🎨',
                  title: '특별함을 찾는',
                  desc: '평범한 여행이 아닌 나만의 스타일을 원하는 여행자',
                  gradient: 'from-purple-400 to-purple-600'
                },
                {
                  emoji: '🤖',
                  title: 'AI 친화적인',
                  desc: '새로운 기술로 더 나은 경험을 추구하는 얼리어답터',
                  gradient: 'from-green-400 to-green-600'
                }
              ].map((persona, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="text-6xl mb-6">{persona.emoji}</div>
                  <h4 className="text-2xl mb-4 text-gray-900 font-bold">{persona.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{persona.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 md:p-16 rounded-[3rem] shadow-2xl text-white relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md rounded-full text-lg font-bold shadow-xl mb-8">
                  💡 Core Value
                </div>
                <h3 className="text-5xl md:text-6xl mb-6 font-black">
                  AI 시대의 새로운 여행 문화
                </h3>
                <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  귀여운 LLM과 대화하며 ��만의 완벽한 여행을 만들어보세요
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: MessageCircle,
                    title: '페르소나 맞춤 일정',
                    desc: 'AI가 당신의 여행 스타일을 이해하고, 성격과 취향에 딱 맞는 일정을 자동으로 생성합니다.',
                    points: ['대화로 파악하는 여행 성향', '개인 맞춤 추천 알고리즘', '실시간 일정 조율'],
                    gradient: 'from-blue-500 to-indigo-600',
                    iconBg: 'from-blue-400 to-indigo-500',
                    dotColor: 'bg-blue-400'
                  },
                  {
                    icon: Zap,
                    title: '쉽고 간편한 계획',
                    desc: '복잡한 조사와 비교는 이제 그만. 몇 번의 대화만으로 완벽한 여행 계획이 완성됩니다.',
                    points: ['즉각적인 AI 응답', '자동 최적 동선 계산', '원터치 일정표 생성'],
                    gradient: 'from-purple-500 to-pink-600',
                    iconBg: 'from-purple-400 to-pink-500',
                    dotColor: 'bg-purple-400'
                  },
                  {
                    icon: MapPin,
                    title: '지역 기반 웹 서칭',
                    desc: 'Serper API로 실시간 웹 검색을 수행하여 그 지역에서 진짜 유명한 맛집과 숙소를 찾아냅니다.',
                    points: ['실시간 웹 크롤링', '리뷰 기반 평점 분석', '현지 추천 장소 우선'],
                    gradient: 'from-orange-500 to-red-600',
                    iconBg: 'from-orange-400 to-red-500',
                    dotColor: 'bg-orange-400'
                  },
                  {
                    icon: Sparkles,
                    title: '귀여운 AI 가이드',
                    desc: '친근하고 귀여운 캐릭터와 자연스러운 대화로 여행을 계획하는 즐거운 경험을 선사합니다.',
                    points: ['자연스러운 대화 흐름', '감성적인 응답 스타일', '재미있는 추천 설명'],
                    gradient: 'from-cyan-500 to-teal-600',
                    iconBg: 'from-cyan-400 to-teal-500',
                    dotColor: 'bg-cyan-400'
                  }
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl border border-gray-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`bg-gradient-to-br ${value.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                      <value.icon size={32} className="text-white" />
                    </div>
                    <h4 className={`text-3xl mb-4 font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>{value.title}</h4>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{value.desc}</p>
                    <ul className="space-y-3">
                      {value.points.map((point, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${value.dotColor} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* How it Works */}
              <div className="mt-16 pt-16 border-t border-white/20">
                <h4 className="text-4xl mb-12 font-black text-center">이렇게 동작합니다</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: '01', icon: MessageCircle, title: 'AI와 대화', desc: '여행 취향 공유', gradient: 'from-blue-400 to-indigo-500' },
                    { step: '02', icon: Brain, title: '페르소나 분석', desc: '성향 자동 파악', gradient: 'from-purple-400 to-pink-500' },
                    { step: '03', icon: MapPin, title: '웹 서칭', desc: '유명 장소 매핑', gradient: 'from-orange-400 to-red-500' },
                    { step: '04', icon: Calendar, title: '일정 생성', desc: '완벽한 계획 완성', gradient: 'from-cyan-400 to-teal-500' }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className={`bg-gradient-to-br ${step.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                        <step.icon size={32} className="text-white" />
                      </div>
                      <div className={`text-7xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent mb-3`}>{step.step}</div>
                      <h5 className="text-2xl font-bold mb-2 text-white">{step.title}</h5>
                      <p className="text-white/90">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              실제 화면
            </h2>
            <p className="text-2xl text-gray-600">
              직관적이고 아름다운 인터페이스
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {[
              { img: imgLLMChat, title: 'LLM 대화 화면', desc: 'AI와 여행 계획' },
              { img: imgLogin, title: '로그인 화면', desc: 'TRIP PLANNER' },
              { img: imgMainHome, title: '메인 홈', desc: '여행 계획 관리' },
              { img: chatbotScreen, title: 'AI 챗봇', desc: '실시간 여행 상담' },
              { img: mapScreen, title: '지도 기능', desc: '위치 기반 추천' }
            ].map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative mx-auto"
                whileHover={{ y: -10 }}
              >
                <div className="relative mx-auto" style={{ width: '280px' }}>
                  {/* Phone Frame */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3.5rem] p-4 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 shadow-lg"></div>
                    
                    {/* Screen */}
                    <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-inner" style={{ height: '600px' }}>
                      <img 
                        src={screen.img} 
                        alt={screen.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="text-center mt-8">
                    <h3 className="text-2xl mb-2 text-gray-900 font-bold">{screen.title}</h3>
                    <p className="text-gray-600">{screen.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Detail */}
      <section id="agents" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              AI 에이전트 시스템
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              10개 이상의 전문 AI 에이전트가 협업하여 완벽한 여행을 만듭니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                name: 'Restaurant Agent',
                title: '맛집 추천',
                description: 'Serper API 기반 실시간 맛집 검색, 지역/음식 종류/분위기별 필터링',
                gradient: 'from-orange-400 via-red-400 to-pink-500'
              },
              {
                icon: Coffee,
                name: 'Dessert Agent',
                title: '카페/디저트',
                description: '오션뷰, 루프탑 등 특별한 카페 추천, 분위기와 메뉴 기반 큐레이션',
                gradient: 'from-amber-400 via-orange-400 to-yellow-500'
              },
              {
                icon: Home,
                name: 'Accommodation Agent',
                title: '숙소 추천',
                description: '호텔, 펜션, 한옥스테이 등 다양한 숙소, 예산과 위치 기반 추천',
                gradient: 'from-blue-400 via-indigo-400 to-purple-500'
              },
              {
                icon: Landmark,
                name: 'Landmark Agent',
                title: '관광지 추천',
                description: '랜드마크, 자연 명소, 문화 체험, 계절별/테마별 추천',
                gradient: 'from-green-400 via-emerald-400 to-teal-500'
              },
              {
                icon: MapPin,
                name: 'Region Recommendation Agent',
                title: '지역 추천',
                description: '사용자 선호도 기반 최적의 여행 지역 추천 및 특성 분석',
                gradient: 'from-purple-400 via-pink-400 to-rose-500'
              },
              {
                icon: ShoppingBag,
                name: 'Shopping Agent',
                title: '쇼핑 추천',
                description: '로컬 특산품, 기념품 가게, 쇼핑몰 추천',
                gradient: 'from-pink-400 via-rose-400 to-red-500'
              },
              {
                icon: AlertCircle,
                name: 'Emergency Agent',
                title: '긴급 상황 대응',
                description: '병원, 약국, 경찰서 등 긴급 시설 안내',
                gradient: 'from-red-400 via-orange-400 to-amber-500'
              },
              {
                icon: Calendar,
                name: 'Itinerary Generator',
                title: '일정표 생성',
                description: '하루 단위 상세 일정 생성, 이동 시간 및 경로 최적화',
                gradient: 'from-cyan-400 via-blue-400 to-indigo-500'
              },
              {
                icon: Brain,
                name: 'Persona Agent',
                title: '페르소나 분석',
                description: '사용자 대화 기반 여행 성향 및 선호도 자동 분석',
                gradient: 'from-violet-400 via-purple-400 to-fuchsia-500'
              },
              {
                icon: Sparkles,
                name: 'LLM Personality Agent',
                title: 'AI 성격 설정',
                description: '귀엽고 친근한 AI 캐릭터 성격 구현 및 감성 대화',
                gradient: 'from-yellow-400 via-amber-400 to-orange-500'
              },
              {
                icon: MessageCircle,
                name: 'Multilingual Agent',
                title: '다국어 지원',
                description: '한국어, 영어 등 다국어 실시간 번역 및 대화 지원',
                gradient: 'from-emerald-400 via-teal-400 to-cyan-500'
              },
              {
                icon: Star,
                name: 'Recommendation Engine',
                title: '추천 엔진',
                description: '머신러닝 기반 개인화 추천 및 평점 분석',
                gradient: 'from-indigo-400 via-blue-400 to-sky-500'
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${agent.gradient} mb-6 shadow-lg`}>
                  <agent.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 font-bold">{agent.title}</h3>
                <p className="text-xs text-gray-500 mb-3 font-medium">{agent.name}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              Tech Stack
            </h2>
            <p className="text-2xl text-gray-600">
              최신 기술로 구축된 안정적인 플랫폼
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${
                    tech.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    tech.color === 'green' ? 'from-green-400 to-green-600' :
                    tech.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    'from-orange-400 to-orange-600'
                  } shadow-lg`}>
                    <tech.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 font-bold">{tech.category}</h3>
                </div>
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group/item">
                      <div className="flex-shrink-0">
                        <TechIcon iconName={item.iconName} size={20} />
                      </div>
                      <span className="text-sm text-gray-700 font-medium group-hover/item:text-gray-900">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              시스템 아키텍처
            </h2>
            <p className="text-2xl text-gray-600">
              LangGraph 기반 멀티 에이전트 워크플로우
            </p>
          </motion.div>

          {/* Architecture Diagram from README Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-200"
          >
            <div className="max-w-5xl mx-auto">
              {/* Flow Diagram */}
              <div className="space-y-8">
                {/* User Layer */}
                <div className="text-center">
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg text-xl font-bold">
                    👤 사용자 (React Frontend)
                  </div>
                  <div className="flex justify-center mt-4">
                    <ChevronDown size={32} className="text-gray-400" />
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="text-center">
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg text-xl font-bold">
                    ⚙️ FastAPI Backend + MySQL
                  </div>
                  <div className="flex justify-center mt-4">
                    <ChevronDown size={32} className="text-gray-400" />
                  </div>
                </div>

                {/* LangGraph Coordinator */}
                <div className="text-center">
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg text-xl font-bold">
                    🧠 LangGraph Coordinator
                  </div>
                  <p className="text-gray-600 mt-3 text-sm">멀티 에이전트 오케스트레이션</p>
                  <div className="flex justify-center mt-4">
                    <ChevronDown size={32} className="text-gray-400" />
                  </div>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                  {[
                    { name: '🍽️ 맛집', icon: Utensils },
                    { name: '☕ 카페', icon: Coffee },
                    { name: '🏠 소', icon: Home },
                    { name: '🗿 관광지', icon: Landmark },
                    { name: '📍 지역', icon: MapPin },
                    { name: '🛍️ 쇼핑', icon: ShoppingBag },
                    { name: '🚨 긴급', icon: AlertCircle },
                    { name: '📅 일정', icon: Calendar }
                  ].map((agent, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                      <agent.icon size={24} className="mx-auto mb-2 text-purple-600" />
                      <p className="text-xs font-semibold text-gray-700">{agent.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <ChevronDown size={32} className="text-gray-400" />
                </div>

                {/* External APIs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Google Maps API', desc: '지도 & 위치' },
                    { name: 'Serper API', desc: '실시간 검색' },
                    { name: 'Google Places', desc: '장소 정보' }
                  ].map((api, i) => (
                    <div key={i} className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 shadow-lg text-center">
                      <Cloud size={32} className="mx-auto mb-3 text-orange-600" />
                      <h4 className="font-bold text-gray-900 mb-1">{api.name}</h4>
                      <p className="text-sm text-gray-600">{api.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Database ERD */}
      <section className="py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 rounded-full mb-8">
              <Database className="text-purple-600" size={24} />
              <span className="text-purple-700 font-bold text-lg">Database Architecture</span>
            </div>
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-black">
              ERD 설계
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              체계적인 데이터베이스 구조로 안정적인 서비스를 제공합니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-100"
          >
            <div className="p-8 bg-gradient-to-r from-purple-500 to-indigo-600">
              <h3 className="text-3xl font-black text-white mb-2">데이터베이스 설계</h3>
              <p className="text-purple-100 text-lg">신효빈 DB Engineer가 설계한 완벽한 ERD</p>
            </div>
            <div className="p-8 bg-gray-900">
              <img 
                src={erdDiagram} 
                alt="오디가냥 Database ERD" 
                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => window.open(erdDiagram, '_blank')}
              />
            </div>
            <div className="p-8 bg-gray-50">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">정규화된 설계</h4>
                  <p className="text-gray-600">데이터 무결성을 보장하는 체계적인 테이블 구조</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
                  <div className="text-4xl mb-3">🔗</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">관계 설계</h4>
                  <p className="text-gray-600">최적화된 외래키와 인덱스로 빠른 쿼리 성능</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">확장 가능</h4>
                  <p className="text-gray-600">미래 기능 추가를 고려한 유연한 스키마</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              API Endpoints
            </h2>
            <p className="text-2xl text-gray-600">
              RESTful API로 모든 기능에 접근
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'auth', label: '🔐 인증', color: 'from-blue-500 to-indigo-600' },
              { id: 'chat', label: '💬 채팅', color: 'from-green-500 to-emerald-600' },
              { id: 'agents', label: '🤖 에이전트', color: 'from-purple-500 to-pink-600' },
              { id: 'trip', label: '✈️ 여행', color: 'from-orange-500 to-red-600' },
              { id: 'user', label: '👤 사용자', color: 'from-cyan-500 to-teal-600' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveApiTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeApiTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl scale-110`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: activeApiTab === tab.id ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* API Content */}
          <motion.div
            key={activeApiTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {activeApiTab === 'auth' && [
                { method: 'POST', endpoint: '/api/v1/auth/register', description: '회원가입 - 이메일, 비밀번호, 이름으로 새 계정 생성' },
                { method: 'POST', endpoint: '/api/v1/auth/login', description: '로그인 - JWT 토큰 발급 및 인증' },
                { method: 'POST', endpoint: '/api/v1/auth/logout', description: '로그아웃 - 현재 세션 종료' },
                { method: 'POST', endpoint: '/api/v1/auth/refresh', description: '토큰 갱신 - 만료된 JWT 토큰 재발급' },
                { method: 'POST', endpoint: '/api/v1/auth/password/reset', description: '비밀번호 재설정 - 이메일로 재설정 링크 전송' },
                { method: 'POST', endpoint: '/api/v1/auth/password/change', description: '비밀번호 변경 - 로그인 상태에서 비밀번호 변경' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="flex items-start gap-4">
                    <div className="px-4 py-2 rounded-xl font-bold text-sm shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <code className="text-base text-gray-900 font-mono block mb-3 font-bold">{api.endpoint}</code>
                      <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeApiTab === 'chat' && [
                { method: 'POST', endpoint: '/api/v1/chat/message', description: 'AI 채팅 메시지 전송 - 사용자 메시지에 대한 AI 응답 생성' },
                { method: 'GET', endpoint: '/api/v1/chat/history', description: '채팅 기록 조회 - 전체 대화 히스토리 가져오기' },
                { method: 'GET', endpoint: '/api/v1/chat/sessions', description: '채팅 세션 목록 - 사용자의 모든 채팅 세션 조회' },
                { method: 'POST', endpoint: '/api/v1/chat/session/new', description: '새 채팅 세션 생성 - 새로운 대화 시작' },
                { method: 'DELETE', endpoint: '/api/v1/chat/session/:id', description: '채팅 세션 삭제 - 특정 대화 내역 제거' },
                { method: 'GET', endpoint: '/api/v1/chat/session/:id', description: '특정 세션 조회 - 선택한 세션의 상세 내역' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                  <div className="flex items-start gap-4">
                    <div className={`px-4 py-2 rounded-xl font-bold text-sm shadow-lg text-white ${
                      api.method === 'POST' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                      api.method === 'GET' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    }`}>
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <code className="text-base text-gray-900 font-mono block mb-3 font-bold">{api.endpoint}</code>
                      <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeApiTab === 'agents' && [
                { method: 'POST', endpoint: '/api/v1/agents/restaurant', description: '맛집 추천 - 지역, 음식 종류, 가격대 기반 맛집 추천' },
                { method: 'POST', endpoint: '/api/v1/agents/dessert', description: '카페/디저트 추천 - 분위기, 메뉴 기반 카페 큐레이션' },
                { method: 'POST', endpoint: '/api/v1/agents/accommodation', description: '숙소 추천 - 호텔, 펜션, 게스트하우스 등 숙박 시설 추천' },
                { method: 'POST', endpoint: '/api/v1/agents/landmark', description: '관광지 추천 - 문화재, 자연 명소, 테마파크 등 관광 명소' },
                { method: 'POST', endpoint: '/api/v1/agents/region', description: '지역 정보 - 여행지 특성 및 추천 지역 분석' },
                { method: 'POST', endpoint: '/api/v1/agents/shopping', description: '쇼핑 추천 - 로컬 특산품, 기념품, 쇼핑몰 정보' },
                { method: 'POST', endpoint: '/api/v1/agents/emergency', description: '긴급 정보 - 병원, 약국, 경찰서 등 긴급 시설 안���' },
                { method: 'POST', endpoint: '/api/v1/agents/itinerary', description: '일정표 생성 - 하루 단위 상세 여행 일정 자동 생성' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                  <div className="flex items-start gap-4">
                    <div className="px-4 py-2 rounded-xl font-bold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <code className="text-base text-gray-900 font-mono block mb-3 font-bold">{api.endpoint}</code>
                      <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeApiTab === 'trip' && [
                { method: 'GET', endpoint: '/api/v1/trips', description: '여행 목록 조회 - 사용자의 모든 여행 계획 리스트' },
                { method: 'POST', endpoint: '/api/v1/trips', description: '여행 생성 - 새로운 여행 계획 작성' },
                { method: 'GET', endpoint: '/api/v1/trips/:id', description: '여행 상세 조회 - 특정 여행의 상세 정보 및 일정' },
                { method: 'PUT', endpoint: '/api/v1/trips/:id', description: '여행 수정 - 여행 정보 및 일정 업데이트' },
                { method: 'DELETE', endpoint: '/api/v1/trips/:id', description: '여행 삭제 - 여행 계획 제거' },
                { method: 'POST', endpoint: '/api/v1/trips/:id/share', description: '여행 공유 - 다른 사용자와 여행 계획 공유' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
                  <div className="flex items-start gap-4">
                    <div className={`px-4 py-2 rounded-xl font-bold text-sm shadow-lg text-white ${
                      api.method === 'POST' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                      api.method === 'GET' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      api.method === 'PUT' ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    }`}>
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <code className="text-base text-gray-900 font-mono block mb-3 font-bold">{api.endpoint}</code>
                      <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {activeApiTab === 'user' && [
                { method: 'GET', endpoint: '/api/v1/user/profile', description: '프로필 조회 - 사용자 정보 가져오기' },
                { method: 'PUT', endpoint: '/api/v1/user/profile', description: '프로필 수정 - 사용자 정보 업데이트' },
                { method: 'GET', endpoint: '/api/v1/user/preferences', description: '선호도 조회 - 여행 취향 및 선호 설정' },
                { method: 'PUT', endpoint: '/api/v1/user/preferences', description: '선호도 설정 - 음식, 활동, 예산 등 선호도 저장' },
                { method: 'GET', endpoint: '/api/v1/user/favorites', description: '즐겨찾기 목록 - 저장한 장소 및 여행지' },
                { method: 'POST', endpoint: '/api/v1/user/favorites/:placeId', description: '즐겨찾기 추가 - 장소를 즐겨찾기에 저장' },
                { method: 'DELETE', endpoint: '/api/v1/user/favorites/:placeId', description: '즐겨찾기 제거 - 저장한 장소 삭제' },
                { method: 'DELETE', endpoint: '/api/v1/user/account', description: '계정 삭제 - 사용자 계정 영구 제거' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-600"></div>
                  <div className="flex items-start gap-4">
                    <div className={`px-4 py-2 rounded-xl font-bold text-sm shadow-lg text-white ${
                      api.method === 'POST' ? 'bg-gradient-to-r from-cyan-500 to-teal-600' :
                      api.method === 'GET' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      api.method === 'PUT' ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    }`}>
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <code className="text-base text-gray-900 font-mono block mb-3 font-bold">{api.endpoint}</code>
                      <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* External APIs Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-[2rem] shadow-2xl border-2 border-green-200"
          >
            <h3 className="text-3xl mb-8 text-gray-900 font-black text-center">🔗 외부 API 연동</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Google Places API', desc: '장소 정보, 리뷰, 평점 실시간 조회', icon: MapPin },
                { name: 'Google Maps API', desc: '지도 표시, 경로 탐색, 거리 계산', icon: MapPin },
                { name: 'Serper API', desc: '실시간 검색 데이터 및 최신 정보', icon: Zap }
              ].map((api, i) => (
                <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <api.icon size={32} className="text-white" />
                  </div>
                  <strong className="text-gray-900 text-xl block mb-3 font-bold">{api.name}</strong>
                  <p className="text-base text-gray-600 leading-relaxed">{api.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-black">
              Team
            </h2>
            <p className="text-2xl text-gray-600">
              함께 만든 사람들
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group relative"
                whileHover={{ y: -12 }}
              >
                {/* Background Gradient Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  {/* Avatar Circle */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full blur-xl opacity-40`}></div>
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${member.color} rounded-full shadow-2xl flex items-center justify-center`}>
                      <member.icon size={40} className="text-white" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl mb-3 text-gray-900 font-black tracking-tight">
                    {member.name}
                  </h3>

                  {/* Role with gradient */}
                  <div className={`inline-block mb-5 px-4 py-2 bg-gradient-to-r ${member.color} rounded-full`}>
                    <p className="text-sm text-white font-bold">{member.role}</p>
                  </div>

                  {/* Focus Area */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {member.focus}
                  </p>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.color} opacity-5 rounded-bl-full rounded-tr-3xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-6 bg-white/10 rounded-full mb-8">
              <Github size={72} className="text-white" />
            </div>
            <h2 className="text-6xl md:text-7xl text-white mb-8 font-black">
              Open Source
            </h2>
            <p className="text-2xl text-gray-300 mb-14 leading-relaxed max-w-2xl mx-auto">
              GitHub에서 전체 소스 코드와 문서를 확인하세요
            </p>
            <motion.a
              href="https://github.com/gangRG/localy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all shadow-2xl font-bold text-xl"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github size={28} />
              Visit Repository
              <ArrowRight size={28} />
            </motion.a>

            <div className="flex justify-center gap-12 mt-16">
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Star size={24} className="text-yellow-400" fill="currentColor" />
                <span className="font-semibold">Star</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Github size={24} />
                <span className="font-semibold">Fork</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-black">오디가냥</span>
          </div>
          <p className="text-gray-400 mb-8 text-lg">AI 기반 랜덤 즉흥 여행 플랫폼</p>
          <p className="text-sm text-gray-500">
            &copy; 2025 오디가냥 Team. Made with ❤️ by 김대영, 윤샘, 신효빈, 공민우, 정기홍, 황재성
          </p>
        </div>
      </footer>
    </div>
  );
}