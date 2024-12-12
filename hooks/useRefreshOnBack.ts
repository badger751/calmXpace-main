
// File: hooks/useRefreshOnBack.ts
import { useEffect } from 'react';

export function useRefreshOnBack() {
  useEffect(() => {
    const handlePopState = () => {
      // Refresh the page when the back button is pressed
      if (typeof window !== 'undefined') {
        window.location.reload();
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
