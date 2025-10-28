// Photo Gallery with Lightbox

// Sample gallery images (using placeholder images)
// Replace these URLs with your actual wedding photos
const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
        alt: 'Wedding Photo 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
        alt: 'Wedding Photo 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
        alt: 'Wedding Photo 3'
    },
    {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
        alt: 'Wedding Photo 4'
    },
    {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
        alt: 'Wedding Photo 5'
    },
    {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
        alt: 'Wedding Photo 6'
    },
    {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
        alt: 'Wedding Photo 7'
    },
    {
        url: 'https://images.unsplash.com/photo-1525258437315-a5c9d75a8f6e?w=800',
        alt: 'Wedding Photo 8'
    },
    {
        url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800',
        alt: 'Wedding Photo 9'
    },
    {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        alt: 'Wedding Photo 10'
    },
    {
        url: 'https://images.unsplash.com/photo-1594735117914-c56478dfbbef?w=800',
        alt: 'Wedding Photo 11'
    },
    {
        url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
        alt: 'Wedding Photo 12'
    },
    {
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800',
        alt: 'Wedding Photo 13'
    },
    {
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800',
        alt: 'Wedding Photo 14'
    },
    {
        url: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800',
        alt: 'Wedding Photo 15'
    },
    {
        url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
        alt: 'Wedding Photo 16'
    },
    {
        url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
        alt: 'Wedding Photo 17'
    },
    {
        url: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800',
        alt: 'Wedding Photo 18'
    },
    {
        url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800',
        alt: 'Wedding Photo 19'
    },
    {
        url: 'https://images.unsplash.com/photo-1490712828408-13b0e18cd825?w=800',
        alt: 'Wedding Photo 20'
    }
];

let currentImageIndex = 0;

// Initialize gallery
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Clear existing content
    galleryGrid.innerHTML = '';

    // Create gallery items
    galleryImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });

    // Initialize lightbox
    initLightbox();
}

// Create gallery item element
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item animate-on-scroll';
    item.setAttribute('data-index', index);

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = '<i class="fas fa-search-plus"></i>';

    item.appendChild(img);
    item.appendChild(overlay);

    // Add click event to open lightbox
    item.addEventListener('click', () => openLightbox(index));

    return item;
}

// Initialize lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (!lightbox || !lightboxImg) return;

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Previous image
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });
    }

    // Next image
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Open lightbox with specific image
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    if (lightbox && lightboxImg) {
        lightboxImg.src = galleryImages[currentImageIndex].url;
        lightboxImg.alt = galleryImages[currentImageIndex].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Show previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

// Update lightbox image
function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) {
        // Add fade effect
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = galleryImages[currentImageIndex].url;
            lightboxImg.alt = galleryImages[currentImageIndex].alt;
            lightboxImg.style.opacity = '1';
        }, 150);
    }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPreviousImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('.gallery-item img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Add smooth transition to lightbox image
function addLightboxTransition() {
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) {
        lightboxImg.style.transition = 'opacity 0.3s ease';
    }
}

// Add touch swipe support for mobile
function addTouchSupport() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                showNextImage();
            } else {
                // Swipe right - previous image
                showPreviousImage();
            }
        }
    }
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initGallery();
        addLightboxTransition();
        addTouchSupport();
        setupLazyLoading();
    });
} else {
    initGallery();
    addLightboxTransition();
    addTouchSupport();
    setupLazyLoading();
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        galleryImages,
        openLightbox,
        closeLightbox
    };
}
