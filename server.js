import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static files from root for robots.txt, sitemap.xml, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Yūgen - Beauty in the Unseen',
    description: 'Underground techno events and immersive experiences. Catharsis where we dare not go.',
    currentPage: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About - Yūgen',
    description: 'Learn about Yūgen\'s underground techno events and immersive storytelling experiences',
    currentPage: 'about'
  });
});

// Placeholder routes for future development
app.get('/events', (req, res) => {
  res.render('404', {
    title: 'Events - Coming Soon',
    description: 'Yūgen events are coming soon',
    currentPage: 'events'
  });
});

app.get('/releases', (req, res) => {
  res.render('404', {
    title: 'Releases - Coming Soon', 
    description: 'Yūgen releases are coming soon',
    currentPage: 'releases'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found',
    currentPage: '404'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: '500 - Server Error',
    description: 'An internal server error occurred',
    currentPage: 'error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`Yūgen website running at http://localhost:${PORT}`);
});
