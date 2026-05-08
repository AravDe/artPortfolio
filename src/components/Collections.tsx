import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';
import Lightbox from './Lightbox';
import { useManifest } from '../hooks/useManifest';

export default function Collections() {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { images: mugs } = useManifest('mugs');
  const { images: vases } = useManifest('vases');
  const { images: chai } = useManifest('chai');

  const openLightbox = useCallback((images: string[], index: number, folder: string) => {
    setLightboxImages(images.map(img => `/${folder}/${img}`));
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % lightboxImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + lightboxImages.length) % lightboxImages.length
        : null
    );
  }, []);

  return (
    <>
      <section id="collections" className="py-0">

        {/* Subsection 3A: Treadle Mugs */}
        <div className="py-24 sm:py-32 bg-offwhite/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl mb-12 sm:mb-16">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
                  Treadle Mugs
                </h3>
                <p className="mt-4 text-base sm:text-lg text-stone leading-relaxed font-light">
                  These are functional, everyday mugs thrown entirely on the treadle wheel.
                  Each one carries the subtle irregularities and fingerprints of handwork —
                  no two are identical. Made to be held, used, and loved daily.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {mugs.map((filename, index) => (
                <ScrollReveal key={filename} delay={Math.min((index % 6) * 0.05, 0.25)}>
                  <button
                    onClick={() => openLightbox(mugs, index, 'mugs')}
                    className="relative block w-full overflow-hidden rounded-lg aspect-square group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
                  >
                    <img
                      src={`/mugs/${filename}`}
                      alt={`Treadle Mug ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/10 transition-colors duration-400" />
                    <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl transition-shadow duration-500" />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 3B: Vases */}
        <div className="py-24 sm:py-32 bg-cream/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl mb-12 sm:mb-16">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
                  Vases
                </h3>
                <p className="mt-4 text-base sm:text-lg text-stone leading-relaxed font-light">
                  Sculptural vessels that explore form, negative space, and surface texture.
                  Inspired by the silhouettes of traditional Indian water pots and storage vessels,
                  these pieces sit between function and art.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {vases.map((filename, index) => (
                <ScrollReveal key={filename} delay={Math.min((index % 6) * 0.05, 0.25)}>
                  <button
                    onClick={() => openLightbox(vases, index, 'vases')}
                    className="relative block w-full overflow-hidden rounded-lg aspect-square group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  >
                    <img
                      src={`/vases/${filename}`}
                      alt={`Vase ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/10 transition-colors duration-400" />
                    <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl transition-shadow duration-500" />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 3C: Indian Cha-er Bhad */}
        <div className="py-24 sm:py-32 bg-offwhite/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl mb-12 sm:mb-16">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight flex flex-col gap-2">
                  <span>Cha-er Bhad</span>
                  <span className="text-xl sm:text-2xl text-stone font-light tracking-wide">The Indian Tea Cup</span>
                </h3>
                <p className="mt-4 text-base sm:text-lg text-stone leading-relaxed font-light">
                  The Cha-er Bhad is the traditional Bengali and Indian earthen tea cup —
                  unglazed, raw, and deeply tied to the culture of chai on street corners
                  and railway platforms. These pieces are a direct homage to that tradition,
                  made with the same reverence for simplicity and the earth.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {chai.map((filename, index) => (
                <ScrollReveal key={filename} delay={Math.min((index % 6) * 0.05, 0.25)}>
                  <button
                    onClick={() => openLightbox(chai, index, 'chai')}
                    className="relative block w-full overflow-hidden rounded-lg aspect-square group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
                  >
                    <img
                      src={`/chai/${filename}`}
                      alt={`Cha-er Bhad ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/10 transition-colors duration-400" />
                    <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl transition-shadow duration-500" />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Lightbox shared across collections */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={goNext}
        onPrev={goPrev}
      />
    </>
  );
}
