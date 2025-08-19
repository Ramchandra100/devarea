// Navbar shrink on scroll
(function(){
  const nav = document.querySelector('.custom-navbar');
  const onScroll = () => {
    if(window.scrollY > 10){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  };
  onScroll();
  window.addEventListener('scroll', onScroll);
})();

// Animated counters (metrics)
(function(){
  const counters = document.querySelectorAll('.counter');
  let started = false;
  const startCounters = () => {
    if (started) return;
    const section = document.querySelector('.metrics');
    if(!section) return;
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      started = true;
      counters.forEach(el=>{
        const target = +el.dataset.target;
        let val = 0;
        const step = Math.max(1, Math.floor(target/120));
        const tick = () => {
          val += step;
          if(val >= target){ el.textContent = target.toLocaleString(); }
          else { el.textContent = val.toLocaleString(); requestAnimationFrame(tick); }
        };
        requestAnimationFrame(tick);
      });
    }
  };
  startCounters();
  window.addEventListener('scroll', startCounters);
})();
