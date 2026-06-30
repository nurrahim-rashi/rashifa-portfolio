import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

export default function InteractiveText({ text, className }: Props) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ letterSpacing: "0.02em" }}
      whileHover={{
        letterSpacing: "0.04em",
      }}
      transition={{
        letterSpacing: {
          duration: 0.45,
          ease: "easeOut",
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{
            y: -4,
            scale: 1.08,
            rotate: [-2, 2, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 16,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
