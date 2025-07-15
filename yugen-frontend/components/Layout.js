import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children, title, description, currentPage = 'home' }) {
  const fullTitle = title || 'Yūgen - Beauty in the Unseen'
  const fullDescription = description || 'Underground techno events and immersive experiences. Catharsis where we dare not go.'
  const currentUrl = `https://yugen.com.au${currentPage === 'home' ? '' : '/' + currentPage}`

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content="techno, underground, electronic music, dark techno, industrial, yūgen, events" />
        <meta name="author" content="Yūgen" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        
        <title>{fullTitle}</title>
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>
      
      <Navigation currentPage={currentPage} />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
}
