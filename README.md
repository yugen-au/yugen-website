# Yūgen Website - Node.js

Underground techno events and immersive experiences. Beauty in the unseen, catharsis where we dare not go.

## Project Status (Updated July 15, 2025)

**Current Version**: V3.0 - Frontend/Backend Separated Architecture  
**Status**: Development Ready - Migrated to Modern Stack  
**Frontend**: Next.js 14 (React)  
**Backend**: Express.js API  
**Hosting**: Ready for Vercel (Frontend) + Railway/Vercel (Backend)

---

## 🎯 Current Functionality

### ✅ **Core Website Features**
- **Landing Page** - Immersive hero section with animated SVG logo breathing effect
- **About Page** - Brand philosophy and mission statement
- **Navigation** - Responsive navbar with mobile hamburger menu
- **404 Error Handling** - Custom error pages with brand styling
- **Footer** - Social media links with glassmorphism design and hover effects

### ✅ **Visual & UX Design**
- **Animated Logo** - 4-second breathing cycle with green glow effects
- **Background Video** - Hero video with mobile optimization and fallbacks
- **Mobile-First Design** - Responsive across all devices (desktop, tablet, mobile)
- **Dark Aesthetic** - Brand colors: #0a0a0a, #1a1a1a, #4a7c59 accent
- **Typography** - Bebas Neue (headers), Inter (body text)
- **Interactive Elements** - Smooth hover effects, focus states, animations

### ✅ **Technical Implementation**
- **Next.js Frontend** - React components with static generation
- **Express.js API Backend** - RESTful endpoints with CORS support
- **Component Architecture** - Reusable React components (Layout, Navigation, Footer)
- **Static Asset Optimization** - Next.js automatic image and bundle optimization
- **Environment Configuration** - Separate dev/prod configs for frontend and backend
- **SEO Optimization** - Server-side rendering, meta tags, Open Graph, structured data
- **PWA Ready** - Web app manifest, favicon suite, mobile optimization

### ✅ **Social & Branding**
- **Social Media Integration** - Email, Instagram, Facebook, SoundCloud, Bandcamp
- **Professional Favicon Suite** - ICO, SVG, PNG variants for all devices
- **Copyright & Legal** - Brand protection and attribution
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, screen reader support

---

## 🚀 Development Setup

### **Frontend (Next.js)**
```bash
cd yugen-frontend
npm install
npm run dev        # Runs on http://localhost:3000
```

### **Backend (Express API)**
```bash
cd yugen-backend
npm install
npm run dev        # Runs on http://localhost:3001
```

### **Available Commands**

**Frontend Commands:**
```bash
npm run dev        # Development server
npm run build      # Production build
npm start          # Production server
npm run export     # Static export
```

**Backend Commands:**
```bash
npm run dev        # Development server with auto-restart
npm start          # Production server
```

### **Environment Variables**

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=https://yugen.com.au
```

**Backend (.env):**
```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

---

## 📁 Project Structure

```
yugen-website/
├── yugen-frontend/           # Next.js Frontend Application
│   ├── components/           # React Components
│   │   ├── Layout.js         # Main layout with head/footer
│   │   ├── Navigation.js     # Responsive navigation with mobile menu
│   │   ├── Footer.js         # Social links and copyright
│   │   └── AnimatedLogo.js   # SVG logo with breathing animation
│   ├── pages/                # Next.js Pages (file-based routing)
│   │   ├── _app.js           # Global app wrapper
│   │   ├── index.js          # Landing page with animated logo
│   │   ├── about.js          # Brand philosophy page
│   │   ├── events.js         # Events (coming soon)
│   │   ├── releases.js       # Releases (coming soon)
│   │   └── 404.js            # Custom error page
│   ├── styles/               # CSS Styles
│   │   └── globals.css       # Complete website styles (~600 lines)
│   ├── public/               # Static Assets
│   │   ├── assets/images/    # Logo, video, favicon suite
│   │   ├── robots.txt        # SEO directives
│   │   ├── sitemap.xml       # Site structure
│   │   └── site.webmanifest  # PWA configuration
│   ├── package.json          # Frontend dependencies
│   └── next.config.js        # Next.js configuration
├── yugen-backend/            # Express.js API Backend
│   ├── server.js             # API server with RESTful routes
│   └── package.json          # Backend dependencies
├── MIGRATION_README.md       # Migration documentation
└── README.md                 # This documentation (updated)
```

---

## 🛣️ Current Routes

**Frontend Routes (Next.js):**
| Route | Page | Status | Description |
|-------|------|--------|-------------|
| `/` | Landing | ✅ Live | Hero section with animated logo |
| `/about` | About | ✅ Live | Brand story and philosophy |
| `/events` | Events | 🚧 Coming Soon | Placeholder page |
| `/releases` | Releases | 🚧 Coming Soon | Placeholder page |
| `/*` | 404 | ✅ Live | Custom error page |

**Backend API Routes:**
| Endpoint | Method | Status | Description |
|----------|--------|--------|-------------|
| `/api/health` | GET | ✅ Live | API health check |
| `/api/pages/home` | GET | ✅ Live | Homepage data |
| `/api/pages/about` | GET | ✅ Live | About page data |
| `/api/events` | GET | 🚧 Placeholder | Future events endpoint |
| `/api/releases` | GET | 🚧 Placeholder | Future releases endpoint |

---

## 🎨 Design System

### **Color Palette**
- **Primary Black**: `#0a0a0a` (backgrounds)
- **Secondary Black**: `#1a1a1a` (cards, containers)
- **Accent Green**: `#4a7c59` (highlights, hover states)
- **Text Colors**: `#ffffff`, `#cccccc`, `#999999`
- **Border Gray**: `#333333`

### **Typography Scale**
- **Hero Titles**: Bebas Neue, 4rem+ (uppercase)
- **Section Headers**: Bebas Neue, 2-3rem
- **Body Text**: Inter, 1rem (weights: 300-700)
- **UI Elements**: Inter, 0.9rem (buttons, navigation)

### **Component Library**
- **Logo Breathing Animation** - 4s cycle, green glow
- **Glassmorphism Buttons** - Semi-transparent with backdrop blur
- **Social Icon Hover** - Lift + glow + sweep effects
- **Mobile Menu** - Slide-down with backdrop blur
- **Focus States** - Custom accessibility-compliant indicators

---

## 🚀 Future Development Roadmap

### **Phase 1: Content Foundation (1-2 months)**
- [ ] **Events Page** - Event listings, descriptions, dates
- [ ] **Releases Page** - Music catalog, streaming links, artist info
- [ ] **Content Management** - Admin interface for events/releases
- [ ] **Gallery Section** - Event photos, atmosphere documentation
- [ ] **Blog/News** - Updates, announcements, stories

### **Phase 2: User Engagement (2-3 months)**
- [ ] **Mailing List** - Newsletter signup with email automation
- [ ] **Social Media Integration** - Live feeds, sharing capabilities
- [ ] **Contact Forms** - Booking inquiries, press contact
- [ ] **Search Functionality** - Find events, releases, content
- [ ] **RSS Feeds** - Blog and news syndication

### **Phase 3: E-commerce & Ticketing (3-4 months)**
- [ ] **User Authentication** - Account creation, login system
- [ ] **Ticketing System** - Event ticket sales and management
- [ ] **Payment Processing** - Stripe integration, secure transactions
- [ ] **Order Management** - Purchase history, ticket delivery
- [ ] **Merchandise Store** - Branded items, music sales

### **Phase 4: Community Features (4-6 months)**
- [ ] **User Profiles** - Personal dashboards, preferences
- [ ] **Event Check-ins** - Attendance tracking, social proof
- [ ] **Reviews & Ratings** - Event feedback system
- [ ] **Waitlists** - Sold-out event management
- [ ] **VIP/Membership Tiers** - Exclusive access, perks

### **Phase 5: Advanced Features (6+ months)**
- [ ] **Mobile App** - React Native companion app
- [ ] **Live Streaming** - Event broadcasts, virtual attendance
- [ ] **AI Recommendations** - Personalized event suggestions
- [ ] **Analytics Dashboard** - Business intelligence, insights
- [ ] **Multi-language Support** - International expansion
- [ ] **API Development** - Third-party integrations

---

## 🛠️ Technical Considerations

### **Database Integration Ready**
Current architecture supports easy database addition:
- **Recommended**: Supabase (PostgreSQL + Auth + Real-time)
- **Alternative**: PlanetScale (MySQL), MongoDB Atlas
- **Structure**: Events, Users, Orders, Releases, Newsletter tables

### **Payment Processing**
- **Primary**: Stripe (recommended for events/tickets)
- **Alternative**: PayPal, Square
- **Requirements**: SSL, PCI compliance, webhook handling

### **Email Services**
- **Transactional**: Resend, SendGrid
- **Marketing**: Mailchimp, ConvertKit
- **Integration**: Newsletter signup, order confirmations

### **Media Handling**
- **Images**: Cloudinary, AWS S3
- **Audio/Video**: YouTube, Vimeo, SoundCloud embeds
- **Storage**: Vercel functions + external CDN

### **Performance Optimization**
- **Current**: Next.js static generation, code splitting, image optimization
- **Frontend**: Client-side routing, automatic bundle optimization
- **Backend**: Express.js with CORS, optimized JSON responses
- **Future**: Database caching, CDN, advanced image optimization
- **Monitoring**: Vercel Analytics, error tracking

---

## 📊 Deployment & Hosting

### **Current Setup (Development Ready)**
- **Frontend**: Next.js app ready for Vercel deployment
- **Backend**: Express.js API ready for Vercel Functions or Railway
- **Domain**: Ready for yugen.com.au
- **SSL**: Automatic HTTPS on deployment
- **CDN**: Global edge network via hosting platform

### **Deployment Options**

**Option 1: Vercel (Recommended)**
```bash
# Frontend
cd yugen-frontend && vercel --prod

# Backend  
cd yugen-backend && vercel --prod
```

**Option 2: Separate Platforms**
- **Frontend**: Vercel, Netlify (static)
- **Backend**: Railway, Render, Heroku

### **Scaling Considerations**
- **Vercel Pro**: $20/month (unlimited bandwidth)
- **Database**: $0-25/month (depending on service)
- **Email Services**: $0-50/month (based on volume)
- **Payment Processing**: 2.9% + 30¢ per transaction

---

## 🎵 Brand Alignment

### **"Beauty in the Unseen" Philosophy**
- **Hidden Elements** - Footer discovery, scroll interactions
- **Mysterious Aesthetic** - Dark colors, subtle animations
- **Gradual Revelation** - Progressive disclosure of information
- **Immersive Experience** - Full-screen visuals, atmospheric design

### **Underground Techno Identity**
- **Industrial Typography** - Bold, mechanical fonts
- **Minimal Interface** - Clean, uncluttered design
- **Atmospheric Media** - Background videos, ambient sounds
- **Community Focus** - Social connections, shared experiences

---

## 📞 Support & Maintenance

### **Regular Updates Needed**
- **Security patches** - Dependencies, server updates
- **Content updates** - Events, releases, news
- **Performance monitoring** - Load times, error rates
- **SEO optimization** - Search rankings, metadata

### **Backup Strategy**
- **Code**: Git repository (GitHub)
- **Database**: Automated daily backups
- **Media**: CDN redundancy
- **Configuration**: Environment variable documentation

---

**Last Updated**: July 15, 2025  
**Frontend**: Next.js 14 (React) - http://localhost:3000  
**Backend API**: Express.js - http://localhost:3001  
**Migration**: ✅ Complete - See MIGRATION_README.md for details  
**Contact**: info@yugen.com.au

*Evolved from underground movement to modern, scalable architecture.* 🎭✨