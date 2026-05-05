import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout, r as renderScript } from './ShopLayout_8RZE5U--.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
/* empty css                */

const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.1 }
    }
  })
};
const CelticKnotAnimation = ({ size = 300 }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size
      },
      children: /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: "0 0 100 100",
          width: "100%",
          height: "100%",
          className: "celtic-knot",
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "knotGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", style: { stopColor: "#ff0000", stopOpacity: 1 } }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", style: { stopColor: "#ffff00", stopOpacity: 1 } })
            ] }) }),
            /* @__PURE__ */ jsx(
              motion.path,
              {
                d: "M 23 77 A 28 28 0 1 1 77 77 M 77 77 L 50 22 L 23 77 M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7",
                fill: "none",
                stroke: "rgba(0,0,0,0.1)",
                strokeWidth: "3.5",
                initial: "hidden",
                animate: "visible",
                custom: 0,
                variants: drawAnimation,
                style: { filter: "blur(2px)" }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.circle,
              {
                cx: "50",
                cy: "60",
                r: "28",
                fill: "none",
                stroke: "#ff0000",
                strokeWidth: "3",
                initial: "hidden",
                animate: "visible",
                custom: 1,
                variants: drawAnimation,
                strokeLinecap: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.circle,
              {
                cx: "50",
                cy: "60",
                r: "28",
                fill: "none",
                stroke: "#ffff00",
                strokeWidth: "2.5",
                initial: "hidden",
                animate: "visible",
                custom: 1.1,
                variants: {
                  ...drawAnimation,
                  visible: { ...drawAnimation.visible(1.1), pathLength: 1, strokeWidth: 2.5, transition: { duration: 1.2, delay: 0.3 } }
                }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.path,
              {
                d: "M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7",
                fill: "none",
                stroke: "#ff0000",
                strokeWidth: "3.2",
                initial: "hidden",
                animate: "visible",
                custom: 2,
                variants: drawAnimation,
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.path,
              {
                d: "M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7",
                fill: "none",
                stroke: "#ffff00",
                strokeWidth: "2.8",
                initial: "hidden",
                animate: "visible",
                custom: 2.2,
                variants: {
                  ...drawAnimation,
                  visible: { ...drawAnimation.visible(2.2), pathLength: 1, strokeWidth: 2.8, transition: { duration: 1.5, delay: 0.5 } }
                },
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.g,
              {
                animate: {
                  scale: [1, 1.02, 1]
                },
                transition: {
                  duration: 3,
                  delay: 4.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }
            )
          ]
        }
      )
    }
  );
};

const $$Estudio = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Estudio", "data-astro-cid-vniptugp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page" id="studio-content" style="display:none" data-astro-cid-vniptugp> <div class="admin-header" data-astro-cid-vniptugp> <h1 class="admin-title" data-astro-cid-vniptugp>Estudio</h1> <p class="admin-sub" data-astro-cid-vniptugp>Gestiona tus activos multimedia</p> </div> <div class="studio-grid" data-astro-cid-vniptugp> <div class="studio-main" data-astro-cid-vniptugp> <div class="studio-card" data-astro-cid-vniptugp> <div class="studio-card-header" data-astro-cid-vniptugp> <h2 data-astro-cid-vniptugp>Biblioteca de Medios</h2> <button class="btn-upload" id="upload-btn" data-astro-cid-vniptugp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vniptugp> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-vniptugp></path> <polyline points="17 8 12 3 7 8" data-astro-cid-vniptugp></polyline> <line x1="12" y1="3" x2="12" y2="15" data-astro-cid-vniptugp></line> </svg>
Subir archivos
</button> </div> <div class="media-filters" data-astro-cid-vniptugp> <button class="filter-btn active" data-filter="all" data-astro-cid-vniptugp>Todos</button> <button class="filter-btn" data-filter="image" data-astro-cid-vniptugp>Imagenes</button> <button class="filter-btn" data-filter="video" data-astro-cid-vniptugp>Videos</button> </div> <div class="media-grid" id="media-grid" data-astro-cid-vniptugp> <div class="loading" data-astro-cid-vniptugp>Cargando medios...</div> </div> </div> <div class="studio-card" data-astro-cid-vniptugp> <div class="studio-card-header" data-astro-cid-vniptugp> <h2 data-astro-cid-vniptugp>Productos sin Imagen</h2> <span class="badge" id="orphan-count" data-astro-cid-vniptugp>0</span> </div> <div class="orphan-products" id="orphan-products" data-astro-cid-vniptugp> <div class="loading" data-astro-cid-vniptugp>Cargando...</div> </div> </div> </div> <div class="studio-sidebar" data-astro-cid-vniptugp> <div class="studio-card knot-card" data-astro-cid-vniptugp> <div class="studio-card-header" data-astro-cid-vniptugp> <h2 data-astro-cid-vniptugp>Animacion Decorativa</h2> </div> <div class="knot-container" data-astro-cid-vniptugp> ${renderComponent($$result2, "CelticKnotAnimation", CelticKnotAnimation, { "client:visible": true, "size": 200, "client:component-hydration": "visible", "client:component-path": "/home/kaes/ecommerce-kaes/frontend/src/components/admin/CelticKnotAnimation", "client:component-export": "default", "data-astro-cid-vniptugp": true })} </div> <p class="knot-hint" data-astro-cid-vniptugp>Esta animacion se carga solo cuando es visible</p> </div> <div class="studio-card" data-astro-cid-vniptugp> <div class="studio-card-header" data-astro-cid-vniptugp> <h2 data-astro-cid-vniptugp>Estadisticas</h2> </div> <div class="stats-list" data-astro-cid-vniptugp> <div class="stat-item" data-astro-cid-vniptugp> <span class="stat-label" data-astro-cid-vniptugp>Total de archivos</span> <span class="stat-num" id="stat-total" data-astro-cid-vniptugp>0</span> </div> <div class="stat-item" data-astro-cid-vniptugp> <span class="stat-label" data-astro-cid-vniptugp>Imagenes</span> <span class="stat-num" id="stat-images" data-astro-cid-vniptugp>0</span> </div> <div class="stat-item" data-astro-cid-vniptugp> <span class="stat-label" data-astro-cid-vniptugp>Videos</span> <span class="stat-num" id="stat-videos" data-astro-cid-vniptugp>0</span> </div> <div class="stat-item" data-astro-cid-vniptugp> <span class="stat-label" data-astro-cid-vniptugp>Almacenamiento</span> <span class="stat-num" id="stat-storage" data-astro-cid-vniptugp>0 MB</span> </div> </div> </div> </div> </div> <input type="file" id="file-input" multiple accept="image/*,video/*" style="display:none" data-astro-cid-vniptugp> </div> <div id="no-access" style="display:none" class="no-access" data-astro-cid-vniptugp> <p data-astro-cid-vniptugp>No tienes permisos para ver esta pagina</p> <a href="/" class="btn btn-primary" data-astro-cid-vniptugp>Volver al inicio</a> </div> ` })} ${renderScript($$result, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/estudio.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/estudio.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/admin/estudio.astro";
const $$url = "/admin/estudio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Estudio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
