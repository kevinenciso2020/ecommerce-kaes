import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
import { a as api } from './api__u7tlCPp.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  let products = [];
  let categories = [];
  let pagination = {};
  const { searchParams } = Astro2.url;
  const page = searchParams.get("page") || "1";
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const size = searchParams.get("size") || "";
  const queryParams = { page, limit: "12" };
  if (category) queryParams.category = category;
  if (search) queryParams.search = search;
  if (minPrice) queryParams.minPrice = minPrice;
  if (maxPrice) queryParams.maxPrice = maxPrice;
  if (size) queryParams.size = size;
  try {
    const [productsData, categoriesData] = await Promise.all([
      api.products.list(queryParams),
      api.categories.list()
    ]);
    products = Array.isArray(productsData.products) ? productsData.products : [];
    pagination = productsData.pagination || {};
    categories = Array.isArray(categoriesData) ? categoriesData : [];
  } catch (e) {
    console.error("Error:", e);
  }
  const hasFilters = !!(category || search || minPrice || maxPrice || size);
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Productos", "data-astro-cid-d326op7z": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="catalog-page" data-astro-cid-d326op7z> <aside class="sidebar" data-astro-cid-d326op7z> <h3 class="sidebar-title" data-astro-cid-d326op7z>Filtros</h3> <div class="filter-group" data-astro-cid-d326op7z> <label class="filter-label" data-astro-cid-d326op7z>Buscar</label> <input type="text" id="search-input" class="form-input" placeholder="Buscar..."${addAttribute(search, "value")} data-astro-cid-d326op7z> </div> <div class="filter-group" data-astro-cid-d326op7z> <label class="filter-label" data-astro-cid-d326op7z>Categoría</label> <div class="filter-options" data-astro-cid-d326op7z> <a href="/productos"${addAttribute(!category ? "filter-option active" : "filter-option", "class")} data-astro-cid-d326op7z>
Todas
</a> ${categories.map((cat) => {
    const isActive = category === cat.slug;
    const url = `/productos?category=${cat.slug}`;
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(isActive ? "filter-option active" : "filter-option", "class")} data-astro-cid-d326op7z> ${cat.name} </a>`;
  })} </div> </div> <div class="filter-group" data-astro-cid-d326op7z> <label class="filter-label" data-astro-cid-d326op7z>Talla</label> <div class="size-options" data-astro-cid-d326op7z> ${["XS", "S", "M", "L", "XL", "XXL"].map((s) => {
    const isActive = size === s;
    const url = `/productos?size=${s}`;
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(isActive ? "size-btn active" : "size-btn", "class")} data-astro-cid-d326op7z> ${s} </a>`;
  })} </div> </div> <div class="filter-group" data-astro-cid-d326op7z> <label class="filter-label" data-astro-cid-d326op7z>Precio</label> <div class="price-inputs" data-astro-cid-d326op7z> <input type="number" id="min-price" class="form-input" placeholder="Mín"${addAttribute(minPrice, "value")} data-astro-cid-d326op7z> <span data-astro-cid-d326op7z>—</span> <input type="number" id="max-price" class="form-input" placeholder="Máx"${addAttribute(maxPrice, "value")} data-astro-cid-d326op7z> </div> <button class="btn btn-outline btn-sm" id="apply-price" data-astro-cid-d326op7z>Aplicar</button> </div> ${hasFilters && renderTemplate`<a href="/productos" class="clear-btn" data-astro-cid-d326op7z>Limpiar filtros</a>`} </aside> <main class="catalog-main" data-astro-cid-d326op7z> <div class="catalog-header" data-astro-cid-d326op7z> <h1 class="catalog-title" data-astro-cid-d326op7z> ${category ? categories.find((c) => c.slug === category)?.name || "Productos" : "Colección"} </h1> <span class="catalog-count" data-astro-cid-d326op7z>${pagination.total || products.length} productos</span> </div> ${products.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-d326op7z> <p data-astro-cid-d326op7z>No se encontraron productos</p> <a href="/productos" class="btn btn-outline" data-astro-cid-d326op7z>Ver todos</a> </div>` : renderTemplate`<div class="products-grid" data-astro-cid-d326op7z> ${products.map((product) => {
    const productUrl = `/productos/${product.slug}`;
    const imageUrl = product.images?.[0]?.url;
    const price = Number(product.price).toLocaleString("es-CO");
    const sizes = [...new Set((product.variants || []).map((v) => v.size).filter(Boolean))].slice(0, 3);
    return renderTemplate`<a${addAttribute(productUrl, "href")} class="product-card" data-astro-cid-d326op7z> <div class="product-image" data-astro-cid-d326op7z> ${imageUrl ? renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-d326op7z>` : renderTemplate`<div class="product-image-placeholder" data-astro-cid-d326op7z>📦</div>`} ${product.isFeatured && renderTemplate`<span class="product-badge" data-astro-cid-d326op7z>Destacado</span>`} </div> <div class="product-info" data-astro-cid-d326op7z> <p class="product-category" data-astro-cid-d326op7z>${product.category?.name}</p> <h3 class="product-name" data-astro-cid-d326op7z>${product.name}</h3> <div class="product-footer" data-astro-cid-d326op7z> <p class="product-price" data-astro-cid-d326op7z>$${price}</p> <div class="product-sizes" data-astro-cid-d326op7z> ${sizes.map((s) => renderTemplate`<span class="size-tag" data-astro-cid-d326op7z>${s}</span>`)} </div> </div> </div> </a>`;
  })} </div>`} ${pagination.totalPages > 1 && renderTemplate`<div class="pagination" data-astro-cid-d326op7z> ${pagination.page > 1 && renderTemplate`<a${addAttribute(`/productos?page=${pagination.page - 1}`, "href")} class="btn btn-outline" data-astro-cid-d326op7z>← Anterior</a>`} <span class="pagination-info" data-astro-cid-d326op7z>Página ${pagination.page} de ${pagination.totalPages}</span> ${pagination.page < pagination.totalPages && renderTemplate`<a${addAttribute(`/productos?page=${pagination.page + 1}`, "href")} class="btn btn-outline" data-astro-cid-d326op7z>Siguiente →</a>`} </div>`} </main> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/productos/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/productos/index.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/productos/index.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
