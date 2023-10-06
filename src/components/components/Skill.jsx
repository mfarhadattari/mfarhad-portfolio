"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Skill = ({ skill, i }) => {
  const { id, src, title, style } = skill;
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50, translateY: -50 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.2, delay: i * 0.3 }}
      key={id}
      className={`shadow-md hover:shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
    >
      <Image src={src} alt="title" className="w-20 mx-auto" />
      <p className="mt-4">{title}</p>
    </motion.div>
  );
};

export default Skill;
