import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 992;

export const useIsMobile = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth < MOBILE_BREAKPOINT;
};
