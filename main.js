
const btn=document.querySelector('.menu-toggle');const mm=document.querySelector('.mobile-menu');if(btn&&mm){btn.addEventListener('click',()=>{mm.classList.toggle('open');btn.setAttribute('aria-expanded',mm.classList.contains('open'))});}
document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq details').forEach(o=>{if(o!==d)o.open=false})}));
