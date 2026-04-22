"use client";
import { motion } from "framer-motion";
import { RevealSection } from "../motion/RevealSection";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 },
  }),
};

export default function FeaturedProducts({
  products,
}: {
  products: Array<{
    slug: string;
    name: string;
    price: number;
    images?: Array<{ url: string }>;
    category?: { name: string };
  }>;
}) {
  return (
    <section className="section featured-section">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <h2 className="section-title">Destacados</h2>
            <a href="/productos" className="see-all">
              Ver todos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </RevealSection>

        <div className="products-grid">
          {products.map((product, i) => {
            const img = product.images?.[0]?.url;
            const price = Number(product.price).toLocaleString("es-CO");

            return (
              <RevealSection key={product.slug} custom={i}>
                <a href={`/productos/${product.slug}`} className="product-card">
                  <div className="product-image">
                    {img ? (
                      <img src={img} alt={product.name} loading="lazy" />
                    ) : (
                      <div className="product-placeholder">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                          <line x1="7" y1="7" x2="7.01" y2="7" />
                        </svg>
                      </div>
                    )}
                    <div className="product-overlay" />
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category?.name}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${price}</p>
                  </div>
                </a>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}