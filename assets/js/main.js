// Yūgen Website JavaScript
// Handles smooth interactions, loading animations, accessibility, and mobile menu

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoadingAnimations();
    initNavbarEffects();
    initMobileMenu();
    initSmoothScrolling();
    initAccessibility();
    initVideoHandling();
    
    console.log('Yūgen website initialized');
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (mobileToggle && navLinks) {
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-open');
            
            // Update aria-expanded for accessibility
            const isOpen = navLinks.classList.contains('mobile-open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            
            // Change icon
            mobileToggle.textContent = isOpen ? '✕' : '☰';
        });
        
        // Close menu when clicking nav links
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
                mobileToggle.focus();
            }
        });
        
        // Set initial aria-expanded
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
}

// Loading animations
function initLoadingAnimations() {
    const loadingElements = document.querySelectorAll('.loading');
    
    loadingElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 200);
    });
}

// Navbar scroll effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove backdrop blur based on scroll position
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Accessibility enhancements
function initAccessibility() {
    // Improve keyboard navigation without adding outlines (we have custom focus styles)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Ensure focus is visible for screen readers but not visually intrusive
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        // Add aria-label if missing for buttons without text
        if (element.tagName === 'BUTTON' && !element.textContent.trim() && !element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', 'Interactive button');
        }
    });
}

// Video handling and optimization
function initVideoHandling() {
    const video = document.querySelector('.background-video');
    
    if (video) {
        // Pause video on mobile to save bandwidth
        if (window.innerWidth <= 768) {
            video.pause();
            video.style.display = 'none';
        }
        
        // Handle video loading errors gracefully
        video.addEventListener('error', function() {
            console.warn('Background video failed to load');
            // Hide video container if it fails to load
            this.style.display = 'none';
        });
        
        // Optimize video playback
        video.addEventListener('loadeddata', function() {
            this.style.opacity = '0.3';
        });
        
        // Pause video when tab is not visible (performance optimization)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(e => console.warn('Video autoplay prevented'));
            }
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced scroll performance
const optimizedScrollHandler = debounce(initNavbarEffects, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical resources
function preloadCriticalResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

// Error handling for development
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
});

// Performance monitoring (development only)
if (window.performance) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}
