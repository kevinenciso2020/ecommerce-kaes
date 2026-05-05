import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
/* empty css                          */

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Pago exitoso" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="payment-result-page container"> <div class="result-card success"> <div class="result-icon">✓</div> <h1 class="result-title">¡Pago exitoso!</h1> <p class="result-message">Tu pedido ha sido confirmado correctamente.</p> <div id="order-info" class="order-info"></div> <a href="/perfil/ordenes" class="btn btn-primary">Ver mis pedidos</a> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/success.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/success.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/success.astro";
const $$url = "/checkout/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
