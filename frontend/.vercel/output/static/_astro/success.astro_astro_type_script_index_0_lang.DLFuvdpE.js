import{a}from"./api.Dr32-Ay1.js";const t=new URLSearchParams(window.location.search);t.get("payment_status");const r=t.get("external_reference"),o=document.getElementById("order-info");r&&o&&a.orders.detail(r).then(e=>{o.innerHTML=`
          <p class="order-id">Pedido #${e.id.slice(-8).toUpperCase()}</p>
          <p class="order-total">Total: $${Number(e.total).toLocaleString("es-CO")}</p>
        `}).catch(e=>{console.error("Error cargando orden:",e)});
