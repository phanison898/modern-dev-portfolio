import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import logo from ".assets/admin.jpg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello! I'm Phanison....", "<Guy who loves to code />", "<Loves coffee & Beer too />"],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative h-32 w-32 rounded-full"
        src="https://firebasestorage.googleapis.com/v0/b/phanison-linkedin-clone.appspot.com/o/admin.jpg?alt=media&token=ada2528d-da4c-4c97-b6a7-07b4fe9e8735"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 text-gray-500 tracking-[15px]">Software Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red"></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
