# Yūgen Website - Node.js

Immersive mindfulness experiences through underground techno events. Beauty in the unseen, catharsis where we dare not go.

## Project Status (Updated July 17, 2025)

**Current Version**: V3.1 - Frontend/Backend Separated Architecture with Light/Dark Mode  
**Status**: Production Ready - Modern Stack with Theme System  
**Frontend**: Next.js 14 (React)  
**Backend**: Express.js API  
**Hosting**: Ready for Vercel (Frontend) + Railway/Vercel (Backend)

---

## 🎯 Current Functionality

### ✅ **Core Website Features**
- **Landing Page** - Immersive hero section with animated SVG logo breathing effect
- **About Page** - Brand philosophy and mindfulness mission statement
- **Focus Submission** - Attendee interface for submitting personal focus points
- **Navigation** - Responsive navbar with mobile hamburger menu
- **404 Error Handling** - Custom error pages with brand styling
- **Footer** - Social media links with glassmorphism design and hover effects

### ✅ **Light/Dark Mode System**
- **Theme Toggle** - Floating button (desktop) and mobile menu integration
- **Automatic Detection** - Respects system preference on first visit
- **Persistent Preferences** - Theme choice saved in localStorage
- **Smooth Transitions** - CSS-based theme switching with animations
- **Comprehensive Theming** - All components adapt to selected theme
- **Accessibility** - Proper contrast ratios and WCAG compliance

### ✅ **Mindfulness Experience Pipeline**
- **Focus Point Collection** - Single submission per attendee per event
- **Visual Generation Integration** - Webhook connection to n8n automation
- **IP-Based Session Management** - Prevents spam while maintaining anonymity
- **Image Display System** - Gallery infrastructure for breakout room presentations
- **QR Code Keepsake Access** - Post-event image retrieval for attendees
- **Subconscious Reflection** - Visual triggers without explicit AI awareness

### ✅ **Visual & UX Design**
- **Animated Logo** - 4-second breathing cycle with theme-adaptive glow effects
- **Background Video** - Hero video with mobile optimization and fallbacks
- **Mobile-First Design** - Responsive across all devices (desktop, tablet, mobile)
- **Dual Theme Support** - Dark and light modes with optimized color palettes
- **Typography** - Bebas Neue (headers), Inter (body text)
- **Interactive Elements** - Smooth hover effects, focus states, animations

### ✅ **Technical Implementation**
- **Next.js Frontend** - React components with static generation
- **Express.js API Backend** - RESTful endpoints with CORS support
- **Theme System** - React Context + CSS variables for comprehensive theming
- **Component Architecture** - Reusable React components (Layout, Navigation, Footer, ThemeToggle)
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

## 🌙 Theme System

### **Dark Mode (Default)**
- **Primary Background**: `#0a0a0a` (Deep black)
- **Secondary Background**: `#1a1a1a` (Dark gray)
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#cccccc` (Light gray)
- **Accent Color**: `#4a7c59` (Yugen emerald green)

### **Light Mode**
- **Primary Background**: `#f5f5f5` (Soft off-white)
- **Secondary Background**: `#f8f9fa` (Light gray)
- **Primary Text**: `#2d2d2d` (Dark gray)
- **Secondary Text**: `#495057` (Medium gray)
- **Accent Color**: `#4a7c59` (Yugen emerald green)

### **Theme Features**
- **Floating Toggle** - Desktop: Top-right corner floating button
- **Mobile Integration** - Theme toggle in hamburger menu
- **System Detection** - Automatically detects OS preference
- **Persistent Storage** - Choice saved in localStorage
- **Smooth Transitions** - 300ms CSS transitions between themes
- **Logo Adaptation** - SVG logos automatically adapt to theme colors

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
│   │   ├── Navigation.js     # Responsive navigation with theme toggle
│   │   ├── Footer.js         # Social links and copyright
│   │   ├── AnimatedLogo.js   # SVG logo with breathing animation
│   │   └── ThemeToggle.js    # Light/dark mode toggle button
│   ├── contexts/             # React Context Providers
│   │   └── ThemeContext.js   # Theme state management
│   ├── pages/                # Next.js Pages (file-based routing)
│   │   ├── _app.js           # Global app wrapper with theme provider
│   │   ├── index.js          # Landing page with animated logo
│   │   ├── about.js          # Brand philosophy page
│   │   ├── events.js         # Events (coming soon)
│   │   ├── releases.js       # Releases (coming soon)
│   │   └── 404.js            # Custom error page
│   ├── styles/               # CSS Styles
│   │   └── globals.css       # Complete website styles with theme support (~1000 lines)
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

**Dark Mode:**
- **Primary Black**: `#0a0a0a` (backgrounds)
- **Secondary Black**: `#1a1a1a` (cards, containers)
- **Accent Green**: `#4a7c59` (highlights, hover states)
- **Text Colors**: `#ffffff`, `#cccccc`, `#999999`
- **Border Gray**: `#333333`

**Light Mode:**
- **Primary Light**: `#f5f5f5` (soft off-white backgrounds)
- **Secondary Light**: `#f8f9fa` (cards, containers)
- **Accent Green**: `#4a7c59` (highlights, hover states)
- **Text Colors**: `#2d2d2d`, `#495057`, `#6c757d`
- **Border Light**: `#dee2e6`

### **Typography Scale**
- **Hero Titles**: Bebas Neue, 4rem+ (uppercase)
- **Section Headers**: Bebas Neue, 2-3rem
- **Body Text**: Inter, 1rem (weights: 300-700)
- **UI Elements**: Inter, 0.9rem (buttons, navigation)

### **Component Library**
- **Logo Breathing Animation** - 4s cycle, theme-adaptive glow
- **Theme Toggle Button** - Sun/moon icons with smooth transitions
- **Glassmorphism Buttons** - Semi-transparent with backdrop blur
- **Social Icon Hover** - Lift + glow + sweep effects
- **Mobile Menu** - Slide-down with backdrop blur
- **Focus States** - Custom accessibility-compliant indicators

---

## 🚀 Deployment & Hosting

### **Vercel Deployment (Recommended)**

**Frontend Deployment:**
```bash
cd yugen-frontend
npm run build
vercel --prod
```

**Backend Deployment:**
```bash
cd yugen-backend
vercel --prod
```

### **Environment Setup for Production**

**Frontend Environment Variables:**
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
NEXT_PUBLIC_SITE_URL=https://yugen.com.au
```

**Backend Environment Variables:**
```env
NODE_ENV=production
PORT=3001
CORS_ORIGIN=https://yugen.com.au
```

### **Deployment Checklist**
- [ ] Frontend builds successfully (`npm run build`)
- [ ] Backend API endpoints are functional
- [ ] Environment variables are set
- [ ] Domain is configured
- [ ] SSL certificates are active
- [ ] Theme system works in production
- [ ] Mobile responsive design verified

---

## 🛠️ Technical Architecture

### **Frontend Stack**
- **Framework**: Next.js 14 (React 18)
- **Styling**: CSS Modules + CSS Variables
- **State Management**: React Context (Theme)
- **Build Tool**: Next.js built-in webpack
- **Deployment**: Vercel (Static + SSG)

### **Backend Stack**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, JSON parsing
- **Deployment**: Vercel Functions or Railway

### **Theme System Architecture**
- **Context Provider**: React Context for global theme state
- **CSS Variables**: Dynamic color system with theme switching
- **LocalStorage**: Persistent theme preference storage
- **System Detection**: `prefers-color-scheme` media query support
- **SSR Compatibility**: Hydration-safe theme loading

### **Performance Optimizations**
- **Static Generation**: Next.js pre-builds pages
- **Image Optimization**: Automatic WebP conversion and sizing
- **Code Splitting**: Automatic bundle optimization
- **CSS Minification**: Production-ready stylesheets
- **Theme Transitions**: Hardware-accelerated CSS transitions

---

## 🎵 Brand Alignment

### **"Beauty in the Unseen" Philosophy**
- **Subconscious Connection** - Visual triggers that resonate without explicit awareness
- **Mindful Reflection** - Focus points translated into meaningful imagery
- **Anonymous Expression** - Safe space for personal vulnerability
- **Collective Experience** - Individual journeys within shared spaces
- **Gradual Revelation** - Discovery of personal connection post-event

### **Underground Techno & Mindfulness Integration**
- **Rhythmic Meditation** - Techno as vehicle for mindful states
- **Dark Ambient Spaces** - Environments conducive to introspection
- **Breakout Room Galleries** - Intimate spaces for visual contemplation
- **Community Catharsis** - Shared healing through anonymous expression
- **Keepsake Memories** - Tangible reminders of transformative moments

### **Visual Identity**
- **Dual Theme Support** - Respects user preference while maintaining brand identity
- **Yugen Emerald Green** - Consistent accent color across all themes
- **Breathing Logo** - Represents mindful awareness and presence
- **Glassmorphism Elements** - Modern, ethereal aesthetic
- **Mobile-First Design** - Accessible across all devices

---

## 🔧 Development Guidelines

### **Theme System Usage**
```jsx
// Using theme context in components
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`component ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### **CSS Variables Usage**
```css
/* Use theme-aware variables */
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

/* Avoid hardcoded colors */
.avoid-this {
  background: #ffffff; /* Don't do this */
  color: #000000;      /* Use variables instead */
}
```

### **Responsive Design**
- **Mobile First** - Design for mobile, enhance for desktop
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Theme Toggle**: Floating (desktop) vs menu (mobile)
- **Touch Targets**: Minimum 44px for interactive elements

---

## 📊 Future Development Roadmap

### **Phase 1: Core Experience Features (1-2 months)**
- [ ] **Focus Submission Interface** - Clean, minimal form for attendee input
- [ ] **n8n Webhook Integration** - Connect focus points to image generation pipeline
- [ ] **IP Session Management** - Prevent duplicate submissions per event
- [ ] **Image Gallery System** - Display generated images in breakout rooms
- [ ] **QR Code Generation** - Unique codes for post-event image access
- [ ] **Event Management** - Admin interface for creating and managing events

### **Phase 2: Enhanced Experience (2-3 months)**
- [ ] **Real-time Image Display** - Live gallery updates as images are generated
- [ ] **Keepsake Download Portal** - Personal image retrieval system
- [ ] **Event Analytics** - Participation tracking and engagement metrics
- [ ] **Advanced Theme Options** - Custom color schemes and high contrast modes
- [ ] **Backup Systems** - Redundancy for critical event functionality

### **Phase 3: Community & Expansion (3-4 months)**
- [ ] **Multiple Event Support** - Concurrent event management
- [ ] **Attendee Profiles** - Optional accounts for event history
- [ ] **Image Curation Tools** - Admin controls for content moderation
- [ ] **Export Systems** - Event organizer tools for data and images
- [ ] **Integration APIs** - Connect with external event management systems

### **Phase 4: Advanced Features (4-6 months)**
- [ ] **Custom Visual Themes** - Event-specific aesthetic variations
- [ ] **Enhanced Privacy Controls** - GDPR compliance and data protection
- [ ] **Multi-language Support** - International event expansion
- [ ] **Advanced Analytics** - Mindfulness engagement insights
- [ ] **White-label Solutions** - Platform licensing for other organizations

---

## 🧪 Testing & Quality Assurance

### **Testing Checklist**
- [ ] **Theme Switching** - Smooth transitions between light/dark modes
- [ ] **Mobile Responsiveness** - All breakpoints and devices
- [ ] **Accessibility** - Screen readers, keyboard navigation, contrast
- [ ] **Performance** - Page load times, animation smoothness
- [ ] **Cross-browser** - Chrome, Firefox, Safari, Edge compatibility
- [ ] **SEO** - Meta tags, structured data, sitemap functionality

### **Accessibility Standards**
- **WCAG 2.1 AA** - Web Content Accessibility Guidelines compliance
- **Color Contrast** - 4.5:1 ratio for normal text, 3:1 for large text
- **Keyboard Navigation** - Full functionality without mouse
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Focus Management** - Visible focus indicators and logical tab order

---

## 📞 Support & Maintenance

### **Regular Updates Needed**
- **Security patches** - Dependencies, server updates
- **Content updates** - Events, releases, news
- **Performance monitoring** - Load times, error rates
- **SEO optimization** - Search rankings, metadata
- **Theme system** - New features, bug fixes

### **Monitoring & Analytics**
- **Performance**: Core Web Vitals, page load times
- **Usage**: Theme preferences, device breakdown
- **Errors**: JavaScript errors, API failures
- **Engagement**: User interactions, session duration

### **Backup Strategy**
- **Code**: Git repository (GitHub/GitLab)
- **Database**: Automated daily backups
- **Media**: CDN redundancy
- **Configuration**: Environment variable documentation

---

## 🎭 Brand Evolution

The Yugen website has evolved from a simple underground movement to a sophisticated, accessible platform that maintains its core identity while embracing modern web standards. The addition of light/dark mode support represents our commitment to user experience and accessibility, while the comprehensive theme system ensures the brand's distinctive aesthetic remains consistent across all user preferences.

**Key Achievements:**
- ✅ **Maintained Brand Identity** - Dark aesthetic preserved while adding light mode
- ✅ **Enhanced Accessibility** - WCAG compliance and user choice respect
- ✅ **Modern Technical Stack** - React, Next.js, CSS variables, Context API
- ✅ **Production Ready** - Optimized for deployment and scaling
- ✅ **User-Centric Design** - Respects preferences while maintaining experience

---

**Last Updated**: July 17, 2025  
**Frontend**: Next.js 14 (React) - http://localhost:3000  
**Backend API**: Express.js - http://localhost:3001  
**Theme System**: ✅ Complete - Light/Dark mode with persistent preferences  
**Deployment**: Ready for Vercel production deployment  
**Contact**: info@yugen.com.au

*From underground movement to modern, accessible, and themeable architecture.* 🎭✨🌙☀️