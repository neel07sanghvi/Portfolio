import '../styles/globals.css';
import { ThemeProvider } from '../lib/context/ThemeContext';
import { useEffect } from 'react';
import { initSmoothScroll } from '../lib/utils/scroll';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
