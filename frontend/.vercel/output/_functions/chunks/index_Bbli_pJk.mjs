import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
/* empty css                */

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Admin", "data-astro-cid-u2h3djql": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page container" id="admin-content" style="display:none" data-astro-cid-u2h3djql> <div class="admin-header" data-astro-cid-u2h3djql> <h1 class="admin-title" data-astro-cid-u2h3djql>Panel de administración</h1> <p class="admin-sub" data-astro-cid-u2h3djql>Gestiona tu tienda Kaes</p> </div> <div class="stats-grid" id="stats-grid" data-astro-cid-u2h3djql> <div class="stat-card" data-astro-cid-u2h3djql> <p class="stat-label" data-astro-cid-u2h3djql>Usuarios</p> <p class="stat-value" id="stat-users" data-astro-cid-u2h3djql>—</p> </div> <div class="stat-card" data-astro-cid-u2h3djql> <p class="stat-label" data-astro-cid-u2h3djql>Productos</p> <p class="stat-value" id="stat-products" data-astro-cid-u2h3djql>—</p> </div> <div class="stat-card" data-astro-cid-u2h3djql> <p class="stat-label" data-astro-cid-u2h3djql>Órdenes</p> <p class="stat-value" id="stat-orders" data-astro-cid-u2h3djql>—</p> </div> <div class="stat-card" data-astro-cid-u2h3djql> <p class="stat-label" data-astro-cid-u2h3djql>Ingresos</p> <p class="stat-value" id="stat-revenue" data-astro-cid-u2h3djql>—</p> </div> </div> <div class="actions-section" data-astro-cid-u2h3djql> <h2 class="section-label" data-astro-cid-u2h3djql>Acciones rápidas</h2> <div class="actions-grid" data-astro-cid-u2h3djql> <a href="/admin/productos" class="action-card" data-astro-cid-u2h3djql> <span class="action-icon" data-astro-cid-u2h3djql>👕</span> <h3 data-astro-cid-u2h3djql>Productos</h3> <p data-astro-cid-u2h3djql>Crear, editar y eliminar productos</p> </a> <a href="/admin/ordenes" class="action-card" data-astro-cid-u2h3djql> <span class="action-icon" data-astro-cid-u2h3djql>📦</span> <h3 data-astro-cid-u2h3djql>Órdenes</h3> <p data-astro-cid-u2h3djql>Ver y gestionar pedidos</p> </a> <a href="/admin/descuentos" class="action-card" data-astro-cid-u2h3djql> <span class="action-icon" data-astro-cid-u2h3djql>🏷️</span> <h3 data-astro-cid-u2h3djql>Descuentos</h3> <p data-astro-cid-u2h3djql>Crear descuentos y cupones</p> </a> </div> </div> </div> <div id="no-access" style="display:none" class="no-access" data-astro-cid-u2h3djql> <p data-astro-cid-u2h3djql>No tienes permisos para ver esta página</p> <a href="/" class="btn btn-primary" data-astro-cid-u2h3djql>Volver al inicio</a> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/index.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
