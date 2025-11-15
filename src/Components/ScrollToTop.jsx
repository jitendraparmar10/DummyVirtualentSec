import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll the window to the top
// on every route change.
const ScrollToTop = () => {
  // The useLocation hook returns the location object that represents the current URL.
  const { pathname } = useLocation();

  // The useEffect hook is triggered after the component renders.
  // We add 'pathname' to the dependency array, so this effect runs
  // every time the URL's pathname changes.
  useEffect(() => {
    // This command scrolls the window to the very top (x:0, y:0).
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array

  // This component does not render any visible UI, it's purely for logic.
  return null;
};

export default ScrollToTop;