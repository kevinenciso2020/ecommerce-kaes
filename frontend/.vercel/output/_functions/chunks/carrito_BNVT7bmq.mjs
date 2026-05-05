import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';

const $$Carrito = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Mi carrito", "data-astro-cid-vrbpsbwj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="cart-page container" data-astro-cid-vrbpsbwj> <h1 class="page-title" data-astro-cid-vrbpsbwj>Mi carrito</h1> <!-- Estado vacío --> <div id="cart-empty" style="display:none" class="cart-empty" data-astro-cid-vrbpsbwj> <p data-astro-cid-vrbpsbwj>Tu carrito está vacío</p> <a href="/productos" class="btn btn-primary" data-astro-cid-vrbpsbwj>Ver productos</a> </div> <!-- Contenido del carrito --> <div id="cart-content" style="display:none" class="cart-layout" data-astro-cid-vrbpsbwj> <!-- Lista de items --> <div class="cart-items" id="cart-items-list" data-astro-cid-vrbpsbwj></div> <!-- Resumen --> <div class="cart-summary" data-astro-cid-vrbpsbwj> <h2 class="summary-title" data-astro-cid-vrbpsbwj>Resumen del pedido</h2> <div class="summary-rows" data-astro-cid-vrbpsbwj> <div class="summary-row" data-astro-cid-vrbpsbwj> <span data-astro-cid-vrbpsbwj>Subtotal</span> <span id="summary-subtotal" data-astro-cid-vrbpsbwj>$0</span> </div> <div class="summary-row" data-astro-cid-vrbpsbwj> <span data-astro-cid-vrbpsbwj>Envío</span> <span class="shipping-free" data-astro-cid-vrbpsbwj>Gratis</span> </div> </div> <!-- Cupón --> <div class="coupon-group" data-astro-cid-vrbpsbwj> <input type="text" id="coupon-input" class="form-input" placeholder="Código de cupón" data-astro-cid-vrbpsbwj> <button class="btn btn-outline" id="apply-coupon-btn" data-astro-cid-vrbpsbwj>Aplicar</button> </div> <div id="coupon-message" style="display:none" class="coupon-message" data-astro-cid-vrbpsbwj></div> <div class="summary-row total-row" data-astro-cid-vrbpsbwj> <span data-astro-cid-vrbpsbwj>Total</span> <span id="summary-total" data-astro-cid-vrbpsbwj>$0</span> </div> <button class="btn btn-primary btn-full" id="checkout-btn" data-astro-cid-vrbpsbwj>
Proceder al pago
</button> <a href="/productos" class="continue-shopping" data-astro-cid-vrbpsbwj>
← Continuar comprando
</a> </div> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/carrito.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/carrito.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/carrito.astro";
const $$url = "/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
