// Invitation Flow Controller

// Elements
const loadingScreen = document.getElementById('loadingScreen');
const invitationCover = document.getElementById('invitationCover');
const invitationOpened = document.getElementById('invitationOpened');
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const confirmBtn = document.getElementById('confirmBtn');
const weddingInfoBtn = document.getElementById('weddingInfoBtn');

// Initialize
function init() {
    // Simulate loading
    setTimeout(() => {
        hideLoading();
    }, 2000);

    // Event listeners
    if (envelope) {
        envelope.addEventListener('click', openInvitation);
    }

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'index.html#rsvp';
        });
    }

    if (weddingInfoBtn) {
        weddingInfoBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

// Hide loading screen
function hideLoading() {
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            showCover();
        }, 500);
    }
}

// Show invitation cover
function showCover() {
    if (invitationCover) {
        invitationCover.classList.add('active');
    }
}

// Open invitation (reveal two sides)
function openInvitation() {
    if (invitationCover && invitationOpened && envelope) {
        // Prevent multiple clicks
        envelope.style.pointerEvents = 'none';

        // Stop the bouncing animation
        if (envelopeContainer) {
            envelopeContainer.style.animation = 'none';
        }

        // Add clicked class to trigger envelope opening animation
        envelope.classList.add('clicked');

        // Start fading out the cover
        setTimeout(() => {
            invitationCover.classList.add('opening');
        }, 800);

        // Show the opened invitation with card reveal animation
        setTimeout(() => {
            invitationCover.style.display = 'none';
            invitationOpened.classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
    }
}

// Check if coming back from main website
function checkNavigation() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skip') === 'true') {
        // Skip directly to opened invitation
        if (loadingScreen) loadingScreen.style.display = 'none';
        if (invitationCover) invitationCover.style.display = 'none';
        if (invitationOpened) {
            invitationOpened.style.display = 'block';
            invitationOpened.classList.add('active');
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        init();
        checkNavigation();
    });
} else {
    init();
    checkNavigation();
}

// Add keyboard support
document.addEventListener('keydown', (e) => {
    // Press Enter or Space on cover to open
    if ((e.key === 'Enter' || e.key === ' ') && invitationCover && invitationCover.classList.contains('active')) {
        if (invitationOpened && !invitationOpened.classList.contains('active') && envelope) {
            e.preventDefault();
            openInvitation();
        }
    }
});

// Add touch support for mobile
if (envelope) {
    envelope.addEventListener('touchstart', function(e) {
        if (invitationOpened && !invitationOpened.classList.contains('active')) {
            e.preventDefault();
            openInvitation();
        }
    }, { passive: false });
}
