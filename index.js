/* CACHE ELEMENTS */
const hero = document.querySelector(".hero");
const splash = document.getElementById("splash");
const hint = document.querySelector(".scroll-hint");
const thirdSection = document.querySelector(".third-content");

/* HERO FADE */
window.addEventListener("scroll", () => {
  if (!hero) return;
  if (window.scrollY > 100) {
    hero.classList.add("fade");
  } else {
    hero.classList.remove("fade");
  }
});

/* SPLASH SCREEN */
window.addEventListener("load", () => {
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add("hide");
    setTimeout(() => {
      splash.remove();
    }, 500);
  }, 5000);
});

/* SCROLL HINT - Hide when third section is visible */
if (hint && thirdSection) {
  const hintObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hint.classList.add("hide");   
      } else {
        hint.classList.remove("hide"); 
      }
    });
  }, {
    threshold: 0
  });

  hintObserver.observe(thirdSection);
}

/* FADE IN + OUT ON SCROLL (MARQUEE + IMAGES) */
const faders = document.querySelectorAll(".marquee, .content-image");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 });
faders.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});

/* LETTER IMAGE */
const letter = document.querySelector(".letter-image");
if (letter) {
  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.3 });
  letterObserver.observe(letter);
}

/* THIRD IMAGE */
const us19 = document.querySelector(".us19-image");
if (us19) {
  const us19Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.3 });
  us19Observer.observe(us19);
}