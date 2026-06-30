import { motion } from "framer-motion";
import backgroundd from "../images/bg.png";
import ScrollDownButton from "../components/ScrollDownButton";
import InteractiveText from "../components/InteractiveText";
import PolaroidCard from "../components/PolaroidCard";

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

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat px-6 py-12 text-neutral-800 md:py-18 lg:py-18"
      style={{ backgroundImage: `url(${backgroundd})` }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          md:gap-16
          lg:min-h-[75vh]
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT */}
        <motion.div
          variants={itemVariants}
          className="
            order-1
            max-w-3xl
            text-center
            lg:text-left
            lg:pl-8
          "
        >
          <h1 className="mb-6 font-serif text-4xl leading-tight tracking-wide text-[#2A3D63] md:text-6xl">
            <InteractiveText text="Rashifa Nurrahim" />
            <br />
            <InteractiveText text="is a QA Engineer &" />
            <br />
            <InteractiveText text="Product Designer" />
            <br />
            <InteractiveText text="based in " />
            <span className="italic">
              <InteractiveText text="Indonesia" />
            </span>
            .
          </h1>

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              lg:justify-start
            "
          >
            <a
              href="#projects"
              className="rounded-full bg-[#2A3D63] px-6 py-3 font-serif text-xl text-white transition hover:scale-105 hover:bg-white hover:text-[#2A3D63] hover:ring-2 hover:ring-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#2A3D63] px-6 py-3 font-serif text-xl text-[#2A3D63] transition hover:scale-105 hover:bg-white hover:ring-2 hover:ring-white"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={itemVariants}
          className="
            order-2
            flex
            justify-center

            lg:justify-start
            lg:-translate-x-32
          "
        >
          <PolaroidCard />
        </motion.div>
      </motion.div>

      <ScrollDownButton />
    </section>
  );
}
