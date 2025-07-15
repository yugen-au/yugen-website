import Layout from '../components/Layout'
import AnimatedLogo from '../components/AnimatedLogo'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout currentPage="home">
      <div className="landing-container">
        {/* Background Video */}
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto" 
          poster="/assets/images/hero-poster.jpg"
        >
          <source src="/assets/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="background-overlay"></div>
        
        {/* Landing Content with Animated Logo */}
        <div className="landing-content loading">
          <AnimatedLogo />
          
          <p className="landing-subtitle">Beauty in the unseen, catharsis where we dare not go.</p>
          
          {/* Hero Action Buttons */}
          <div className="hero-buttons">
            <Link href="/events" className="hero-btn">
              <span className="btn-text">Events</span>
              <span className="btn-subtext">Coming Soon</span>
            </Link>
            <Link href="/releases" className="hero-btn">
              <span className="btn-text">Releases</span>
              <span className="btn-subtext">Coming Soon</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Schema.org structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yūgen",
            "description": "Underground techno events and immersive experiences",
            "url": "https://yugen.com.au"
          })
        }}
      />
    </Layout>
  )
}
