import Layout from '../components/Layout'
import Link from 'next/link'

export default function Events() {
  return (
    <Layout 
      title="Events - Coming Soon"
      description="Yūgen events are coming soon"
      currentPage="events"
    >
      <div className="landing-container">
        <div className="background-overlay"></div>
        
        <div className="landing-content loading">
          <h1 className="landing-title">Events</h1>
          <p className="landing-subtitle">Coming Soon</p>
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
