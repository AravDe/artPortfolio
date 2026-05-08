import ScrollReveal from './ScrollReveal';
import { useManifest } from '../hooks/useManifest';

export default function Process() {
  const { images: processImages } = useManifest('process');

  return (
    <section
      id="process"
      className="py-24 sm:py-32 lg:py-40 bg-cream/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Text Content - Studio Journal Entry */}
          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <p className="text-sm font-light tracking-widest uppercase text-stone mb-3">
                My Process
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
                The Treadle Wheel
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-stone leading-relaxed font-light">
                <p>
                  Unlike an electric wheel, a traditional treadle wheel is powered entirely by the foot. 
                  It demands a rhythm, a physical coordination between the body's momentum and the 
                  hands shaping the clay. The process is inherently slower, meditative, and intentional. 
                  Every piece formed on this wheel carries the subtle pulse of that movement.
                </p>
                <p>
                  Growing up in India, pottery was woven into the fabric of daily life. The village 
                  potters, or <em>kumhars</em>, worked with a deep, intuitive understanding of the earth. 
                  Their vessels were functional, tactile, and essential to the community.
                </p>
                <p>
                  Choosing to work on the treadle wheel is a way to honor that heritage. It grounds 
                  the practice in the physical reality of the craft, bridging the distance between the 
                  maker, the material, and the final form.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Process Gallery */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {processImages.map((filename, index) => (
              <ScrollReveal
                key={filename}
                delay={Math.min((index % 4) * 0.1, 0.4)}
                className={index === 0 ? "col-span-2 aspect-video" : "col-span-1 aspect-square"}
              >
                <div className="relative block w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={`/process/${filename}`}
                    alt="Studio process and the treadle wheel"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-warm-black/0 hover:bg-warm-black/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
