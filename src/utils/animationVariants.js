export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const slideDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const tapVariants = {
  tap: { scale: 0.95 },
};

export const hoverVariants = {
  hover: { y: -2 },
};

export const rotateInVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: -10 },
};

export const popInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  exit: { opacity: 0, scale: 0.8 },
};

export const getAnimationConfig = (type = 'normal') => {
  const configs = {
    fast: {
      duration: 0.15,
      ease: 'easeInOut',
    },
    normal: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    slow: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  };

  return configs[type] || configs.normal;
};
