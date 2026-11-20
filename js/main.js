/**
 * Global Defense & Foreign Policy Research Assistant
 * AI Assistant: Kissinger
 * Client-side JavaScript (Vanilla JS - No external libraries required)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link (especially helpful on mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Active Section Highlighting in Navigation on Scroll
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; // offset for navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  // 3. Toggle Sample Dialogue Preview in Assistant Section
  const toggleBtn = document.getElementById('toggleSamplePreviewBtn');
  const samplePanel = document.getElementById('samplePreviewPanel');

  if (toggleBtn && samplePanel) {
    toggleBtn.addEventListener('click', () => {
      if (samplePanel.style.display === 'none') {
        samplePanel.style.display = 'block';
        toggleBtn.textContent = 'Hide Sample Dialogue Preview';
      } else {
        samplePanel.style.display = 'none';
        toggleBtn.textContent = 'Show Sample Dialogue Preview';
      }
    });
  }

  // 4. Click to Copy Prompt Cards
  const promptCards = document.querySelectorAll('.prompt-card');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout;

  function showToast(message) {
    if (!toastNotice) return;
    if (toastMessage) {
      toastMessage.textContent = message;
    }
    toastNotice.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  promptCards.forEach(card => {
    card.addEventListener('click', () => {
      const promptText = card.getAttribute('data-prompt');
      if (!promptText) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(promptText)
          .then(() => {
            showToast('Prompt copied to clipboard! Paste into Kissinger.');
          })
          .catch(() => {
            fallbackCopyText(promptText);
          });
      } else {
        fallbackCopyText(promptText);
      }
    });
  });

  // Fallback for browsers / environments where navigator.clipboard might be restricted
  function fallbackCopyText(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Prompt copied to clipboard! Paste into Kissinger.');
    } catch (err) {
      showToast('Selected prompt: ' + text.substring(0, 35) + '...');
    }
    document.body.removeChild(tempInput);
  }
});
