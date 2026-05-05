import { c as createComponent } from './astro-component_BYjAEXvK.mjs';
import 'piccolore';
import { Q as renderTemplate } from './sequence_CEhBxCfK.mjs';
import { r as renderComponent } from './entrypoint_C2JlgpJx.mjs';
import { $ as $$ShopLayout } from './ShopLayout_8RZE5U--.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import { useRef } from 'react';
import { a as api } from './api__u7tlCPp.mjs';

function MagneticButton({ children, className = "", onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      ref,
      style: { x: springX, y: springY },
      onMouseMove: (e) => {
        const rect = ref.current.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.3);
        y.set(dy * 0.3);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      onClick,
      className,
      children
    }
  );
}

const fadeSlideUp$1 = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100, damping: 20 }
  })
};
const drawInfinite = {
  hidden: { pathLength: 0, pathOffset: 1, opacity: 0 },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      pathOffset: {
        duration: 4,
        ease: "linear",
        repeat: Infinity
      },
      opacity: { duration: 0.5 }
    }
  }
};
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "hero-section", style: { background: "transparent", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { className: "hero-bg-pattern", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "hero-inner container", children: [
      /* @__PURE__ */ jsx("div", { className: "hero-left", children: /* @__PURE__ */ jsx("div", { className: "hero-symbol-wrapper", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "hero-symbol",
          viewBox: "0 0 950 850",
          xmlns: "http://www.w3.org/2000/svg",
          style: { maxHeight: "80vh", filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.3))" },
          children: /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M 433 0 A 440 440 90 0 0 866 750 A 440 440 90 0 0 0 750 A 440 440 90 0 0 433 0 Z",
              transform: "translate(40 40)",
              fill: "none",
              stroke: "#000000",
              strokeWidth: "35",
              strokeLinecap: "round",
              strokeDasharray: "40 60",
              variants: drawInfinite,
              initial: "hidden",
              animate: "visible"
            }
          )
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "hero-right", children: [
        /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "hero-eyebrow",
            custom: 0,
            initial: "hidden",
            animate: "visible",
            variants: fadeSlideUp$1
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            className: "hero-title",
            custom: 1,
            initial: "hidden",
            animate: "visible",
            variants: fadeSlideUp$1,
            children: /* @__PURE__ */ jsx("span", { className: "hero-title-kaes", style: { color: "#ff0000" }, children: "kaes" })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "hero-tagline",
            custom: 2,
            initial: "hidden",
            animate: "visible",
            variants: fadeSlideUp$1,
            children: "simply eternal"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "hero-subtitle",
            custom: 3,
            initial: "hidden",
            animate: "visible",
            variants: fadeSlideUp$1,
            children: "Cada prenda nace desde lo esencial y evoluciona contigo."
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "hero-actions",
            custom: 4,
            initial: "hidden",
            animate: "visible",
            variants: fadeSlideUp$1,
            children: [
              /* @__PURE__ */ jsx(
                MagneticButton,
                {
                  onClick: () => window.location.href = "/productos",
                  className: "btn btn-primary hero-btn-primary",
                  style: { backgroundColor: "#ff0000", borderColor: "#ff0000" },
                  children: "Explorar colección"
                }
              ),
              /* @__PURE__ */ jsx("a", { href: "/auth/register", className: "btn btn-outline hero-btn-outline", children: "Crear cuenta" })
            ]
          }
        )
      ] })
    ] })
  ] });
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};
function StaggerGrid({ children, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      variants: container,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      children
    }
  );
}
function StaggerItem({ children, className = "" }) {
  return /* @__PURE__ */ jsx(motion.div, { className, variants: item, children });
}

const categories = [
  {
    name: "Camisetas",
    slug: "camisetas",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V80a8,8,0,0,0,8,8h32V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V88h32a8,8,0,0,0,8-8V56A16,16,0,0,0,216,40ZM40,48H216l.2,16H152V88a8,8,0,0,0-2.3-5.6l-32-40a8,8,0,0,0-11.3,0l-32,40A8,8,0,0,0,104,88V64H39.8Z"></path></svg>`
  },
  {
    name: "Pantalones",
    slug: "pantalones",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M208,40H48A16,16,0,0,0,32,56V88H224V56A16,16,0,0,0,208,40Zm-32,32H80V200h16V112H160V200a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72a16,16,0,0,0-16-16H208Z"></path></svg>`
  },
  {
    name: "Vestidos",
    slug: "vestidos",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M240,64H224V56a24,24,0,0,0-24-24H168V24a8,8,0,0,0-16,0v8H104V24a8,8,0,0,0-16,0v8H56A24,24,0,0,0,32,56v8H16a8,8,0,0,0,0,16H32v88a16,16,0,0,0,16,16h8v48a8,8,0,0,0,16,0V152h24V224a8,8,0,0,0,16,0V152h48v24a8,8,0,0,0,16,0V152h8a16,16,0,0,0,16-16V88H240a8,8,0,0,0,0-16Z"></path></svg>`
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M244,80a12,12,0,0,0-12-12H224a32,32,0,0,1-32-32V24A12,12,0,0,0,180,12H76A12,12,0,0,0,64,24V36A32,32,0,0,1,32,68H24a12,12,0,0,0,0,24H32a32,32,0,0,1,32,32v12a12,12,0,0,0,12,12h28v20a60,60,0,0,0,32,52.26V244a12,12,0,0,0,24,0V204.26A60,60,0,0,0,156,152V136h12a32,32,0,0,0,32-32H192a12,12,0,0,0,0-24ZM96,60A36,36,0,0,1,127.85,24H128.15A36,36,0,0,1,160,60ZM56,100A36,36,0,0,1,80.15,64H175.85A36,36,0,0,1,200,100v32H56ZM136,152A76,76,0,0,0,96,208v-40a12,12,0,0,0-24,0v40a76,76,0,0,0,64,75.85V152Z"></path></svg>`
  }
];
function CategoriesSection() {
  return /* @__PURE__ */ jsx("section", { className: "section categories-section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(StaggerGrid, { className: "categories-grid", children: categories.map((cat) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("a", { href: `/productos?category=${cat.slug}`, className: "category-card", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "category-icon",
        dangerouslySetInnerHTML: { __html: cat.icon }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "category-name", children: cat.name })
  ] }) }, cat.slug)) }) }) });
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};
function RevealSection({ children, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeSlideUp,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-80px" },
      className,
      children
    }
  );
}

function FeaturedProducts({
  products
}) {
  return /* @__PURE__ */ jsx("section", { className: "section featured-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Destacados" }),
      /* @__PURE__ */ jsxs("a", { href: "/productos", className: "see-all", children: [
        "Ver todos",
        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "products-grid", children: products.map((product, i) => {
      const img = product.images?.[0]?.url;
      const price = Number(product.price).toLocaleString("es-CO");
      return /* @__PURE__ */ jsx(RevealSection, { custom: i, children: /* @__PURE__ */ jsxs("a", { href: `/productos/${product.slug}`, className: "product-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "product-image", children: [
          img ? /* @__PURE__ */ jsx("img", { src: img, alt: product.name, loading: "lazy" }) : /* @__PURE__ */ jsx("div", { className: "product-placeholder", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1", children: [
            /* @__PURE__ */ jsx("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" }),
            /* @__PURE__ */ jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "product-overlay" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "product-info", children: [
          /* @__PURE__ */ jsx("p", { className: "product-category", children: product.category?.name }),
          /* @__PURE__ */ jsx("h3", { className: "product-name", children: product.name }),
          /* @__PURE__ */ jsxs("p", { className: "product-price", children: [
            "$",
            price
          ] })
        ] })
      ] }) }, product.slug);
    }) })
  ] }) });
}

function CtaBanner() {
  return /* @__PURE__ */ jsx("section", { className: "cta-banner", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "cta-inner",
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", stiffness: 100, damping: 20 },
      children: [
        /* @__PURE__ */ jsx("p", { className: "cta-eyebrow", children: "Primera compra" }),
        /* @__PURE__ */ jsx("h2", { className: "cta-title", children: "Tu estilo te espera" }),
        /* @__PURE__ */ jsxs("p", { className: "cta-text", children: [
          "Usa el cupón ",
          /* @__PURE__ */ jsx("strong", { children: "BIENVENIDO10" }),
          " y obtén 10% de descuento en tu primera orden."
        ] }),
        /* @__PURE__ */ jsx(
          MagneticButton,
          {
            onClick: () => window.location.href = "/auth/register",
            className: "btn cta-btn",
            children: "Crear cuenta gratis"
          }
        )
      ]
    }
  ) }) });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let featuredProducts = [];
  try {
    const data = await api.products.list({ featured: true, limit: 8 });
    featuredProducts = Array.isArray(data.products) ? data.products : [];
  } catch (e) {
    console.error("Error loading products:", e);
  }
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Inicio", "description": "Ropa con personalidad. Prendas atemporales para quienes se atreven a definir su propio estilo." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/kaes/ecommerce-kaes/frontend/src/components/sections/HeroSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "CategoriesSection", CategoriesSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/kaes/ecommerce-kaes/frontend/src/components/sections/CategoriesSection.tsx", "client:component-export": "default" })} ${featuredProducts.length > 0 && renderTemplate`${renderComponent($$result2, "FeaturedProducts", FeaturedProducts, { "client:visible": true, "products": featuredProducts, "client:component-hydration": "visible", "client:component-path": "/home/kaes/ecommerce-kaes/frontend/src/components/sections/FeaturedProducts.tsx", "client:component-export": "default" })}`}${renderComponent($$result2, "CtaBanner", CtaBanner, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/kaes/ecommerce-kaes/frontend/src/components/sections/CtaBanner.tsx", "client:component-export": "default" })} ` })}`;
}, "/home/kaes/ecommerce-kaes/frontend/src/pages/index.astro", void 0);

const $$file = "/home/kaes/ecommerce-kaes/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
