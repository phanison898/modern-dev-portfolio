import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg space-x-7 items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
        alt=""
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center "
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of India</h4>
        <p className="mt-1 text-2xl font-bold">Phanison</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
            alt=""
            className="w-10 h-10 rounded-full"
          />{" "}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="py-10 uppercase text-gray-300">Started work... -Ended work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
