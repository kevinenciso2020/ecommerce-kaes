import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { T as createRenderInstruction, a3 as addAttribute, b9 as renderHead, ba as renderSlot, Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Tienda de ropa online" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} | Kaes Store</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/kaes/ecommerce-kaes/frontend/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="header-inner"> <a href="/" class="logo">KAES</a> <nav class="nav"> <a href="/productos" class="nav-link">Colección</a> <a href="/productos?category=camisetas" class="nav-link">Camisetas</a> <a href="/productos?category=pantalones" class="nav-link">Pantalones</a> <a href="/productos?category=vestidos" class="nav-link">Vestidos</a> </nav> <div class="header-actions"> <div id="auth-section"></div> <button class="icon-btn" id="cart-toggle-btn" aria-label="Carrito"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path> <line x1="3" y1="6" x2="21" y2="6"></line> <path d="M16 10a4 4 0 01-8 0"></path> </svg> <span class="cart-badge" id="cart-count" style="display:none">0</span> </button> </div> </div> </header> ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/components/ui/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/components/ui/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-mh6itkc3> <div class="container footer-inner" data-astro-cid-mh6itkc3> <div class="footer-brand" data-astro-cid-mh6itkc3> <span class="footer-logo" data-astro-cid-mh6itkc3>Kaes Store</span> <p class="footer-tagline" data-astro-cid-mh6itkc3>Moda que te define</p> </div> <div class="footer-links" data-astro-cid-mh6itkc3> <div class="footer-col" data-astro-cid-mh6itkc3> <h4 data-astro-cid-mh6itkc3>Tienda</h4> <a href="/productos" data-astro-cid-mh6itkc3>Todos los productos</a> <a href="/productos?category=camisetas" data-astro-cid-mh6itkc3>Camisetas</a> <a href="/productos?category=pantalones" data-astro-cid-mh6itkc3>Pantalones</a> <a href="/productos?category=vestidos" data-astro-cid-mh6itkc3>Vestidos</a> </div> <div class="footer-col" data-astro-cid-mh6itkc3> <h4 data-astro-cid-mh6itkc3>Cuenta</h4> <a href="/auth/login" data-astro-cid-mh6itkc3>Iniciar sesión</a> <a href="/auth/register" data-astro-cid-mh6itkc3>Registrarse</a> <a href="/perfil" data-astro-cid-mh6itkc3>Mi perfil</a> <a href="/perfil/ordenes" data-astro-cid-mh6itkc3>Mis órdenes</a> </div> </div> </div> <div class="footer-bottom" data-astro-cid-mh6itkc3> <p data-astro-cid-mh6itkc3>© 2025 Kaes Store. Todos los derechos reservados.</p> </div> </footer>`;
}, "/home/kaes/ecommerce-kaes/frontend/src/components/ui/Footer.astro", void 0);

const $$ShopLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ShopLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/layouts/ShopLayout.astro", void 0);

export { $$ShopLayout as $, renderScript as r };
