import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" flex mt-[6em] w-full px-12 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-white  py-6 text-center md:justify-between">
      <Typography className="font-normal">&copy; 2024 Marwan-farook</Typography>
      <ul className="flex justify-center items-center  gap-6">
        <li>
          <Typography
            className="cursor-pointer  text-xl transition-colors hover:text-blue-800 "
            as="a"
            href="https://web.facebook.com/profile.php?id=100008435021770&locale"
            target="_blank"
          >
            <FaFacebook />
          </Typography>
        </li>
        <li>
          <Typography
            className="cursor-pointer  text-xl transition-colors hover:text-[#FD03BD] "
            as="a"
            href="https://www.instagram.com/marwanfarooq_ "
            target="_blank"
          >
            <FaInstagram />
          </Typography>
        </li>

        <li>
          <Typography
            className="cursor-pointer  text-xl transition-colors hover:text-[#075E54] "
            as="a"
            href="https://wa.me/+201020483849"
            target="_blank"
          >
            <FaWhatsapp />
          </Typography>
        </li>
        <li>
          <Typography
            className="cursor-pointer  text-xl transition-colors hover:text-black "
            as="a"
            href="https://github.com/marwan-farook22"
            target="_blank"
          >
            <FaGithub />
          </Typography>
        </li>
        <li>
          <Typography
            className="cursor-pointer  text-xl transition-colors hover:text-cyan-500 "
            as="a"
            href="linkedin.com/in/marwan-farook-411154314"
            target="_blank"
          >
            <FaLinkedin />
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
