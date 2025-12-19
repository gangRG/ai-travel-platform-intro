import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-[#4CAF50] mb-2">Localy</h3>
            <p className="text-white/70">AI 기반 랜덤 즉흥 여행 플랫폼</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/gangRG/localy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4CAF50] transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>&copy; 2025 Localy Team. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by 김대영, 윤샘, 신효빈, 공민우, 정기홍, 황재성
          </p>
        </div>
      </div>
    </footer>
  );
}