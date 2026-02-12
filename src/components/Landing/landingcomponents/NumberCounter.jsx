import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function NumberCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
}

export default NumberCounter;
