// Background Music Player

let audio;
let musicToggle;
let isPlaying = false;

// Initialize music player
function initMusicPlayer() {
    audio = document.getElementById('backgroundMusic');
    musicToggle = document.getElementById('musicToggle');

    if (!audio || !musicToggle) return;

    // Set initial volume
    audio.volume = 0.3;

    // Add click event to toggle button
    musicToggle.addEventListener('click', toggleMusic);

    // Add event listeners for audio states
    audio.addEventListener('play', onMusicPlay);
    audio.addEventListener('pause', onMusicPause);
    audio.addEventListener('ended', onMusicEnded);
    audio.addEventListener('error', onMusicError);

    // Auto-play attempt (may be blocked by browser)
    attemptAutoPlay();
}

// Toggle music play/pause
function toggleMusic() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Play music
function playMusic() {
    if (!audio) return;

    audio.play()
        .then(() => {
            isPlaying = true;
            updateToggleButton();
        })
        .catch(error => {
            console.log('Auto-play prevented:', error);
            // Show a gentle notification that user needs to interact
        });
}

// Pause music
function pauseMusic() {
    if (!audio) return;

    audio.pause();
    isPlaying = false;
    updateToggleButton();
}

// Update toggle button appearance
function updateToggleButton() {
    if (!musicToggle) return;

    if (isPlaying) {
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicToggle.setAttribute('aria-label', 'Tạm dừng nhạc');
    } else {
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicToggle.setAttribute('aria-label', 'Phát nhạc');
    }
}

// Attempt auto-play (may be blocked by browser policy)
function attemptAutoPlay() {
    // Try to play after a short delay to improve success rate
    setTimeout(() => {
        playMusic();
    }, 1000);

    // Also try on first user interaction
    const playOnInteraction = () => {
        if (!isPlaying) {
            playMusic();
        }
        // Remove listeners after first interaction
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });
    document.addEventListener('scroll', playOnInteraction, { once: true });
}

// Event handlers
function onMusicPlay() {
    isPlaying = true;
    updateToggleButton();
}

function onMusicPause() {
    isPlaying = false;
    updateToggleButton();
}

function onMusicEnded() {
    // Loop is already set in HTML, but this is a backup
    if (audio) {
        audio.currentTime = 0;
        playMusic();
    }
}

function onMusicError(e) {
    console.error('Error loading audio:', e);
    if (musicToggle) {
        musicToggle.style.display = 'none'; // Hide toggle if audio can't load
    }
}

// Volume control functions
function increaseVolume() {
    if (audio && audio.volume < 1) {
        audio.volume = Math.min(audio.volume + 0.1, 1);
    }
}

function decreaseVolume() {
    if (audio && audio.volume > 0) {
        audio.volume = Math.max(audio.volume - 0.1, 0);
    }
}

function setVolume(value) {
    if (audio && value >= 0 && value <= 1) {
        audio.volume = value;
    }
}

// Fade in/out functions
function fadeIn(duration = 2000) {
    if (!audio) return;

    const targetVolume = 0.3;
    const steps = 20;
    const stepDuration = duration / steps;
    const volumeIncrement = targetVolume / steps;

    audio.volume = 0;
    playMusic();

    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audio.volume = targetVolume;
        } else {
            audio.volume = Math.min(audio.volume + volumeIncrement, targetVolume);
            currentStep++;
        }
    }, stepDuration);
}

function fadeOut(duration = 2000) {
    if (!audio) return;

    const startVolume = audio.volume;
    const steps = 20;
    const stepDuration = duration / steps;
    const volumeDecrement = startVolume / steps;

    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            pauseMusic();
            audio.volume = startVolume;
        } else {
            audio.volume = Math.max(audio.volume - volumeDecrement, 0);
            currentStep++;
        }
    }, stepDuration);
}

// Save music preference to localStorage
function saveMusicPreference() {
    localStorage.setItem('weddingMusicPlaying', isPlaying.toString());
}

// Load music preference from localStorage
function loadMusicPreference() {
    const savedPreference = localStorage.getItem('weddingMusicPlaying');
    if (savedPreference === 'true') {
        playMusic();
    }
}

// Add keyboard controls
function addKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        // Space bar to toggle (when not typing in input)
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            toggleMusic();
        }
        // M key to toggle
        if (e.key === 'm' || e.key === 'M') {
            if (!e.target.matches('input, textarea')) {
                toggleMusic();
            }
        }
    });
}

// Pause music when page is hidden (tab switched, minimized)
function addVisibilityControl() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isPlaying) {
            pauseMusic();
            // Remember to resume when page becomes visible again
            document.addEventListener('visibilitychange', function resumeMusic() {
                if (!document.hidden) {
                    playMusic();
                    document.removeEventListener('visibilitychange', resumeMusic);
                }
            }, { once: true });
        }
    });
}

// Show notification for auto-play blocked
function showAutoPlayNotification() {
    const notification = document.createElement('div');
    notification.className = 'music-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: rgba(154, 121, 73, 0.95);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 999;
        font-size: 0.9rem;
        max-width: 300px;
        animation: slideInUp 0.5s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-music"></i>
        Nhấn nút phát nhạc để thưởng thức bài hát!
        <button onclick="this.parentElement.remove()" style="
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            float: right;
            margin-left: 10px;
        ">&times;</button>
    `;
    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initMusicPlayer();
        addKeyboardControls();
        // Uncomment if you want to pause when tab is hidden
        // addVisibilityControl();
        // Uncomment if you want to save music preference
        // loadMusicPreference();
    });
} else {
    initMusicPlayer();
    addKeyboardControls();
    // addVisibilityControl();
    // loadMusicPreference();
}

// Save preference before page unload (optional)
window.addEventListener('beforeunload', () => {
    // Uncomment if you want to save music preference
    // saveMusicPreference();
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        playMusic,
        pauseMusic,
        toggleMusic,
        setVolume
    };
}
