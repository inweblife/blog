document.addEventListener('DOMContentLoaded', () => {
    // 1. ГОДИНА В ФУТЕРА
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. МЕНЮ
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Затваряне при клик
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('nav-active');
            }
        });
    });

    // 3. СЪГЛАСИЕ ЗА БИСКВИТКИ
    const CONSENT_KEY = 'cookie_consent';
    const consentChoice = localStorage.getItem(CONSENT_KEY);

    function updateAnalyticsConsent(granted) {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                analytics_storage: granted ? 'granted' : 'denied'
            });
        }
    }

    if (consentChoice === 'rejected') {
        updateAnalyticsConsent(false);
    } else if (!consentChoice) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <p>Този сайт използва бисквитки за анализ на трафика (Google Analytics). Приемате ли?</p>
            <div class="cookie-banner-actions">
                <button type="button" class="cookie-btn cookie-btn-accept">Приемам</button>
                <button type="button" class="cookie-btn cookie-btn-reject">Отказвам</button>
            </div>
        `;
        document.body.appendChild(banner);

        banner.querySelector('.cookie-btn-accept').addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'accepted');
            banner.remove();
        });
        banner.querySelector('.cookie-btn-reject').addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'rejected');
            updateAnalyticsConsent(false);
            banner.remove();
        });
    }
});