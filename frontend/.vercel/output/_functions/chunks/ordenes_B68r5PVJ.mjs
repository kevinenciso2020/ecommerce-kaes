import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';

const $$Ordenes = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Admin - Órdenes", "data-astro-cid-2dpkjefa": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page container" id="admin-content" style="display:none" data-astro-cid-2dpkjefa> <div class="admin-header" data-astro-cid-2dpkjefa> <div data-astro-cid-2dpkjefa> <h1 class="admin-title" data-astro-cid-2dpkjefa>Órdenes</h1> <p class="admin-sub" data-astro-cid-2dpkjefa>Gestiona los pedidos de los clientes</p> </div> <div class="filters" data-astro-cid-2dpkjefa> <select id="filter-status" class="filter-select" data-astro-cid-2dpkjefa> <option value="" data-astro-cid-2dpkjefa>Todos los estados</option> <option value="PENDING" data-astro-cid-2dpkjefa>Pendiente</option> <option value="CONFIRMED" data-astro-cid-2dpkjefa>Confirmado</option> <option value="PROCESSING" data-astro-cid-2dpkjefa>Procesando</option> <option value="SHIPPED" data-astro-cid-2dpkjefa>Enviado</option> <option value="DELIVERED" data-astro-cid-2dpkjefa>Entregado</option> <option value="CANCELLED" data-astro-cid-2dpkjefa>Cancelado</option> <option value="REFUNDED" data-astro-cid-2dpkjefa>Reembolsado</option> </select> </div> </div> <div class="orders-table-wrap" data-astro-cid-2dpkjefa> <table class="orders-table" data-astro-cid-2dpkjefa> <thead data-astro-cid-2dpkjefa> <tr data-astro-cid-2dpkjefa> <th data-astro-cid-2dpkjefa>Orden</th> <th data-astro-cid-2dpkjefa>Cliente</th> <th data-astro-cid-2dpkjefa>Total</th> <th data-astro-cid-2dpkjefa>Estado</th> <th data-astro-cid-2dpkjefa>Fecha</th> <th data-astro-cid-2dpkjefa>Acciones</th> </tr> </thead> <tbody id="orders-tbody" data-astro-cid-2dpkjefa> <tr data-astro-cid-2dpkjefa><td colspan="6" class="loading" data-astro-cid-2dpkjefa>Cargando...</td></tr> </tbody> </table> </div> <div class="pagination" id="pagination" data-astro-cid-2dpkjefa></div> </div> <div id="no-access" style="display:none" class="no-access" data-astro-cid-2dpkjefa> <p data-astro-cid-2dpkjefa>No tienes permisos para ver esta página</p> <a href="/" class="btn btn-primary" data-astro-cid-2dpkjefa>Volver al inicio</a> </div> <div id="order-modal" class="modal" style="display:none" data-astro-cid-2dpkjefa> <div class="modal-content" data-astro-cid-2dpkjefa> <div class="modal-header" data-astro-cid-2dpkjefa> <h2 data-astro-cid-2dpkjefa>Detalle de orden</h2> <button class="modal-close" id="close-modal" data-astro-cid-2dpkjefa>&times;</button> </div> <div class="modal-body" id="order-detail" data-astro-cid-2dpkjefa></div> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/ordenes.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/ordenes.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/ordenes.astro";
const $$url = "/admin/ordenes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ordenes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
