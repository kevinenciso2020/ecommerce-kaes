import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
/* empty css                          */

const $$WompiCallback = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Procesando pago", "data-astro-cid-afzj7tep": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="payment-result-page container" data-astro-cid-afzj7tep> <div class="result-card" data-astro-cid-afzj7tep> <div class="result-icon" data-astro-cid-afzj7tep>⏳</div> <h1 class="result-title" data-astro-cid-afzj7tep>Procesando pago...</h1> <p class="result-message" data-astro-cid-afzj7tep>Por favor espera mientras verificamos tu pago.</p> <div id="payment-result" class="payment-result" data-astro-cid-afzj7tep></div> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/wompi-callback.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/wompi-callback.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/wompi-callback.astro";
const $$url = "/checkout/wompi-callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WompiCallback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
