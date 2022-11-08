import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon url="https://www.youtube.com/c/Phanison" fgColor="grey" bgColor="transparent" />
        <SocialIcon
          url="https://www.facebook.com/phanison225"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/phanison225/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/phanison/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon url="https://github.com/phanison898" fgColor="grey" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          url="https://www.youtube.com/c/Phanison"
          network="email"
          fgColor="grey"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </div>
  );
}
