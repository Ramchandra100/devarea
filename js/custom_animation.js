document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el   = entry.target;
        const cls  = el.getAttribute("data-animate");
        const wait = parseInt(el.getAttribute("data-delay") || "0", 10);

        setTimeout(() => {
          el.classList.add(cls);
        }, wait);

        observer.unobserve(el); // run once
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
});