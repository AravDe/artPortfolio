import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { processImages } from '../data/images';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-offwhite"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 sm:mb-20">
            <p className="text-sm font-light tracking-widest uppercase text-stone mb-3">
              The Craft
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
              In the Studio
            </h2>
            <p className="mt-6 text-base sm:text-lg text-stone leading-relaxed font-light">
              Every piece begins as a lump of clay on the wheel. Through centering,
              pulling, and shaping, form emerges from intention — a quiet dialogue
              between hands and earth.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {processImages.map((filename, index) => {
            const useParallax = index % 5 === 0 || index % 7 === 0;
            const parallaxY = index % 2 === 0 ? parallax1 : parallax2;

            return (
              <ScrollReveal
                key={filename}
                delay={Math.min(index * 0.05, 0.3)}
                className="break-inside-avoid"
              >
                <motion.div
                  style={useParallax ? { y: parallaxY } : undefined}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img
                    src={`/process/${filename}`}
                    alt={`Studio process — throwing on the pottery wheel`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/10 transition-colors duration-500" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
