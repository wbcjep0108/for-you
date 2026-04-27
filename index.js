window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  if (window.scrollY > 100) {
    hero.classList.add("fade");
  } else {
    hero.classList.remove("fade");
  }
});

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.classList.add("hide");

    // remove from DOM after fade
    setTimeout(() => {
      splash.remove();
    }, 500);

  }, 5000);
});
const hint = document.querySelector(".scroll-hint");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.offsetHeight;

  const atBottom = scrollTop + windowHeight >= docHeight - 2;

  if (atBottom) {
    hint.classList.add("hide");
  } else {
    hint.classList.remove("hide");
  }
});

/* FADE IN + OUT ON SCROLL */
const faders = document.querySelectorAll(".marquee, .content-image");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 👈 this is the key
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});

const letter = document.querySelector(".letter-image");

const letterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.3
});

if (letter) {
  letterObserver.observe(letter);
}