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
  const portraitWrap = document.querySelector(".portrait-wrap");

  if (portraitWrap && window.matchMedia("(hover: none), (pointer: coarse), (any-pointer: coarse)").matches) {
    portraitWrap.addEventListener("click", () => {
      portraitWrap.classList.toggle("is-alternate");
    });
  }

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.open = false;
    });
  });

  const sectionLinks = document.querySelectorAll('.nav a[href^="#"], .mobile-nav a[href^="#"]');
  const observedSections = [...document.querySelectorAll(".panel[id]")];

  function setActiveSection(sectionId) {
    sectionLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${sectionId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const activeSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeSection) setActiveSection(activeSection.target.id);
    }, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  let previousScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY !== previousScrollY) {
      document.documentElement.dataset.scrollDirection = currentScrollY < previousScrollY ? "up" : "down";
      previousScrollY = currentScrollY;
    }

    if (currentScrollY < 100) {
      sectionLinks.forEach((link) => link.removeAttribute("aria-current"));
    }
  }, { passive: true });

  const indiaTimeEl = document.getElementById("india-time");
  const indiaFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  let clockTimeout;

  function updateClock() {
    const now = new Date();
    if (indiaTimeEl) indiaTimeEl.textContent = indiaFormatter.format(now);

    // Align each update to the next whole second and always derive from the
    // current device clock, so delays or background-tab throttling don't drift.
    clearTimeout(clockTimeout);
    clockTimeout = setTimeout(updateClock, 1000 - (Date.now() % 1000));
  }

  updateClock();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateClock();
  });
  window.addEventListener("pageshow", updateClock);
});
