import { motion } from 'framer-motion';
import { useManifest } from '../hooks/useManifest';

export default function Hero() {
  const { images } = useManifest('hero');

  // Use the background image if available, else fallback to dark gray
  const bgImage = images.length > 0 ? `/hero/${images[0]}` : null;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Ceramic glaze close-up"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-warm-black" />
        )}
        {/* Dark overlays to ensure text legibility */}
        <div className="absolute inset-0 bg-warm-black/80 sm:bg-warm-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-offwhite leading-tight tracking-wide">
            Arav
          </h1>
          <p className="mt-2 text-xl sm:text-2xl text-offwhite/70 font-light tracking-wide">
            Buffalo, New York
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-offwhite/80 font-light max-w-2xl leading-relaxed tracking-wide italic">
            Rooted in the earth, shaped by the rhythm of the wheel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#process"
            className="inline-flex items-center gap-2 text-sm font-light tracking-widest uppercase text-offwhite/70 hover:text-clay transition-colors duration-300"
          >
            Explore
            <span className="w-8 h-px bg-current" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-offwhite/40 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-offwhite/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
