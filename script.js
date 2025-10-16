// Toggle menu (mobile)
document.getElementById('navToggle')?.addEventListener('click', ()=>{
    const nav = document.getElementById('mainNav');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
  document.getElementById('navToggle2')?.addEventListener('click', ()=>{
    const nav = document.getElementById('mainNav2');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
  
  // Fill year in footer
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
  document.getElementById('year2') && (document.getElementById('year2').textContent = new Date().getFullYear());
  