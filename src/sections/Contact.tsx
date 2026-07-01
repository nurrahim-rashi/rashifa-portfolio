import { motion } from "framer-motion";
import { socials } from "../data/socials";
import InteractiveText from "../components/InteractiveText";

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
    <footer id="contact" className="section-contact relative bg-[#F4EFE5]">
      <div className="relative z-10 mx-auto max-w-6xl px-8 py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="mb-6 font-serif text-3xl md:text-6xl font-serif leading-[1.05] tracking-wide text-[#2A3D63]">
            <InteractiveText text="Let's create" />
            <br />
            <InteractiveText text="something good together." />
            <p className="mt-6 max-w-md text-lg text-neutral-600">
              I’m open to collaboration, freelance, or just chatting over coffee
              ☕️
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right font-display text-xl italic text-foreground">
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
        </div>
      </div>
    </footer>
  );
}
