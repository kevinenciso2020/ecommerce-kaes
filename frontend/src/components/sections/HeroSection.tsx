"use client";
import { motion } from "framer-motion";
import { MagneticButton } from "../motion/MagneticButton";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100, damping: 20 },
  }),
};

const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: i * 0.3, duration: 0.1 },
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-pattern" aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-left">
          <div className="hero-symbol-wrapper">
            <svg className="hero-symbol" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-gray-800)" />
                  <stop offset="100%" stopColor="var(--color-gray-600)" />
                </linearGradient>
              </defs>

              <motion.g
                className="hero-knot"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={drawAnimation}
              >
                <circle cx="100" cy="55" r="35" fill="none" stroke="url(#heroGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="155" cy="127" r="35" fill="none" stroke="url(#heroGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="45" cy="127" r="35" fill="none" stroke="url(#heroGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="100" cy="55" r="12" fill="url(#heroGradient)" />
                <circle cx="155" cy="127" r="12" fill="url(#heroGradient)" />
                <circle cx="45" cy="127" r="12" fill="url(#heroGradient)" />
                <circle cx="100" cy="100" r="8" fill="url(#heroGradient)" className="hero-center-dot" />
              </motion.g>

              <motion.g
                className="hero-ring"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={drawAnimation}
              >
                <circle cx="100" cy="100" r="55" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
              </motion.g>
            </svg>
          </div>
        </div>

        <div className="hero-right">
          <motion.p
            className="hero-eyebrow"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
          >
            Nueva temporada
          </motion.p>

          <motion.h1
            className="hero-title"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
          >
            <span className="hero-title-kaes">kaes</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
          >
            simply eternal
          </motion.p>

          <motion.p
            className="hero-subtitle"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
          >
            Cada prenda nace desde lo esencial y evoluciona contigo.
          </motion.p>

          <motion.div
            className="hero-actions"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
          >
            <MagneticButton
              onClick={() => window.location.href = "/productos"}
              className="btn btn-primary hero-btn-primary"
            >
              Explorar colecci&oacute;n
            </MagneticButton>
            <a href="/auth/register" className="btn btn-outline hero-btn-outline">
              Crear cuenta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}