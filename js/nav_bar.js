//footer
document.getElementById('year').textContent = new Date().getFullYear();

//custom animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const cls = el.getAttribute("data-animate");
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

function shareNow() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Check this out!",
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this browser. Copy link: " + window.location.href);
  }
}

// Preloader functionality
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
      preloader.classList.add('hidden');
    }, 500); // Adjust timing as needed
  });