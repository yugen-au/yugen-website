import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout 
      title="About - Yūgen"
      description="Learn about Yūgen's underground techno events and immersive storytelling experiences"
      currentPage="about"
    >
      <div className="about-container">
        {/* Background Image */}
        <div className="about-background"></div>
        
        {/* Dark Overlay */}
        <div className="about-overlay"></div>
        
        {/* About Content */}
        <div className="about-content loading">
          <h1 className="about-title">About</h1>
          
          <div className="about-text">
            <p>
              Yūgen (/ˈjuːɡən/) is where music, movement, and immersive storytelling converge to create transformative experiences.
            </p>
            
            <p>
              We believe <strong>techno is more ritual than genre</strong>. Beckoning our hidden beings by merging harsh techno elements with experiential storytelling, we create journeys that speak to both the universal and deeply personal. Each participant is left with a meaningful Imprint that persists beyond the night.
            </p>
            
            <p>
              This is <strong>beauty in darkness</strong>. A profound, mysterious sense of beauty, especially that which goes unseen. An elusive feeling of mystery and growth that emerges when we dare venture into uncharted territories of the self.
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Yūgen",
            "description": "Learn about Yūgen's underground techno events and immersive storytelling experiences",
            "mainEntity": {
              "@type": "Organization",
              "name": "Yūgen",
              "description": "Underground techno events that merge music, movement, and immersive storytelling"
            }
          })
        }}
      />
    </Layout>
  )
}
