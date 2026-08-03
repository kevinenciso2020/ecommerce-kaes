"use client";
import { motion } from "framer-motion";
import { StaggerGrid, StaggerItem } from "../motion/StaggerGrid";

const categories = [
  {
    name: "Camisetas",
    slug: "camisetas",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V80a8,8,0,0,0,8,8h32V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V88h32a8,8,0,0,0,8-8V56A16,16,0,0,0,216,40ZM40,48H216l.2,16H152V88a8,8,0,0,0-2.3-5.6l-32-40a8,8,0,0,0-11.3,0l-32,40A8,8,0,0,0,104,88V64H39.8Z"></path></svg>`,
  },
  {
    name: "Pantalones",
    slug: "pantalones",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M208,40H48A16,16,0,0,0,32,56V88H224V56A16,16,0,0,0,208,40Zm-32,32H80V200h16V112H160V200a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72a16,16,0,0,0-16-16H208Z"></path></svg>`,
  },
  {
    name: "Vestidos",
    slug: "vestidos",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M240,64H224V56a24,24,0,0,0-24-24H168V24a8,8,0,0,0-16,0v8H104V24a8,8,0,0,0-16,0v8H56A24,24,0,0,0,32,56v8H16a8,8,0,0,0,0,16H32v88a16,16,0,0,0,16,16h8v48a8,8,0,0,0,16,0V152h24V224a8,8,0,0,0,16,0V152h48v24a8,8,0,0,0,16,0V152h8a16,16,0,0,0,16-16V88H240a8,8,0,0,0,0-16Z"></path></svg>`,
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    icon: `<svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M244,80a12,12,0,0,0-12-12H224a32,32,0,0,1-32-32V24A12,12,0,0,0,180,12H76A12,12,0,0,0,64,24V36A32,32,0,0,1,32,68H24a12,12,0,0,0,0,24H32a32,32,0,0,1,32,32v12a12,12,0,0,0,12,12h28v20a60,60,0,0,0,32,52.26V244a12,12,0,0,0,24,0V204.26A60,60,0,0,0,156,152V136h12a32,32,0,0,0,32-32H192a12,12,0,0,0,0-24ZM96,60A36,36,0,0,1,127.85,24H128.15A36,36,0,0,1,160,60ZM56,100A36,36,0,0,1,80.15,64H175.85A36,36,0,0,1,200,100v32H56ZM136,152A76,76,0,0,0,96,208v-40a12,12,0,0,0-24,0v40a76,76,0,0,0,64,75.85V152Z"></path></svg>`,
  },
];

export default function CategoriesSection() {
  return (
    <section className="section categories-section">
      <div className="container">
        <StaggerGrid className="categories-grid">
          {categories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <a href={`/productos?category=${cat.slug}`} className="category-card">
                <div
                  className="category-icon"
                  dangerouslySetInnerHTML={{ __html: cat.icon }}
                />
                <span className="category-name">{cat.name}</span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}