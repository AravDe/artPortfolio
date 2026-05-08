import ScrollReveal from './ScrollReveal';
import { useManifest } from '../hooks/useManifest';

export default function About() {
  const { images } = useManifest('about');
  const portraitImage = images.length > 0 ? `/about/${images[0]}` : null;

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center lg:items-start">

          {/* Portrait Image */}
          <div className="w-full lg:w-5/12">
            <ScrollReveal direction="right">
              {portraitImage ? (
                <div className="overflow-hidden rounded-lg aspect-[4/5] w-full">
                  <img
                    src={portraitImage}
                    alt="Arav"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg aspect-[4/5] w-full bg-offwhite flex items-center justify-center border border-stone/20">
                  <span className="text-stone/50 font-light tracking-widest text-sm uppercase">Portrait</span>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-7/12">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-cream/85 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-sm border border-stone/10">
                <p className="text-sm font-light tracking-widest uppercase text-stone mb-3">
                  About the Potter
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
                  Arav
                </h2>
                <div className="mt-8 space-y-6 text-lg text-stone leading-relaxed font-light">
                  <p>
                    I'm Arav. I'm originally from the city of Kolkata, India, and I am currently
                    based out of Buffalo, New York.
                  </p>
                  <p>
                    Growing up in India, handmade objects weren't luxuries, they were woven into the
                    fabric of everyday life. From the unglazed clay cups used to drink chai at train
                    stations to the water pots in village homes, pottery was functional, communal,
                    and deeply connected to the earth.
                  </p>
                  <p>
                    Throughout my time at Berea College Student Crafts, I began working on a Treadle
                    Wheel. The physical engagement and rhythm of a foot-powered wheel felt incredibly grounding.
                    It was here that I started designing new mugs for sale, finding joy in making vessels
                    that invite touch and daily use.
                  </p>
                  <p>
                    Going through the motions of designing and throwing on a more challenging wheel
                    this year has been a great learning curve. I'm always looking for more opportunities
                    to further my knowledge in Ceramics and create pieces that honor the traditions of
                    my roots.
                  </p>

                  {/* <blockquote className="border-l-2 border-clay pl-6 py-2 my-10 italic text-xl text-charcoal font-serif">
                  "I want what I make to be held, used everyday, and to carry the quiet rhythm of the wheel into someone's home."
                </blockquote> */}
                </div>

                {/* Contact */}
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <a
                    href="mailto:hello@aravde.com"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-offwhite text-sm tracking-widest uppercase font-light rounded-md hover:bg-charcoal-light transition-colors duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" />
                    </svg>
                    Get in Touch
                  </a>

                  {/* Social icons */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone hover:text-clay transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
