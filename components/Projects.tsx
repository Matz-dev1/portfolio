import React from "react";
import { projectData } from "@/data/ProjectData";
import Image from "next/image.js";
import Link from "next/link.js";

const Projects = () => {
  return (
    <div className="flex flex-col h-auto max-h-screen" id="Projects">
      {projectData.map((el) => (
        <div
          className={`flex flex-row w-full gap-6 h-[33.4vh]  ${el.class}`}
          key={el.id}
        >
          <Image
            src={el.img}
            alt={`Project ${el.img}`}
            width={500}
            height={500}
            className="object-fill bg-amber-50"
          />
          <div className="flex flex-col gap-4 my-auto">
            <h2 className="text-[20px] uppercase">{el.name}</h2>
            <p className="opacity-80">{el.text}</p>
            <p>
              <Link href={el.link} className="flex flex-row gap-4 group">
                <Image
                  src="/icons/githubIcon.png"
                  alt="Github icon"
                  width={40}
                  height={40}
                  className="group-hover:scale-120 transition-transform transition-300"
                />
                <span className="flex my-auto group-hover:underline group-hover:text-white">
                  View on GitHub →
                </span>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
