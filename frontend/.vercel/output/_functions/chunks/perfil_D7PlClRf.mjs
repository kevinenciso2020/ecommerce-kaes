import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';

const $$Perfil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Mi perfil", "data-astro-cid-7voezwz4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="perfil-page container" id="perfil-content" style="display:none" data-astro-cid-7voezwz4> <h1 class="page-title" data-astro-cid-7voezwz4>Mi cuenta</h1> <div class="perfil-grid" data-astro-cid-7voezwz4> <div class="perfil-card" data-astro-cid-7voezwz4> <h2 class="card-title" data-astro-cid-7voezwz4>Información personal</h2> <div id="user-info" class="user-info" data-astro-cid-7voezwz4></div> <button class="btn btn-outline" id="logout-btn" data-astro-cid-7voezwz4>Cerrar sesión</button> </div> <div class="perfil-card" data-astro-cid-7voezwz4> <h2 class="card-title" data-astro-cid-7voezwz4>Mis órdenes</h2> <div id="orders-list" data-astro-cid-7voezwz4> <p class="loading-text" data-astro-cid-7voezwz4>Cargando...</p> </div> </div> </div> </div> <div id="perfil-empty" style="display:none" class="perfil-empty" data-astro-cid-7voezwz4> <p data-astro-cid-7voezwz4>Debes iniciar sesión para ver tu perfil</p> <a href="/auth/login" class="btn btn-primary" data-astro-cid-7voezwz4>Iniciar sesión</a> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/perfil.astro";
const $$url = "/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Perfil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
