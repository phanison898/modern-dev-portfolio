import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen max-w-7xl flex flex-col md:flex-row justify-evenly items-center text-center md:text-left px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
        alt=""
        className="w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] flex-shrink-0 -mb-20 md:mb-0 rounded-full md:rounded-lg object-cover"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-orange-700 italic">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate necessitatibus
          eaque id esse molestiae ipsum repellat, voluptas odio, commodi sit hic. Dignissimos,
          exercitationem tenetur? Esse natus nisi tenetur. Consequuntur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum voluptate necessitatibus eaque id esse molestiae ipsum
          repellat, voluptas odio, commodi sit hic. Dignissimos, exercitationem tenetur? Esse natus
          nisi tenetur. Consequuntur.
        </p>
      </div>
    </motion.div>
  );
}
