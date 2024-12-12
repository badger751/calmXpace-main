// File: hooks/useRedirectOnBack.ts
import { useEffect } from 'react';

export function useRedirectOnBack() {
  useEffect(() => {
    const handlePopState = () => {
      // Redirect to the specified URL when the back button is pressed
      if (typeof window !== 'undefined') {
        window.location.href = "https://srsamachar.in";
      }
    };

    // Attach the event listener
    window.addEventListener('popstate', handlePopState);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
