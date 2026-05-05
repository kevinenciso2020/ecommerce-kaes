import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Detalle de orden", "data-astro-cid-w54zm62u": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="order-page container" id="order-content" style="display:none" data-astro-cid-w54zm62u> <a href="/perfil" class="back-link" data-astro-cid-w54zm62u>← Volver a mis órdenes</a> <div class="order-header" data-astro-cid-w54zm62u> <h1 class="page-title" data-astro-cid-w54zm62u>Orden #<span id="order-id" data-astro-cid-w54zm62u></span></h1> <p class="order-date" data-astro-cid-w54zm62u>Fecha: <span id="order-date" data-astro-cid-w54zm62u></span></p> <span id="order-status" class="status-badge" data-astro-cid-w54zm62u></span> </div> <div class="order-grid" data-astro-cid-w54zm62u> <div class="order-card" data-astro-cid-w54zm62u> <h2 class="card-title" data-astro-cid-w54zm62u>Productos</h2> <div id="order-items" data-astro-cid-w54zm62u></div> </div> <div class="order-sidebar" data-astro-cid-w54zm62u> <div class="order-card" data-astro-cid-w54zm62u> <h2 class="card-title" data-astro-cid-w54zm62u>Resumen</h2> <div class="totals" id="order-totals" data-astro-cid-w54zm62u></div> </div> <div class="order-card" data-astro-cid-w54zm62u> <h2 class="card-title" data-astro-cid-w54zm62u>Envío</h2> <div id="order-shipping" data-astro-cid-w54zm62u></div> </div> </div> </div> </div> <div id="order-loading" class="loading-page" data-astro-cid-w54zm62u> <p data-astro-cid-w54zm62u>Cargando orden...</p> </div> <div id="order-error" class="error-page" style="display:none" data-astro-cid-w54zm62u> <p id="error-message" data-astro-cid-w54zm62u>Error cargando la orden</p> <a href="/perfil" class="btn btn-primary" data-astro-cid-w54zm62u>Volver a mis órdenes</a> </div> <div id="order-unauthorized" class="error-page" style="display:none" data-astro-cid-w54zm62u> <p data-astro-cid-w54zm62u>No tienes permisos para ver esta orden</p> <a href="/perfil" class="btn btn-primary" data-astro-cid-w54zm62u>Volver a mis órdenes</a> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil/ordenes/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil/ordenes/[id].astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil/ordenes/[id].astro";
const $$url = "/perfil/ordenes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
