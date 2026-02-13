export const fadeInBlur = (duration = 0.8, delay = 0) => ({
  hidden: { opacity: 0, filter: "blur(3px)"},
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration, delay } }
});


export const fadeIn = (duration = 0.8, delay = 0) => ({
  hidden: { opacity: 0},
  visible: { opacity: 1, transition: { duration, delay } }
})