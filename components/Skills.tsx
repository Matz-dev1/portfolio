import React from "react";
import Image from "next/image";
import { skills } from "@/data/SkillsData";

const Skills = () => {
  return (
    <div className="h-[100vh] w-full bg-[#a91518] " id="Skills">
      <div className="flex h-full w-full justify-center py-auto flex-row gap-2 px-4 ">
        <section className="w-[90%] my-auto flex flex-col gap-4 px-2">
          <h2 className="text-2xl text-[#d2e9b3] ">My skills</h2>
          <div className="flex flex-row gap-6 flex-wrap bg-[#ac2022] justify-start">
            {skills.map(({ text, link }) => (
              <div
                key={text}
                className="flex flex-row items-center gap-3 p-4 w-1/5"
              >
                <div className="">
                  <Image
                    src={link}
                    width={75}
                    height={75}
                    alt={`${text} icon`}
                    className=" min-h-[75px]"
                  />
                </div>
                <p className="text-center flex py-auto align-middle justify-center items-center">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
