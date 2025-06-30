# Yūgen Website - Node.js

Underground techno events and immersive experiences. Beauty in the unseen, catharsis where we dare not go.

## Project Status (Updated June 30, 2025)

**Current Version**: V2.0 - Node.js Production Ready  
**Status**: Live and Deployed  
**Tech Stack**: Node.js, Express.js, EJS Templates  
**Hosting**: Vercel (Free Tier)

---

## 🎯 Current Functionality

### ✅ **Core Website Features**
- **Landing Page** - Immersive hero section with animated SVG logo breathing effect
- **About Page** - Brand philosophy and mission statement
- **Navigation** - Responsive navbar with mobile hamburger menu
- **404 Error Handling** - Custom error pages with brand styling
- **Footer** - Social media links with glassmorphism design and hover effects

### ✅ **Visual & UX Design**
- **Animated Logo** - 4-second breathing cycle with red glow effects
- **Background Video** - Hero video with mobile optimization and fallbacks
- **Mobile-First Design** - Responsive across all devices (desktop, tablet, mobile)
- **Dark Aesthetic** - Brand colors: #0a0a0a, #1a1a1a, #ff0000 accent
- **Typography** - Bebas Neue (headers), Inter (body text)
- **Interactive Elements** - Smooth hover effects, focus states, animations

### ✅ **Technical Implementation**
- **Express.js Server** - RESTful routing with proper error handling
- **EJS Templating** - Modular components (header, navigation, footer)
- **Static Asset Serving** - Optimized CSS, JavaScript, and media files
- **Environment Configuration** - Development and production ready
- **SEO Optimization** - Meta tags, Open Graph, structured data
- **PWA Ready** - Web app manifest, favicon suite, mobile optimization

### ✅ **Social & Branding**
- **Social Media Integration** - Email, Instagram, Facebook, SoundCloud, Bandcamp
- **Professional Favicon Suite** - ICO, SVG, PNG variants for all devices
- **Copyright & Legal** - Brand protection and attribution
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, screen reader support

---

## 🚀 Development Setup

### **Quick Start**
```bash
cd yugen-website
npm install
npm run dev
```

### **Available Commands**
```bash
npm run dev        # Development server with auto-restart
npm start          # Production server
vercel             # Deploy preview
vercel --prod      # Deploy to production
```

### **Environment Variables**
```env
NODE_ENV=development
PORT=3000
SITE_URL=https://yugen.com.au
SITE_NAME=Yūgen
```

---

## 📁 Project Structure

```
yugen-website/
├── server.js                 # Express.js server and routing
├── package.json              # Dependencies and scripts
├── vercel.json               # Vercel deployment configuration
├── .env                      # Environment variables
├── views/                    # EJS templates
│   ├── partials/
│   │   ├── header.ejs        # <head>, meta tags, favicons
│   │   ├── navigation.ejs    # Responsive navbar component
│   │   └── footer.ejs        # Social links and copyright
│   ├── index.ejs             # Landing page with animated logo
│   ├── about.ejs             # Brand philosophy page
│   ├── 404.ejs               # Custom error page
│   └── error.ejs             # Server error page
├── assets/                   # Static assets
│   ├── css/style.css         # Complete stylesheet (~600 lines)
│   ├── js/main.js            # Mobile menu & accessibility
│   └── images/               # Logo, video, favicon suite
├── public/                   # Static files
│   ├── robots.txt            # SEO directives
│   ├── sitemap.xml           # Site structure
│   └── site.webmanifest      # PWA configuration
└── README.md                 # This documentation
```

---

## 🛣️ Current Routes

| Route | Page | Status | Description |
|-------|------|--------|-------------|
| `/` | Landing | ✅ Live | Hero section with animated logo |
| `/about` | About | ✅ Live | Brand story and philosophy |
| `/events` | Events | 🚧 Placeholder | Returns 404 "coming soon" |
| `/releases` | Releases | 🚧 Placeholder | Returns 404 "coming soon" |
| `/*` | 404 | ✅ Live | Custom error page |

---

## 🎨 Design System

### **Color Palette**
- **Primary Black**: `#0a0a0a` (backgrounds)
- **Secondary Black**: `#1a1a1a` (cards, containers)
- **Accent Red**: `#ff0000` (highlights, hover states)
- **Text Colors**: `#ffffff`, `#cccccc`, `#999999`
- **Border Gray**: `#333333`

### **Typography Scale**
- **Hero Titles**: Bebas Neue, 4rem+ (uppercase)
- **Section Headers**: Bebas Neue, 2-3rem
- **Body Text**: Inter, 1rem (weights: 300-700)
- **UI Elements**: Inter, 0.9rem (buttons, navigation)

### **Component Library**
- **Logo Breathing Animation** - 4s cycle, red glow
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
- **Current**: Static assets, optimized images
- **Future**: Database caching, CDN, image optimization
- **Monitoring**: Vercel Analytics, error tracking

---

## 📊 Deployment & Hosting

### **Current Setup (Free)**
- **Hosting**: Vercel (100GB bandwidth/month)
- **Domain**: Ready for yugen.com.au
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

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

**Last Updated**: June 30, 2025  
**Live Site**: [Preview URL from Vercel]  
**Repository**: [GitHub Repository URL]  
**Contact**: info@yugen.com.au

*Ready to scale from underground movement to global phenomenon.* 🎭✨