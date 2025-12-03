// script.js - shared by all pages

function openNav(){ document.getElementById('mySidebar').style.width='250px'; }
function closeNav(){ document.getElementById('mySidebar').style.width='0'; }

// Keyboard navigation: Left = Back, Right = Next
document.addEventListener('keydown', (e)=>{
  if(e.key === "ArrowRight") {
    const next = document.querySelector('[data-next]');
    if(next) window.location = next.getAttribute('data-next');
  } else if(e.key === "ArrowLeft") {
    const prev = document.querySelector('[data-prev]');
    if(prev) window.location = prev.getAttribute('data-prev');
  }
});

// Optional: smooth transitions when clicking next/back to show quick fade
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.btn');
  if(btn && btn.dataset.go){
    const url = btn.dataset.go;
    document.body.style.transition = 'opacity .25s';
    document.body.style.opacity = '0';
    setTimeout(()=> window.location = url, 250);
  }
});
