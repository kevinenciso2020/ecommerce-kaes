import{c as o,b as r}from"./auth.store.DlADYsfT.js";import{a as l}from"./api.Dr32-Ay1.js";import{e as n}from"./sanitize.Z0Zix3cv.js";const a=o.get();a?(document.getElementById("perfil-content").style.display="block",document.getElementById("user-info").innerHTML=`
      <div class="info-row"><span class="info-label">Nombre</span><span>${n(a.name)}</span></div>
      <div class="info-row"><span class="info-label">Email</span><span>${n(a.email)}</span></div>
      <div class="info-row"><span class="info-label">Rol</span><span>${a.role==="ADMIN"?"Administrador":"Cliente"}</span></div>
    `,l.orders.list().then(e=>{const t=document.getElementById("orders-list");if(!e.length){t.innerHTML='<p class="empty-text">No tienes órdenes aún</p>';return}t.innerHTML=e.map(s=>`
        <a href="/perfil/ordenes/${s.id}" class="order-row">
          <span class="order-id">#${s.id.slice(-6).toUpperCase()}</span>
          <span class="order-date">${new Date(s.createdAt).toLocaleDateString("es-CO")}</span>
          <span class="badge badge-gray">${n(s.status)}</span>
          <span class="order-total">$${Number(s.total).toLocaleString("es-CO")}</span>
        </a>
      `).join("")}).catch(()=>{document.getElementById("orders-list").innerHTML='<p class="empty-text">Error cargando órdenes</p>'}),document.getElementById("logout-btn")?.addEventListener("click",()=>{const e=localStorage.getItem("refreshToken");r(),e&&l.auth.logout(e).catch(()=>{}),window.location.href="/"})):document.getElementById("perfil-empty").style.display="flex";
