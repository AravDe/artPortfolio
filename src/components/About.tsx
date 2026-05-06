import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/process/DSC_6692.jpg"
                alt="Arav De working at the pottery wheel"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className="text-sm font-light tracking-widest uppercase text-stone mb-3">
                About
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
                The Potter
              </h2>
              <div className="mt-6 space-y-4 text-stone leading-relaxed font-light">
                <p>
                  I'm Arav De, a ceramicist drawn to the quiet rhythm of the
                  wheel and the unpredictable beauty of the kiln. My work
                  explores the tension between intention and chance — each piece
                  shaped by hand, then transformed by fire into something
                  entirely its own.
                </p>
                <p>
                  Inspired by organic forms and natural textures, I create
                  functional vessels that invite touch and daily use. Every
                  crack, glaze run, and subtle asymmetry tells the story of
                  its making.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
    </section>
  );
}
