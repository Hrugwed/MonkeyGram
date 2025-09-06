import { motion } from "framer-motion";
import React from "react";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: ["-50vw", "50vw", "-50vw"], // Start left, go right, return left
    y: ["-30vh", "30vh", "-30vh"], // Start top, go bottom, return top
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  },
  animate2: {
    scale: [1, 1.1, 1],
    x: ["50vw", "-50vw", "50vw"], // Start right, go left, return right
    y: ["-40vh", "40vh", "-40vh"], // Start top, go bottom, return top
    transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }
  },
  animate3: {
    scale: [1, 1.3, 1],
    x: ["-60vw", "60vw", "-60vw"],
    y: ["-20vh", "20vh", "-20vh"],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
  },
  animate4: {
    scale: [1, 1.4, 1],
    x: ["60vw", "-60vw", "60vw"],
    y: ["-50vh", "50vh", "-50vh"],
    transition: { duration: 11, repeat: Infinity, ease: "easeInOut" }
  },
  animate5: {
    scale: [1, 1.5, 1],
    x: ["-70vw", "70vw", "-70vw"],
    y: ["-10vh", "10vh", "-10vh"],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
  },
  animate6: {
    scale: [1, 1.6, 1],
    x: ["70vw", "-70vw", "70vw"],
    y: ["-60vh", "60vh", "-60vh"],
    transition: { duration: 13, repeat: Infinity, ease: "easeInOut" }
  }
};

const BlurBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-70">
      <motion.div className="bg-yellow-500 w-[350px] h-[250px] rounded-full absolute" variants={circleVariants} animate="animate1" />
      <motion.div className="bg-orange-500 w-[360px] h-[260px] rounded-full absolute" variants={circleVariants} animate="animate2" />
      <motion.div className="bg-green-500 w-[370px] h-[270px] rounded-full absolute" variants={circleVariants} animate="animate3" />
      <motion.div className="bg-purple-500 w-[380px] h-[280px] rounded-full absolute" variants={circleVariants} animate="animate4" />
      <motion.div className="bg-blue-500 w-[390px] h-[290px] rounded-full absolute" variants={circleVariants} animate="animate5" />
      <motion.div className="bg-pink-500 w-[400px] h-[300px] rounded-full absolute" variants={circleVariants} animate="animate6" />
    </div>
  );
};

export default BlurBackground;