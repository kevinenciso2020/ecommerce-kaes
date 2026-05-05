import{c as i,_ as s}from"./auth.store.DlADYsfT.js";import{cartCount as l}from"./cart.store.ByXEHm8g.js";import{a as c}from"./api.Dr32-Ay1.js";l.subscribe(t=>{const e=document.getElementById("cart-count");e&&(t>0?(e.textContent=String(t),e.style.display="flex"):e.style.display="none")});i.subscribe(t=>{const e=document.getElementById("auth-section");if(e)if(t){const r=t.role==="ADMIN"?"/admin":"/perfil",n=t.role==="ADMIN"?"Admin":t.name.split(" ")[0];e.innerHTML=`
        <a href="${r}" class="nav-link">${n}</a>
        <button id="header-logout" class="nav-link-btn" title="Cerrar sesión">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      `}else e.innerHTML=`
        <a href="/auth/login" class="nav-link">Iniciar sesión</a>
        <a href="/auth/register" class="btn-header">Crear cuenta</a>
      `});document.addEventListener("click",async t=>{if(!t.target.closest("#header-logout"))return;const{clearAuth:r}=await s(async()=>{const{clearAuth:o}=await import("./auth.store.DlADYsfT.js").then(a=>a.f);return{clearAuth:o}},[]),n=localStorage.getItem("refreshToken");if(r(),n)try{await c.auth.logout(n)}catch{}window.location.href="/"});document.getElementById("cart-toggle-btn")?.addEventListener("click",()=>{window.location.href="/carrito"});
