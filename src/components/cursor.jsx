import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 10,
        y: mouse.y - 10,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{
        position: "fixed",
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#701a75",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}