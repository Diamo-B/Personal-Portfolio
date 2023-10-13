import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

type Props = {
  colorSuffix?: string,
  height?:string
}

export default function CursorBlinker({colorSuffix, height}:Props) {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={`inline-block ${height||"h-5 lg:h-10"} w-0.5 lg:w-1 translate-y-0.5 lg:translate-y-1 ${colorSuffix? "bg-"+colorSuffix:"bg-slate-900"}`}
    />
  );
}
