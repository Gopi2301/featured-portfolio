(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=()=>{const n=document.querySelector(".header__bar"),s=document.querySelector(".mobile-nav"),r=document.querySelectorAll(".mobile-nav__link");let o=!1;n.addEventListener("click",()=>{o=!o,o?(s.style.display="flex",document.body.style.overflowY="hidden"):(s.style.display="none",document.body.style.overflowY="auto")}),r.forEach(e=>{e.addEventListener("click",()=>{o=!1,s.style.display="none",document.body.style.overflowY="auto"})})},i=()=>{const n=document.querySelectorAll(".header__sun");localStorage.getItem("theme")&&document.body.classList.add("light-mode");const r=()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?localStorage.setItem("theme","light"):localStorage.removeItem("theme")};n.forEach(o=>o.addEventListener("click",r))},a=()=>{const n=document.querySelectorAll(".lazy"),s=new IntersectionObserver((r,o)=>{r.forEach(e=>{if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.classList.remove("loading"),t.classList.add("loaded"),o.unobserve(e.target)}})});n.forEach(r=>{s.observe(r)})};l();i();a();
