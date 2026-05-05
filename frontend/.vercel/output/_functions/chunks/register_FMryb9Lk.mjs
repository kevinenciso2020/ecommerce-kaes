import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
/* empty css               */

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Crear cuenta", "data-astro-cid-iewcbn5q": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page" data-astro-cid-iewcbn5q> <div class="auth-card" data-astro-cid-iewcbn5q> <div class="auth-header" data-astro-cid-iewcbn5q> <h1 class="auth-title" data-astro-cid-iewcbn5q>Crear cuenta</h1> <p class="auth-subtitle" data-astro-cid-iewcbn5q>Únete y empieza a comprar</p> </div> <div id="auth-error" class="auth-error" style="display:none" data-astro-cid-iewcbn5q></div> <div class="auth-form" data-astro-cid-iewcbn5q> <div class="form-group" data-astro-cid-iewcbn5q> <label class="form-label" data-astro-cid-iewcbn5q>Nombre completo</label> <input type="text" id="name" class="form-input" placeholder="Tu nombre" autocomplete="name" data-astro-cid-iewcbn5q> </div> <div class="form-group" data-astro-cid-iewcbn5q> <label class="form-label" data-astro-cid-iewcbn5q>Correo electrónico</label> <input type="email" id="email" class="form-input" placeholder="tu@email.com" autocomplete="email" data-astro-cid-iewcbn5q> </div> <div class="form-group" data-astro-cid-iewcbn5q> <label class="form-label" data-astro-cid-iewcbn5q>Contraseña</label> <input type="password" id="password" class="form-input" placeholder="Mínimo 6 caracteres" autocomplete="new-password" data-astro-cid-iewcbn5q> </div> <div class="form-group" data-astro-cid-iewcbn5q> <label class="form-label" data-astro-cid-iewcbn5q>Confirmar contraseña</label> <input type="password" id="confirm-password" class="form-input" placeholder="Repite tu contraseña" autocomplete="new-password" data-astro-cid-iewcbn5q> </div> <button class="btn btn-primary btn-full" id="register-btn" data-astro-cid-iewcbn5q>
Crear cuenta
</button> </div> <div class="auth-footer" data-astro-cid-iewcbn5q> <p data-astro-cid-iewcbn5q>¿Ya tienes cuenta? <a href="/auth/login" data-astro-cid-iewcbn5q>Inicia sesión</a></p> </div> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/register.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/register.astro";
const $$url = "/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
