import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ScreenshotProps {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

export function Screenshots({ images }: ScreenshotProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-gradient-to-b from-[#F5F5F5] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-6">실제 화면을 확인해보세요</h2>
          <p className="text-lg md:text-xl text-[#757575]">
            직관적이고 아름다운 인터페이스로 여행을 계획하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-2">{image.title}</h3>
                  <p className="text-white/80">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#4CAF50] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[selectedImage].src}
            alt={images[selectedImage].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
