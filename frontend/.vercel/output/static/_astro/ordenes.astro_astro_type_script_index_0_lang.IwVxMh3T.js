import{a as p}from"./api.Dr32-Ay1.js";import{c as m}from"./auth.store.DlADYsfT.js";import{s as g,e as d}from"./sanitize.Z0Zix3cv.js";let r=[],n=1,o=1;const i=m.get();!i||i.role!=="ADMIN"?document.getElementById("no-access").style.display="flex":(document.getElementById("admin-content").style.display="block",l(),$());async function l(e={}){try{const t=await p.admin.orders(e);r=t.orders.map(g),n=t.page,o=t.totalPages,E(),b()}catch(t){const a=document.getElementById("orders-tbody");a.innerHTML=`<tr><td colspan="6" class="error">${d(t.message)}</td></tr>`}}const c={PENDING:{label:"Pendiente",class:"pending"},CONFIRMED:{label:"Confirmado",class:"confirmed"},PROCESSING:{label:"Procesando",class:"processing"},SHIPPED:{label:"Enviado",class:"shipped"},DELIVERED:{label:"Entregado",class:"delivered"},CANCELLED:{label:"Cancelado",class:"cancelled"},REFUNDED:{label:"Reembolsado",class:"refunded"}};function E(){const e=document.getElementById("orders-tbody");if(r.length===0){e.innerHTML='<tr><td colspan="6" class="empty">No hay órdenes</td></tr>';return}e.innerHTML=r.map(t=>`
      <tr>
        <td><strong>#${t.id.slice(-6).toUpperCase()}</strong></td>
        <td>
          <div class="customer-info">
            <span class="customer-name">${d(t.user?.name||"—")}</span>
            <span class="customer-email">${d(t.user?.email||"")}</span>
          </div>
        </td>
        <td>$${Number(t.total).toLocaleString("es-CO")}</td>
        <td><span class="status-badge ${c[t.status]?.class||""}">${c[t.status]?.label||t.status}</span></td>
        <td>${new Date(t.createdAt).toLocaleDateString("es-CO")}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon view-btn" data-id="${t.id}" title="Ver detalle">👁️</button>
            <select class="status-select" data-id="${t.id}">
              <option value="PENDING" ${t.status==="PENDING"?"selected":""}>Pendiente</option>
              <option value="CONFIRMED" ${t.status==="CONFIRMED"?"selected":""}>Confirmado</option>
              <option value="PROCESSING" ${t.status==="PROCESSING"?"selected":""}>Procesando</option>
              <option value="SHIPPED" ${t.status==="SHIPPED"?"selected":""}>Enviado</option>
              <option value="DELIVERED" ${t.status==="DELIVERED"?"selected":""}>Entregado</option>
              <option value="CANCELLED" ${t.status==="CANCELLED"?"selected":""}>Cancelado</option>
              <option value="REFUNDED" ${t.status==="REFUNDED"?"selected":""}>Reembolsado</option>
            </select>
          </div>
        </td>
      </tr>
    `).join(""),document.querySelectorAll(".view-btn").forEach(t=>{t.addEventListener("click",()=>v(t.getAttribute("data-id")))}),document.querySelectorAll(".status-select").forEach(t=>{t.addEventListener("change",a=>y(a.target.getAttribute("data-id"),a.target.value))})}function b(){const e=document.getElementById("pagination");if(o<=1){e.innerHTML="";return}let t="";n>1&&(t+=`<button class="page-btn" data-page="${n-1}">←</button>`),t+=`<span class="page-info">Página ${n} de ${o}</span>`,n<o&&(t+=`<button class="page-btn" data-page="${n+1}">→</button>`),e.innerHTML=t,e.querySelectorAll(".page-btn").forEach(a=>{a.addEventListener("click",()=>l({page:a.getAttribute("data-page")}))})}function $(){document.getElementById("filter-status").addEventListener("change",e=>{l({status:e.target.value})}),document.getElementById("close-modal").addEventListener("click",u),document.getElementById("order-modal").addEventListener("click",e=>{e.target===e.currentTarget&&u()})}async function y(e,t){try{await p.admin.updateOrder(e,t),l()}catch(a){alert(a.message)}}async function v(e){const t=r.find(s=>s.id===e);if(!t)return;const a=document.getElementById("order-detail");a.innerHTML=`
      <div class="order-header">
        <p><strong>Orden #${t.id.slice(-6).toUpperCase()}</strong></p>
        <p>Fecha: ${new Date(t.createdAt).toLocaleString("es-CO")}</p>
      </div>
      <div class="order-customer">
        <h3>Cliente</h3>
        <p>${d(t.user?.name||"—")}</p>
        <p>${d(t.user?.email||"")}</p>
      </div>
      <div class="order-items">
        <h3>Items</h3>
        <table class="items-table">
          <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr></thead>
          <tbody>
            ${(t.items||[]).map(s=>`
              <tr>
                <td>${d(s.product?.name||"Producto")}</td>
                <td>${s.quantity}</td>
                <td>$${Number(s.price).toLocaleString("es-CO")}</td>
                <td>$${(s.quantity*Number(s.price)).toLocaleString("es-CO")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="order-totals">
        <p>Subtotal: $${Number(t.subtotal).toLocaleString("es-CO")}</p>
        <p>Descuento: $${Number(t.discount).toLocaleString("es-CO")}</p>
        <p>Envío: $${Number(t.shipping).toLocaleString("es-CO")}</p>
        <p><strong>Total: $${Number(t.total).toLocaleString("es-CO")}</strong></p>
      </div>
    `,document.getElementById("order-modal").style.display="flex"}function u(){document.getElementById("order-modal").style.display="none"}
