import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function NumberCounter({ value, duration = 2 }) {
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default NumberCounter;