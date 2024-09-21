import React from "react";
import Svg from "../assets/undraw_firmware_re_fgdy.svg";
import { Typewriter } from "react-simple-typewriter";
import ScrollAnimation from "react-animate-on-scroll";
const Home = ({ home }) => {
  return (
    <div
      ref={home}
      className="tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-center mobile:mt-[7em] tablet:mt-0 mobile:gap-[5em] "
    >
      <div className="text-center tablet:h-[100vh] flex items-center justify-center text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl ">
            {" "}
            Hi There! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="text-3xl">
            I'M : <span className="text-[#b968c7]">Marwan Farook</span>
          </h1>

          <div className="text-[#b968c7] text-[1.3rem] ">
            <Typewriter
              loop={0}
              typeSpeed={100}
              deleteSpeed={100}
              words={[
                "I'M : FrontEnd Developer",
                " I'M : FreeLancer!",
                "React.js:Developer",
                "Next.js:Develober",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="App tablet:h-[75vh] flex items-center ">
        <img width={600} src={Svg} alt="" />
      </div>
    </div>
  );
};

export default Home;
