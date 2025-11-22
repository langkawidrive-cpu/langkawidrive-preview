document.addEventListener('DOMContentLoaded', function(){
  const navButtons = document.querySelectorAll('.nav-btn');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  navButtons.forEach(btn=>{
    btn.addEventListener('click', ()=> {
      navButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-nav');
      document.querySelectorAll('.section, .hero').forEach(s=>s.classList.remove('active'));
      if(target === 'home') document.getElementById('home').classList.add('active');
      else if(target === 'dest') document.getElementById('dest').classList.add('active');
      else if(target === 'rent') document.getElementById('rent').classList.add('active');
      else if(target === 'stay') document.getElementById('stay').classList.add('active');
      else if(target === 'pkg') document.getElementById('pkg').classList.add('active');
      else if(target === 'contact') document.getElementById('contact').classList.add('active');
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });

  const exploreBtn = document.getElementById('exploreBtn');
  if(exploreBtn) exploreBtn.addEventListener('click', ()=> document.querySelector('[data-nav="dest"]').click());

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Terima kasih! Permintaan telah dihantar (demo). Kami akan hubungi anda melalui WhatsApp.');
      contactForm.reset();
    });
  }

  const callBtn = document.getElementById('callBtn');
  if(callBtn) callBtn.addEventListener('click', ()=> window.location.href = 'https://wa.me/60124785017');
});
