import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import profile from "../images/profile.jpeg";

export default function PolaroidCard() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
  });

  // scroll animation
  const rotateBack = useTransform(progress, [0, 0.25], [-14, -24]);
  const rotateMiddle = useTransform(progress, [0, 0.25], [9, 18]);

  const xBack = useTransform(progress, [0, 0.25], [0, -80]);
  const xMiddle = useTransform(progress, [0, 0.25], [0, 70]);

  const yFloat = useTransform(progress, [0, 1], [0, -20]);

  return (
    <motion.div
      style={{ y: yFloat }}
      className="relative w-[360px] h-[480px]"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* ================= MIDDLE ================= */}

      <motion.div
        style={{
          rotate: rotateMiddle,
          x: xMiddle,
        }}
        className="absolute left-8 top-4 w-72 rounded-md bg-[#faf8f3] p-3 shadow-2xl"
      >
        <div className="h-80 rounded bg-[#dfddd6]" />

        <p className="mt-1 text-sm italic text-neutral-500">QA Engineer</p>
      </motion.div>

      {/* ================= FRONT ================= */}

      <motion.div
        whileHover={{
          rotate: 0,
          y: -12,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
        }}
        className="absolute left-0 top-0 w-72 rounded-md bg-white p-3 shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
      >
        {/* tape */}

        <div className="absolute left-1/2 top-0 h-7 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-sm bg-[#efe4b8]/80 backdrop-blur" />

        <img src={profile} className="h-80 w-full rounded object-cover" />

        <div className="mt-4 text-center">
          {/* <h3 className="font-serif text-xl text-[#2A3D63]">Rashifa</h3> */}

          <p className="mt-1 text-sm italic text-neutral-500">
            Kichijoji, Tokyo! ♥
          </p>
        </div>
      </motion.div>

      {/* small sticker */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="absolute -right-2 bottom-8 rounded-full bg-[#2A3D63] px-4 py-2 text-xs text-white shadow-lg"
      >
        Available for Work ✦
      </motion.div>
    </motion.div>
  );
}
