import React from "react";
import Image from "next/image";
import { skills } from "@/data/SkillsData";
import { skillsToLearn } from "@/data/SkillsData";

const Skills = () => {
  return (
    <div className="h-[100vh] w-full bg-[#082360] " id="Skills">
      <div className="flex h-full w-full justify-center py-25 flex-row gap-2 px-4 ">
        <section className="w-1/2 flex flex-col gap-4 px-2 bg-[#364a7d80]">
          <h2 className="text-xl text-white ">What I know...</h2>
          <div className="flex flex-row gap-6 flex-wrap">
            {skills.map(({ text, link }) => (
              <div key={text} className="flex flex-col gap-2">
                <div className="">
                  <Image
                    src={link}
                    width={100}
                    height={100}
                    alt={`${text} icon`}
                    className=" min-h-[100px]"
                  />
                </div>
                <p className="text-center">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-1/2 flex flex-col gap-4 bg-[#364a7d80] px-2">
          <h2 className="text-xl text-white ">Still learning...</h2>
          <div className="flex flex-row">
            {skillsToLearn.map(({ text, link }) => (
              <div key={text} className="flex flex-col gap-2">
                <div className="">
                  <Image
                    src={link}
                    width={100}
                    height={100}
                    alt={`${text} icon`}
                    className=" min-h-[100px]"
                  />
                </div>
                <p className="text-center">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
