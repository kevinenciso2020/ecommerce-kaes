import{a as r}from"./api.Dr32-Ay1.js";import{c as i}from"./auth.store.DlADYsfT.js";import{e as t}from"./sanitize.Z0Zix3cv.js";const d=i.get(),c=window.location.pathname.split("/perfil/ordenes/")[1];async function p(){if(!d){document.getElementById("order-loading").style.display="none",document.getElementById("order-unauthorized").style.display="flex";return}try{const e=await r.orders.detail(c);if(e.user?.id!==d.id){document.getElementById("order-loading").style.display="none",document.getElementById("order-unauthorized").style.display="flex";return}document.getElementById("order-loading").style.display="none",document.getElementById("order-content").style.display="block",document.getElementById("order-id").textContent=e.id.slice(-6).toUpperCase(),document.getElementById("order-date").textContent=new Date(e.createdAt).toLocaleString("es-CO");const n=document.getElementById("order-status"),a=m[e.status];n.textContent=a?.label||e.status,n.className=`status-badge ${a?.class||""}`;const l=document.getElementById("order-items");l.innerHTML=(e.items||[]).map(s=>`
        <div class="item-row">
          <div class="item-info">
            <span class="item-name">${t(s.product?.name||"Producto")}</span>
            <span class="item-qty">Cantidad: ${s.quantity}</span>
          </div>
          <span class="item-price">$${(s.quantity*Number(s.price)).toLocaleString("es-CO")}</span>
        </div>
      `).join(""),document.getElementById("order-totals").innerHTML=`
        <div class="total-row"><span>Subtotal</span><span>$${Number(e.subtotal||0).toLocaleString("es-CO")}</span></div>
        <div class="total-row"><span>Descuento</span><span>-$${Number(e.discount||0).toLocaleString("es-CO")}</span></div>
        <div class="total-row"><span>Envío</span><span>$${Number(e.shipping||0).toLocaleString("es-CO")}</span></div>
        <div class="total-row total-final"><span>Total</span><span>$${Number(e.total).toLocaleString("es-CO")}</span></div>
      `;const o=document.getElementById("order-shipping");e.shippingAddress?o.innerHTML=`
          <p>${t(e.shippingAddress.street)}</p>
          <p>${t(e.shippingAddress.city)}, ${t(e.shippingAddress.state)}</p>
          <p>${t(e.shippingAddress.postalCode)}</p>
        `:o.innerHTML="<p>Retiro en tienda</p>"}catch(e){document.getElementById("order-loading").style.display="none",document.getElementById("error-message").textContent=e.message||"Error cargando la orden",document.getElementById("order-error").style.display="flex"}}const m={PENDING:{label:"Pendiente",class:"pending"},CONFIRMED:{label:"Confirmado",class:"confirmed"},PROCESSING:{label:"Procesando",class:"processing"},SHIPPED:{label:"Enviado",class:"shipped"},DELIVERED:{label:"Entregado",class:"delivered"},CANCELLED:{label:"Cancelado",class:"cancelled"},REFUNDED:{label:"Reembolsado",class:"refunded"}};p();
