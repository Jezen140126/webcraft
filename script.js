const nav=document.getElementById("navbar");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>20));

menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});

document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const WA_NUMBER="628213463641"; // GANTI dengan nomor WhatsApp kamu, tanpa + atau 0 di depan.

document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const service=document.getElementById("service").value;
  const message=document.getElementById("message").value.trim();
  const text=`Halo WebCraft!%0A%0ASaya ${encodeURIComponent(name)}.%0A%0ASaya tertarik dengan jasa: ${encodeURIComponent(service)}.%0A%0AKebutuhan saya:%0A${encodeURIComponent(message)}%0A%0AMohon info lebih lanjut.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`,"_blank","noopener");
});
