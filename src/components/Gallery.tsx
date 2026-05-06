import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';
import Lightbox from './Lightbox';
import { galleryImages } from '../data/images';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <ScrollReveal>
            <div className="max-w-2xl mb-16 sm:mb-20">
              <p className="text-sm font-light tracking-widest uppercase text-stone mb-3">
                Portfolio
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
                Selected Works
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone leading-relaxed font-light">
                A curated collection of wheel-thrown vessels, each glazed and
                fired to capture the beauty of imperfection.
              </p>
            </div>
          </ScrollReveal>

          {/* Image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {galleryImages.map((filename, index) => (
              <ScrollReveal
                key={filename}
                delay={Math.min((index % 8) * 0.04, 0.25)}
              >
                <button
                  id={`gallery-item-${index}`}
                  onClick={() => openLightbox(index)}
                  className="relative block w-full overflow-hidden rounded-lg aspect-square group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  <img
                    src={`/gallery/${filename}`}
                    alt={`Ceramic piece ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/15 transition-colors duration-400" />
                  {/* Hover shadow */}
                  <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl transition-shadow duration-500" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages.map((f) => `/gallery/${f}`)}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={goNext}
        onPrev={goPrev}
      />
    </>
  );
}
