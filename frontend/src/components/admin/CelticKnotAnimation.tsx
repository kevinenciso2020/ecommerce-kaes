import React from 'react';
import { motion } from 'framer-motion';

const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.1 },
    },
  }),
};

const CelticKnotAnimation = ({ size = 300 }: { size?: number }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        className="celtic-knot"
      >
        <defs>
          <linearGradient id="knotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ffff00', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <motion.path
          d="M 23 77 A 28 28 0 1 1 77 77 M 77 77 L 50 22 L 23 77 M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7"
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="3.5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={drawAnimation}
          style={{ filter: 'blur(2px)' }}
        />

        <motion.circle
          cx="50"
          cy="60"
          r="28"
          fill="none"
          stroke="#ff0000"
          strokeWidth="3"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={drawAnimation}
          strokeLinecap="round"
        />

        <motion.circle
          cx="50"
          cy="60"
          r="28"
          fill="none"
          stroke="#ffff00"
          strokeWidth="2.5"
          initial="hidden"
          animate="visible"
          custom={1.1}
          variants={{
            ...drawAnimation,
            visible: { ...drawAnimation.visible(1.1), pathLength: 1, strokeWidth: 2.5, transition: { duration: 1.2, delay: 0.3 } }
          }}
        />

        <motion.path
          d="M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7"
          fill="none"
          stroke="#ff0000"
          strokeWidth="3.2"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={drawAnimation}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M 50 7 L 15 70 A 40 40 0 1 0 85 70 L 50 7"
          fill="none"
          stroke="#ffff00"
          strokeWidth="2.8"
          initial="hidden"
          animate="visible"
          custom={2.2}
          variants={{
            ...drawAnimation,
            visible: { ...drawAnimation.visible(2.2), pathLength: 1, strokeWidth: 2.8, transition: { duration: 1.5, delay: 0.5 } }
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.g
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            delay: 4.5,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

      </svg>
    </div>
  );
};

export default CelticKnotAnimation;