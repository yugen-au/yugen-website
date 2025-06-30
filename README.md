# Yūgen Website - Node.js Version

Underground techno events and immersive experiences. Beauty in the unseen, catharsis where we dare not go.

## Project Status (Updated June 30, 2025)

**Current Version**: V2.0 - Node.js Migration Complete
**Status**: Production Ready

### Recent Updates
- ✅ Migrated from static HTML to Node.js with Express.js
- ✅ Implemented EJS templating for maintainable code
- ✅ Added server-side routing for future expansion
- ✅ Configured for easy deployment to Vercel/Railway/Render
- ✅ Preserved all original design and functionality
- ✅ Set up structure for future Events and Releases pages

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Production
```bash
npm install
npm start
```

## Technology Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Deployment**: Configured for Vercel (recommended)
- **Database Ready**: Structure in place for future database integration

## Project Structure

```
yugen-website/
├── server.js               # Main Express server
├── package.json            # Dependencies and scripts
├── vercel.json            # Vercel deployment configuration
├── views/                 # EJS templates
│   ├── partials/
│   │   ├── header.ejs     # Shared header with meta tags
│   │   ├── navigation.ejs # Navigation component
│   │   └── footer.ejs     # Shared footer
│   ├── index.ejs          # Landing page template
│   ├── about.ejs          # About page template
│   ├── 404.ejs            # Error page template
│   └── error.ejs          # Server error template
├── assets/                # Static assets (CSS, JS, images)
│   ├── css/style.css      # Original stylesheet preserved
│   ├── js/main.js         # Original JavaScript preserved
│   └── images/            # Logo, videos, graphics
├── public/                # Static files (robots.txt, sitemap.xml)
└── .env                   # Environment configuration
```
## Key Features

### Express.js Server
- Clean routing structure with dedicated handlers
- Error handling middleware
- Static file serving for assets
- Environment variable configuration

### EJS Templates
- Modular design with reusable partials
- Dynamic meta tags and page titles
- Active navigation state management
- SEO-friendly structured data

### Future-Ready Architecture
- Database integration ready (just add your preferred DB)
- API routes can be easily added
- Authentication middleware ready to implement
- Contact forms and user interactions prepared

## Routes

- `GET /` - Landing page with animated logo
- `GET /about` - About page with brand philosophy  
- `GET /events` - Placeholder (returns 404 for now)
- `GET /releases` - Placeholder (returns 404 for now)
- `404` - Custom error page with brand styling

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Railway
```bash
# Connect your GitHub repo to Railway
# Auto-deploys on push to main branch
```

### Render
```bash
# Connect GitHub repo
# Build command: npm install
# Start command: npm start
```

## Environment Variables

Create a `.env` file (already included):
```env
NODE_ENV=development
PORT=3000
SITE_URL=https://yugen.com.au
SITE_NAME=Yūgen
```

## What's Preserved

✅ **Exact same visual design** - Every animation, effect, and style maintained
✅ **Logo breathing animation** - SVG animations work identically  
✅ **Mobile responsiveness** - All breakpoints and interactions preserved
✅ **SEO optimization** - Meta tags, structured data, sitemaps maintained
✅ **Accessibility** - ARIA attributes and keyboard navigation intact

## What's Improved

✨ **Server-side rendering** - Better SEO and initial load performance
✨ **Modular templates** - Easy to maintain and extend
✨ **Environment configuration** - Easy deployment to any platform
✨ **Future expansion ready** - Database and API integration prepared
✨ **Professional deployment** - Production-ready server setup

## Next Steps

1. **Deploy to Vercel**: `npm run deploy:vercel`
2. **Add database**: Choose from Supabase, PlanetScale, or MongoDB Atlas
3. **Build Events page**: Create event management system
4. **Build Releases page**: Integrate with music platforms
5. **Add contact forms**: Email integration ready

## Migration Notes

- Original static files moved to backup
- All functionality preserved and enhanced
- Ready for immediate deployment
- Database integration points identified
- API endpoints can be added easily

---

**Original design by**: Yūgen Team  
**Node.js migration**: Complete  
**Status**: Production Ready  
**Next**: Deploy and scale! 🚀