function toggleMenu(){const n=document.querySelector(".nav");if(n){n.style.display=n.style.display==="flex"?"none":"flex"}}
function subscribe(e){e.preventDefault();alert("Subscribed! Weekly AI & Tech tips coming your way.");e.target.reset();return false}
document.addEventListener("DOMContentLoaded",()=>{
const bar=document.getElementById("progress-bar");
if(bar)window.addEventListener("scroll",()=>{const s=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=Math.min(s/h*100,100)+"%"});
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const t=document.querySelector(a.getAttribute("href"));if(t)t.scrollIntoView({behavior:"smooth",block:"start"})})});
});
