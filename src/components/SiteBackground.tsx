import { useManifest } from '../hooks/useManifest';

export default function SiteBackground() {
  const { images } = useManifest('site-background');
  
  const bgImage = images.length > 0 ? `/site-background/${images[0]}` : null;

  if (!bgImage) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <img
        src={bgImage}
        alt="Site background"
        className="w-full h-full object-cover opacity-30" 
      />
    </div>
  );
}
