import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout 
      title="404 - Page Not Found"
      description="The page you are looking for could not be found"
      currentPage="404"
    >
      <div className="landing-container">
        <div className="background-overlay"></div>
        
        <div className="landing-content loading">
          <h1 className="landing-title">404</h1>
          <p className="landing-subtitle">The path you seek remains hidden in the unseen.</p>
          <div style={{marginTop: '2rem'}}>
            <Link 
              href="/" 
              style={{
                color: '#4a7c59', 
                textDecoration: 'none', 
                fontWeight: 500, 
                textTransform: 'uppercase', 
                letterSpacing: '1px'
              }}
            >
              Return to the Beginning
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
