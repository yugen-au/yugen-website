import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001; // Different port for API

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CORS_ORIGIN 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.get('/api/pages/home', (req, res) => {
  res.json({
    title: 'Yūgen - Beauty in the Unseen',
    description: 'Underground techno events and immersive experiences. Catharsis where we dare not go.',
    content: {
      subtitle: 'Beauty in the unseen, catharsis where we dare not go.',
      buttons: [
        { text: 'Events', subtext: 'Coming Soon', href: '/events' },
        { text: 'Releases', subtext: 'Coming Soon', href: '/releases' }
      ]
    }
  });
});

app.get('/api/pages/about', (req, res) => {
  res.json({
    title: 'About - Yūgen',
    description: 'Learn about Yūgen\'s underground techno events and immersive storytelling experiences',
    content: {
      title: 'About',
      paragraphs: [
        'Yūgen (/ˈjuːɡən/) is where music, movement, and immersive storytelling converge to create transformative experiences.',
        'We believe **techno is more ritual than genre**. Through carefully crafted environments, we create transformative experiences.',
        'This is **beauty in darkness**. A profound, mysterious sense of the universe\'s beauty, especially that which goes unseen.'
      ]
    }
  });
});

// Future API endpoints (placeholders)
app.get('/api/events', (req, res) => {
  res.json({ 
    events: [],
    message: 'Events coming soon'
  });
});

app.get('/api/releases', (req, res) => {
  res.json({ 
    releases: [],
    message: 'Releases coming soon'
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Yugen API Server',
    status: 'running',
    version: '3.0',
    endpoints: {
      health: '/api/health',
      home: '/api/pages/home',
      about: '/api/pages/about',
      events: '/api/events',
      releases: '/api/releases'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'Yugen API',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Yūgen API server running at http://localhost:${PORT}`);
});
