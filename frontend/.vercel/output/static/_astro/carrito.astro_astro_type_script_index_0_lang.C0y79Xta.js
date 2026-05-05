import{cartItems as u,updateQuantity as p,removeFromCart as y,cartTotal as m}from"./cart.store.ByXEHm8g.js";import{a as g}from"./api.Dr32-Ay1.js";import{b}from"./sanitize.Z0Zix3cv.js";const $=o=>{const e=o.map(b),a=m.get(),n=o.length===0,l=document.getElementById("cart-empty"),c=document.getElementById("cart-content");if(!l||!c||(l.style.display=n?"flex":"none",c.style.display=n?"none":"grid",n))return;const s=document.getElementById("cart-items-list");s&&(s.innerHTML=e.map(t=>`
        <div class="cart-item" data-id="${t.id}" data-size="${t.size||""}" data-color="${t.color||""}">
          <div class="item-image">
            ${t.image?`<img src="${t.image}" alt="${t.name}" />`:'<div class="item-image-placeholder">📦</div>'}
          </div>
          <div class="item-details">
            <h3 class="item-name">${t.name}</h3>
            <div class="item-variants">
              ${t.size?`<span class="variant-tag">Talla: ${t.size}</span>`:""}
              ${t.color?`<span class="variant-tag">Color: ${t.color}</span>`:""}
            </div>
            <p class="item-price">$${Number(t.price).toLocaleString("es-CO")}</p>
          </div>
          <div class="item-controls">
            <div class="quantity-selector">
              <button class="qty-btn" onclick="changeItemQty('${t.id}','${t.size||""}','${t.color||""}',-1)">−</button>
              <span>${t.quantity}</span>
              <button class="qty-btn" onclick="changeItemQty('${t.id}','${t.size||""}','${t.color||""}',1)">+</button>
            </div>
            <p class="item-subtotal">$${Number(t.price*t.quantity).toLocaleString("es-CO")}</p>
            <button class="remove-btn" onclick="removeItem('${t.id}','${t.size||""}','${t.color||""}')">
              Eliminar
            </button>
          </div>
        </div>
      `).join(""));const i="$"+Number(a).toLocaleString("es-CO"),r=document.getElementById("summary-subtotal"),d=document.getElementById("summary-total");r&&(r.textContent=i),d&&(d.textContent=i)};u.subscribe($);window.changeItemQty=(o,e,a,n)=>{const c=u.get().find(s=>s.id===o&&s.size===e&&s.color===a);c&&p(o,e==="null"?null:e,a==="null"?null:a,c.quantity+n)};window.removeItem=(o,e,a)=>{y(o,e==="null"?null:e,a==="null"?null:a)};document.getElementById("apply-coupon-btn")?.addEventListener("click",async()=>{const o=document.getElementById("coupon-input").value.trim(),e=document.getElementById("coupon-message"),a=document.getElementById("apply-coupon-btn");if(!(!o||!e)){a.disabled=!0,a.textContent="Validando...";try{const n=m.get(),l=await g.coupons.validate(o,n);localStorage.setItem("couponCode",l.code),localStorage.setItem("couponDiscount",JSON.stringify(l));const c=l.type==="PERCENTAGE"?`${l.value}%`:`$${Number(l.discount).toLocaleString("es-CO")}`;e.textContent=`Cupón aplicado: -${c}`,e.style.display="block",e.style.background="#dcfce7",e.style.color="#166534",v(n,l.discount)}catch(n){localStorage.removeItem("couponCode"),localStorage.removeItem("couponDiscount"),e.textContent=n.message||"Cupón no válido",e.style.display="block",e.style.background="#fee2e2",e.style.color="#991b1b"}finally{const n=document.getElementById("apply-coupon-btn");n.disabled=!1,n.textContent="Aplicar"}}});const v=(o,e)=>{const a=o-e,n=document.getElementById("summary-total");n&&(n.textContent="$"+Number(Math.max(0,a)).toLocaleString("es-CO"))};document.getElementById("checkout-btn")?.addEventListener("click",()=>{if(!localStorage.getItem("user")){window.location.href="/auth/login";return}window.location.href="/checkout"});
