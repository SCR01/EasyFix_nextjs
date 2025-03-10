import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { ThemeProvider } from '../lib/ThemeContext';

// Import AOS with SSR handling
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Initialize AOS
    AOS.init({
      duration: 700
    });
    
    // Add any other client-side initializations here
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>EasyFix Expert</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; 