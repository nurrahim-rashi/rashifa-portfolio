import { motion } from "framer-motion";
import backgroundd from "../images/bg.png";
import ScrollDownButton from "../components/ScrollDownButton";
import InteractiveText from "../components/InteractiveText";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const HoverLetter = ({ char }: { char: string }) => {
    return (
      <motion.span
        className="inline-block cursor-default"
        whileHover={{
          y: -6,
          scale: 1.15,
          color: "#1f3a5b",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    );
  };

  const AnimatedText = ({ text }: { text: string }) => {
    return (
      <span className="inline-block">
        {text.split("").map((char, i) => (
          <HoverLetter key={i} char={char} />
        ))}
      </span>
    );
  };

  return (
    <section
      id="hero"
      className="py-36 px-4 text-neutral-800 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundd})` }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto grid grid-cols-1 gap-4"
      >
        {/* NAME BLOCK */}
        <div className="relative">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl text-[#2A3D63] mb-4 leading-tight font-serif tracking-wide"
          >
            <InteractiveText text="Rashifa Nurrahim" />
            <br />
            <InteractiveText text="is a QA Engineer &" />
            <br />
            <InteractiveText text="Product Designer based in" />
            <br />
            <span className="italic">
              <InteractiveText text="Indonesia" />
            </span>
            .
          </motion.h1>{" "}
        </div>

        {/* BUTTONS */}
        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="text-xl px-6 py-3 bg-[#2A3D63] text-white rounded-full transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-serif hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="text-xl px-6 py-3 text-[#2A3D63] rounded-full border border-[#2A3D63] transition hover:ring-2 hover:ring-white hover:bg-white hover:text-[#2A3D63] hover:border-[#2A3D63] font-serif hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <ScrollDownButton />
    </section>
  );
}
