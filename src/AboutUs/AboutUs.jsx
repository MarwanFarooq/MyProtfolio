import React from "react";
import Svg from "../assets/avatar.5852f40fbb38aa284829fa3fb7722225.svg";
import { Typography } from "@material-tailwind/react";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <>
      <div className="tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col-reverse mobile:items-center mobile:mt-[10em] tablet:mt-3 mobile:gap-[8em] container mx-auto">
        <div className=" flex items-center  mobile:justify-center justify-end w-[65%]">
          <Tilt>
            <img width={300} src={Svg} alt="" />
          </Tilt>
        </div>
        <div className="flex flex-col tablet:items-center mobile:items-center justify-center ">
          <h1 className="text-white tablet:text-5xl mobile:text-4xl text-center    ">
            LET ME<span className="text-[#b968c7] mx-3 "> INTRODUCE </span>{" "}
            MYSELF
          </h1>
          <div className="text-white text-xl flex flex-col mt-3 gap-4  font-medium  ">
            <Typography variant="h4" className="font-medium text-center ">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </Typography>
            <Typography variant="h4" className="font-medium text-center">
              I am fluent in classics{" "}
              <span className="text-[#b968c7]">
                like Javascript , css , Html{" "}
              </span>
            </Typography>
            <span variant="h4" className="font-medium text-center ">
              My field of Interest's are building new{" "}
              <span className="text-[#b968c7]">
                Web Technologies and Products{" "}
              </span>{" "}
            </span>
            <Typography variant="h4" className="font-medium text-center">
              Whenever possible, I also apply my passion for developing products
              with
              <span className="text-[#b968c7]">
                Modern Javascript Library
              </span>{" "}
              and Frameworks like
              <span className="text-[#b968c7]">React.js</span> and{" "}
              <span className="text-[#b968c7]">Next.js</span>
            </Typography>
          </div>
        </div>
      </div>

      <div className="text-center text-white flex flex-col gap-3 mt-[6em] ">
        <Typography variant="h2">FIND ME ON</Typography>
        <Typography variant="small">
          Feel free to <span className="text-[#b968c7]">connect</span> with me
        </Typography>
      </div>

      <ul className="example-2 mt-5 flex justify-center flex-wrap">
        <li className="icon-content Li">
          <a
            href="https://www.linkedin.com/in/marwan-farook-411154314/"
            aria-label="Discord"
            data-social="discord"
          >
            <div className="filled"></div>
            <TiSocialLinkedin />
          </a>
          <div className="tooltip">Linkedin</div>
        </li>
        <li className="icon-content Github">
          <a
            href="https://github.com/marwan-farook22"
            aria-label="Steam"
            data-social="steam"
          >
            <div className="filled"></div>
            <FaGithub />
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content inst">
          <a
            href="https://www.instagram.com/marwanfarooq_ "
            aria-label="Instagram"
            data-social="instagram"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill=""
              className="bi bi-instagram"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div className="tooltip hover:shadow-2xl hover:shadow-orange-600">
            Instagram
          </div>
        </li>
        <li className="icon-content whatsapp">
          <a
            href="https://wa.me/+201020483849"
            aria-label="whatsapp"
            data-social="whatsapp"
          >
            <div className="filled"></div>
            <IoLogoWhatsapp />
          </a>
          <div className="tooltip hover:shadow-2xl hover:shadow-green-500">
            whatsapp
          </div>
        </li>
        <li className="icon-content Facebook">
          <a
            href="https://web.facebook.com/profile.php?id=100008435021770&locale"
            aria-label="Facebook"
            data-social="Facebook"
          >
            <div className="filled"></div>
            <FaFacebook />
          </a>
          <div className="tooltip hover:shadow-2xl hover:shadow-green-500">
            Facebook
          </div>
        </li>
      </ul>
    </>
  );
};

export default AboutUs;
