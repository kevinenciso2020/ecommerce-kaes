import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, b8 as defineScriptVars, B as maybeRenderHead, a3 as addAttribute } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout } from './ShopLayout_8RZE5U--.mjs';
import { a as api } from './api__u7tlCPp.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let product = null;
  let error = false;
  try {
    product = await api.products.detail(slug);
  } catch (e) {
    error = true;
  }
  if (!product || error) {
    return Astro2.redirect("/productos");
  }
  const mainImage = product.images?.find((i) => i.isMain) || product.images?.[0];
  const otherImages = product.images?.filter((i) => !i.isMain) || [];
  const sizes = [...new Set(product.variants?.map((v) => v.size).filter(Boolean))];
  const colors = [...new Set(product.variants?.map((v) => v.color).filter(Boolean))];
  const formattedPrice = Number(product.price).toLocaleString("es-CO");
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  let selectedSize  = null\n  let selectedColor = null\n  let quantity      = 1\n\n  function selectSize(btn) {\n    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'))\n    btn.classList.add('active')\n    selectedSize = btn.dataset.size\n    document.getElementById('selected-size').textContent = selectedSize\n  }\n\n  function selectColor(btn) {\n    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'))\n    btn.classList.add('active')\n    selectedColor = btn.dataset.color\n    document.getElementById('selected-color').textContent = selectedColor\n  }\n\n  function selectImage(btn, src) {\n    document.getElementById('main-img').src = src\n    document.querySelectorAll('.thumbnail').forEach(b => b.classList.remove('active'))\n    btn.classList.add('active')\n  }\n\n  function changeQty(delta) {\n    quantity = Math.max(1, Math.min(10, quantity + delta))\n    document.getElementById('qty-display').textContent = quantity\n  }\n\n  function showMessage(text, type) {\n    const el = document.getElementById('action-message')\n    el.textContent     = text\n    el.style.display   = 'block'\n    el.style.background = type === 'success' ? '#dcfce7' : '#fee2e2'\n    el.style.color      = type === 'success' ? '#166534' : '#991b1b'\n    setTimeout(() => { el.style.display = 'none' }, 3000)\n  }\n\n  // Agregar al carrito usando el store de nanostores\n  document.getElementById('add-to-cart-btn').addEventListener('click', async () => {\n    const { addToCart } = await import('/src/stores/cart.store.js')\n    addToCart(product, quantity, selectedSize, selectedColor)\n    showMessage('¡Producto agregado al carrito!', 'success')\n  })\n\n  // Comprar ahora — agrega al carrito y va al checkout\n  document.getElementById('buy-now-btn').addEventListener('click', async () => {\n    const { addToCart } = await import('/src/stores/cart.store.js')\n    addToCart(product, quantity, selectedSize, selectedColor)\n    window.location.href = '/carrito'\n  })\n})();<\/script>"])), renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": product.name, "description": product.description, "data-astro-cid-gputwutb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="product-page container" data-astro-cid-gputwutb> <!-- Breadcrumb --> <nav class="breadcrumb" data-astro-cid-gputwutb> <a href="/" data-astro-cid-gputwutb>Inicio</a> <span data-astro-cid-gputwutb>›</span> <a href="/productos" data-astro-cid-gputwutb>Productos</a> <span data-astro-cid-gputwutb>›</span> <a${addAttribute(`/productos?category=${product.category?.slug}`, "href")} data-astro-cid-gputwutb>${product.category?.name}</a> <span data-astro-cid-gputwutb>›</span> <span data-astro-cid-gputwutb>${product.name}</span> </nav> <div class="product-layout" data-astro-cid-gputwutb> <!-- Galería de imágenes --> <div class="product-gallery" data-astro-cid-gputwutb> <div class="main-image" data-astro-cid-gputwutb> <img id="main-img"${addAttribute(mainImage?.url || "/placeholder.jpg", "src")}${addAttribute(product.name, "alt")} data-astro-cid-gputwutb> </div> ${otherImages.length > 0 && renderTemplate`<div class="thumbnails" data-astro-cid-gputwutb> ${product.images.map((img, i) => renderTemplate`<button${addAttribute(`thumbnail ${i === 0 ? "active" : ""}`, "class")}${addAttribute(img.url, "data-src")}${addAttribute(`selectImage(this, '${img.url}')`, "onclick")} data-astro-cid-gputwutb> <img${addAttribute(img.url, "src")}${addAttribute(`${product.name} ${i + 1}`, "alt")} data-astro-cid-gputwutb> </button>`)} </div>`} </div> <!-- Info del producto --> <div class="product-info" data-astro-cid-gputwutb> <div class="product-meta" data-astro-cid-gputwutb> <a${addAttribute(`/productos?category=${product.category?.slug}`, "href")} class="product-category-link" data-astro-cid-gputwutb> ${product.category?.name} </a> ${product.isFeatured && renderTemplate`<span class="badge-featured" data-astro-cid-gputwutb>Destacado</span>`} </div> <h1 class="product-title" data-astro-cid-gputwutb>${product.name}</h1> <p class="product-price" data-astro-cid-gputwutb>$${formattedPrice} <span class="currency" data-astro-cid-gputwutb>COP</span></p> <p class="product-description" data-astro-cid-gputwutb>${product.description}</p> <!-- Selector de talla --> ${sizes.length > 0 && renderTemplate`<div class="option-group" data-astro-cid-gputwutb> <label class="option-label" data-astro-cid-gputwutb>
Talla: <span id="selected-size" class="selected-value" data-astro-cid-gputwutb>—</span> </label> <div class="size-grid" data-astro-cid-gputwutb> ${sizes.map((size) => renderTemplate`<button class="size-btn"${addAttribute(size, "data-size")} onclick="selectSize(this)" data-astro-cid-gputwutb> ${size} </button>`)} </div> </div>`} <!-- Selector de color --> ${colors.length > 0 && renderTemplate`<div class="option-group" data-astro-cid-gputwutb> <label class="option-label" data-astro-cid-gputwutb>
Color: <span id="selected-color" class="selected-value" data-astro-cid-gputwutb>—</span> </label> <div class="color-grid" data-astro-cid-gputwutb> ${colors.map((color) => renderTemplate`<button class="color-btn"${addAttribute(color, "data-color")} onclick="selectColor(this)" data-astro-cid-gputwutb> ${color} </button>`)} </div> </div>`} <!-- Cantidad --> <div class="option-group" data-astro-cid-gputwutb> <label class="option-label" data-astro-cid-gputwutb>Cantidad</label> <div class="quantity-selector" data-astro-cid-gputwutb> <button onclick="changeQty(-1)" class="qty-btn" data-astro-cid-gputwutb>−</button> <span id="qty-display" data-astro-cid-gputwutb>1</span> <button onclick="changeQty(1)" class="qty-btn" data-astro-cid-gputwutb>+</button> </div> </div> <!-- Botones de acción --> <div class="product-actions" data-astro-cid-gputwutb> <button class="btn btn-primary btn-full" id="add-to-cart-btn" data-astro-cid-gputwutb>
Agregar al carrito
</button> <button class="btn btn-outline btn-full" id="buy-now-btn" data-astro-cid-gputwutb>
Comprar ahora
</button> </div> <div id="action-message" class="action-message" style="display:none" data-astro-cid-gputwutb></div> <!-- Info adicional --> <div class="product-details" data-astro-cid-gputwutb> <div class="detail-item" data-astro-cid-gputwutb> <span data-astro-cid-gputwutb>📦</span> Envío a todo Colombia
</div> <div class="detail-item" data-astro-cid-gputwutb> <span data-astro-cid-gputwutb>🔄</span> Cambios y devoluciones en 30 días
</div> <div class="detail-item" data-astro-cid-gputwutb> <span data-astro-cid-gputwutb>🔒</span> Pago seguro
</div> </div> </div> </div> </div> ` }), defineScriptVars({ product }));
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/productos/[slug].astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/productos/[slug].astro";
const $$url = "/productos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
