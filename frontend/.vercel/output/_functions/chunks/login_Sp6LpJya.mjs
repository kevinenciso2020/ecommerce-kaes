import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
/* empty css               */

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Iniciar sesión", "data-astro-cid-j7y7d5ql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page" data-astro-cid-j7y7d5ql> <div class="auth-card" data-astro-cid-j7y7d5ql> <div class="auth-header" data-astro-cid-j7y7d5ql> <h1 class="auth-title" data-astro-cid-j7y7d5ql>Bienvenido</h1> <p class="auth-subtitle" data-astro-cid-j7y7d5ql>Inicia sesión en tu cuenta</p> </div> <div id="auth-error" class="auth-error" style="display:none" data-astro-cid-j7y7d5ql></div> <div class="auth-form" data-astro-cid-j7y7d5ql> <div class="form-group" data-astro-cid-j7y7d5ql> <label class="form-label" data-astro-cid-j7y7d5ql>Correo electrónico</label> <input type="email" id="email" class="form-input" placeholder="tu@email.com" autocomplete="email" data-astro-cid-j7y7d5ql> </div> <div class="form-group" data-astro-cid-j7y7d5ql> <label class="form-label" data-astro-cid-j7y7d5ql>Contraseña</label> <input type="password" id="password" class="form-input" placeholder="••••••••" autocomplete="current-password" data-astro-cid-j7y7d5ql> </div> <button class="btn btn-primary btn-full" id="login-btn" data-astro-cid-j7y7d5ql>
Iniciar sesión
</button> </div> <div class="auth-footer" data-astro-cid-j7y7d5ql> <p data-astro-cid-j7y7d5ql>¿No tienes cuenta? <a href="/auth/register" data-astro-cid-j7y7d5ql>Regístrate gratis</a></p> </div> </div> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/login.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/auth/login.astro";
const $$url = "/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
