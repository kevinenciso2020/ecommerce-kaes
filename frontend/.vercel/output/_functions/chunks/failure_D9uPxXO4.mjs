import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout } from './ShopLayout_8RZE5U--.mjs';
/* empty css                          */

const $$Failure = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Pago fallido", "data-astro-cid-mrazkgpx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="payment-result-page container" data-astro-cid-mrazkgpx> <div class="result-card failure" data-astro-cid-mrazkgpx> <div class="result-icon" data-astro-cid-mrazkgpx>✕</div> <h1 class="result-title" data-astro-cid-mrazkgpx>Pago rechazado</h1> <p class="result-message" data-astro-cid-mrazkgpx>Tu pago fue rechazado. Por favor intenta nuevamente o usa otro método de pago.</p> <a href="/checkout" class="btn btn-primary" data-astro-cid-mrazkgpx>Volver al checkout</a> </div> </div> ` })}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/failure.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/failure.astro";
const $$url = "/checkout/failure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Failure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
