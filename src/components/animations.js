import { X } from "lucide-react";

export const fadeInBlur = (duration = 0.8, delay = 0) => ({
  hidden: { opacity: 0, filter: "blur(3px)"},
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration, delay } }
});


export const fadeIn = (duration = 0.8, delay = 0) => ({
  hidden: { opacity: 0},
  visible: { opacity: 1, transition: { duration, delay } }
});

export const fadeDown = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration, delay }}
});

export const fadeUp = (duration = 0.5, delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration, delay }}
  
});

export const fadeRight = (duration = 0.5, delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration, delay }}
  
});

export const fadeLeft = (duration = 0.5, delay = 0) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration, delay }}
  
});

export const fadeUpBlur = (duration = 0.7, delay = 0) => ({
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration, delay, ease: "easeOut" }
  }
})