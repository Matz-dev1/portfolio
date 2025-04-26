import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-auto" id="Footer">
      <ul className="flex flex-row justify-start py-6 gap-10 w-[100%]">
        <div className="flex flex-row justify-start px-4 gap-10 w-1/2">
          <li>Mateusz Zapolski</li>
          <li>mzapolski0@gmail.com</li>
          <li>
            Icons by{" "}
            <Link
              href="https://icons8.com"
              target="_blank"
              className="hover:text-black"
            >
              Icons8
            </Link>
          </li>
        </div>
        <div className="ml-auto px-4">
          <li>
            <Link href="#AboutMe" className="hover:text-black">
              Back to Top
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
