import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import marwanphoto from "../../image/marwanphoto.jpg";

function NavList({ home, skills, project, resume, contectus }) {
  return (
    <ul className="my-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
      >
        <a
          href="#"
          className="flex items-center  text-white hover:text-[#be6adf] transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        onClick={() => skills.current.scrollIntoView({ behavior: "smooth" })}
      >
        <a
          href="#"
          className="flex items-center  text-white hover:text-[#be6adf] transition-colors"
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center  text-white hover:text-[#be6adf] transition-colors"
          onClick={() => project.current.scrollIntoView({ behavior: "smooth" })}
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center  text-white hover:text-[#be6adf] transition-colors"
          onClick={() => resume.current.scrollIntoView({ behavior: "smooth" })}
        >
          Resume
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() =>
            contectus.current.scrollIntoView({ behavior: "smooth" })
          }
          href="#"
          className="flex items-center  text-white hover:text-[#be6adf] transition-colors"
        >
          Contect us
        </a>
      </Typography>
    </ul>
  );
}

function NavBar({ home, skills, project, resume, contectus }) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  const handleNavigation = (window) => {
    if (scrollY > window.scrollY) {
      setScrollUp(true);
    } else if (scrollY < window.scrollY) {
      setScrollUp(false);
    }
    setScrollY(window.scrollY);
  };
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener(
      "scroll",
      (e) => handleNavigation(e.currentTarget)
      // console.log(e)
    );
    //material nav fun
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Navbar
      className={` ${
        scrollUp ? `top-0` : `-top-80`
      } max-w-full !bg-transparent sticky duration-700 border-0 z-50 `}
    >
      <div className="flex items-center justify-between  text-white !bg-transparent ">
        <div className="flex items-center gap-4">
          <img
            src={marwanphoto}
            alt="avatar"
            className="relative inline-block object-cover object-center w-12 h-12 rounded-lg"
          />
          <div>
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
              Marwan-Farook
            </h6>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-[#be6adf]">
              Web_Developer
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList
            home={home}
            skills={skills}
            project={project}
            resume={resume}
            contectus={contectus}
          />
        </div>
        <input
          className="check-icon hidden "
          id="check-icon"
          name="check-icon"
          type="checkbox"
        />
        <label
          className="icon-menu  ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          htmlFor="check-icon"
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label>
      </div>
      <Collapse open={openNav}>
        <NavList
          home={home}
          project={project}
          skills={skills}
          resume={resume}
          contectus={contectus}
        />
      </Collapse>
    </Navbar>
  );
}
export default NavBar;
