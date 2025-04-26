import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const links = [
    {
      href: "#AboutMe",
      text: "About Me",
      id: 1,
    },
    {
      href: "#Projects",
      text: "Projects",
      id: 2,
    },
    {
      href: "#Skills",
      text: "Skills",
      id: 3,
    },
    {
      href: "#MessageMe",
      text: "Message Me",
      id: 4,
    },
  ];
  return (
    <div className="h-auto w-full" id="Sidebar">
      <ul className="w-[100%] h-full flex flex-col justify-center text-center items-center px-auto py-10 gap-10">
        <div className="">
          <li>
            <a href="https://github.com/Matz-dev1" target="_blank" className="">
              <Image
                src="/icons/githubIcon.png"
                width={40}
                height={40}
                alt="GitHub icon by Icons8"
              />
            </a>
          </li>
        </div>
        <div className=" flex flex-col justify-between my-auto gap-6 uppercase font-bold opacity-70">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="inline-block opacity-60 hover:opacity-100 hover:text-black hover:text-shadow-amber-200 hover:text-shadow-[0_5px_20px_rgba(255,193,7,0.7)]"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
