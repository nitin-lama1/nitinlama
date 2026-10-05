const phrases = [
  "hi there",
  "hola",
  "नमस्ते",
];

const typingEl = document.getElementById("typing");

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingEl) return;
  const phrase = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    typingEl.textContent = phrase.slice(0, charIndex);

    if (charIndex === phrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }

    setTimeout(typeLoop, 105);
  } else {
    charIndex--;
    typingEl.textContent = phrase.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 450);
      return;
    }

    setTimeout(typeLoop, 55);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (typingEl) setTimeout(typeLoop, 700);

  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.open = false;
    });
  });

  const indiaTimeEl = document.getElementById("india-time");
  const utcTimeEl = document.getElementById("utc-time");

  const timeFormatter = (timeZone, locale) => new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const indiaFormatter = timeFormatter("Asia/Kolkata", "en-IN");
  const utcFormatter = timeFormatter("UTC", "en-GB");
  let clockTimeout;

  function updateClocks() {
    const now = new Date();
    if (indiaTimeEl) indiaTimeEl.textContent = indiaFormatter.format(now);
    if (utcTimeEl) utcTimeEl.textContent = utcFormatter.format(now);

    // Align each update to the next whole second and always derive from the
    // current device clock, so delays or background-tab throttling don't drift.
    clearTimeout(clockTimeout);
    clockTimeout = setTimeout(updateClocks, 1000 - (Date.now() % 1000));
  }

  updateClocks();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateClocks();
  });
  window.addEventListener("pageshow", updateClocks);
});
