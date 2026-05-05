import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout } from './ShopLayout_8RZE5U--.mjs';
/* empty css                          */

const $$Pending = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Pago pendiente", "data-astro-cid-psaxh4wz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="payment-result-page container" data-astro-cid-psaxh4wz> <div class="result-card pending" data-astro-cid-psaxh4wz> <div class="result-icon" data-astro-cid-psaxh4wz>⏳</div> <h1 class="result-title" data-astro-cid-psaxh4wz>Pago en proceso</h1> <p class="result-message" data-astro-cid-psaxh4wz>Tu pago está siendo procesado. Te notificaremos cuando sea confirmado.</p> <a href="/perfil/ordenes" class="btn btn-primary" data-astro-cid-psaxh4wz>Ver mis pedidos</a> </div> </div> ` })}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/pending.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/checkout/pending.astro";
const $$url = "/checkout/pending";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pending,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
