import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  // For server-side rendering, default to reduced motion.
  // This avoids a flash of motion before the client-side check.
  return isRenderingOnServer ? true : window.matchMedia(QUERY).matches;
};

export function useReducedMotion() {
  const [matches, setMatches] = useState(getInitialState);
  
  useEffect(() => {
    if (isRenderingOnServer) return;

    const mediaQuery = window.matchMedia(QUERY);
    const listener = (event) => {
      setMatches(event.matches);
    };
    
    // Add the listener
    // Note: `addEventListener` is the modern standard, but for broader compatibility with older browsers `addListener` can be used.
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else {
      mediaQuery.addListener(listener);
    }
    
    // Cleanup function
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);
  
  return matches;
}