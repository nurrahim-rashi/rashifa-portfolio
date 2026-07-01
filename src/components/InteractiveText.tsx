import { motion } from "motion/react";

type InteractiveTextProps = {
  text: string;
};

export default function InteractiveText({ text }: InteractiveTextProps) {
  return (
    <span className="inline-block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          whileHover={{
            y: -6,
            rotate: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 12,
          }}
          className="inline-block cursor-default"
          style={{ transformOrigin: "50% 100%" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
