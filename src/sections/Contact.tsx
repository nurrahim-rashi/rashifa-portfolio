import { motion } from "framer-motion";
import { socials } from "../data/socials";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <motion.section
      id="contact"
      className="py-20 px-4 bg-[#F4EFE5] text-center bg-cover"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-serif font-bold mb-6 text-[#2A3D63]"
        >
          Let’s Connect!
        </motion.h2>

        <motion.p variants={itemVariants} className="mb-6 text-neutral-600">
          I’m open to collaboration, freelance, or just chatting over coffee ☕️
        </motion.p>

        <motion.p variants={itemVariants} className="mb-6 text-neutral-600">
          Btw, all of the visuals here are captured through my lens 🌿📷✨
        </motion.p>

        {/* SOCIAL BUTTONS */}
        <motion.div
          variants={containerVariants}
          className="flex justify-center gap-4 mt-6 flex-wrap"
        >
          {socials.map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={itemVariants}
              className="group w-12 h-12 flex items-center justify-center border rounded-full hover:scale-110 transition"
            >
              <i
                className={`${icon} text-xl text-[#2A3D63] transition-colors duration-700`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
