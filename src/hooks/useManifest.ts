import { useState, useEffect } from 'react';

export function useManifest(folder: string) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchManifest() {
      try {
        setLoading(true);
        // Assuming Vite serves the assets folder at root
        const response = await fetch(`/${folder}/manifest.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest for ${folder}`);
        }
        const data = await response.json();
        if (isMounted) {
          setImages(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchManifest();

    return () => {
      isMounted = false;
    };
  }, [folder]);

  return { images, loading, error };
}
