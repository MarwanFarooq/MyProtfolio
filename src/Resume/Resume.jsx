import React, { useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  ButtonGroup,
} from "@material-tailwind/react";
import { FaFileWord } from "react-icons/fa6";
import wordcv from "../../image/wordcv.png";
import pdf from "../../image/pdf.png";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { AiOutlineFolderView } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
const Resume = ({ resume }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [choosen, setchoosen] = useState(true);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div>
      <div
        ref={resume}
        className="mt-[6em] text-center text-white flex justify-center "
      >
        <Typography variant="h3" className="">
          Check My{" "}
        </Typography>
        <Typography variant="h3" className="text-[#b968c7] flex items-center ">
          Resuems
          <HiOutlineDocumentText className="text-4xl" />
        </Typography>
      </div>

      <div className="flex justify-center mt-16 ">
        <div className=" w-[50%] py-4 px-8">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
            lineClassName="white"
            activeLineClassName="ring-0 !bg-[#b968c7] text-white"
          >
            <Step className="text-white !bg-[#b968c7] text-2xl ">
              <MdOutlineDocumentScanner />
            </Step>
            <Step className="text-white !bg-[#b968c7] text-2xl ">
              <AiOutlineFolderView />
            </Step>
          </Stepper>
          {activeStep == 0 ? (
            <div className="mt-16 flex flex-col items-center">
              <Typography variant="h4" className="text-white">
                Which type of <span className="text-[#b968c7]">Resume</span> you
                need
              </Typography>
              <div className="flex gap-28 mt-11">
                <Button
                  onClick={() => {
                    handleNext();
                    setchoosen(false);
                  }}
                  className="bg-black text-blue-700 hover:scale-110 duration-300"
                >
                  <FaFileWord className="text-6xl  " />
                </Button>
                <Button
                  onClick={() => {
                    handleNext();
                    setchoosen(true);
                  }}
                  className="bg-black text-red-400 hover:scale-110 duration-300 "
                >
                  <FaFilePdf className="text-6xl" />
                </Button>
              </div>
            </div>
          ) : (
            activeStep == 1 && (
              <div className="mt-16 flex flex-col items-center  ">
                <Typography variant="h3" className="text-white">
                  Dawnload And Watch Cv
                </Typography>
                <div
                  style={{
                    backgroundImage: `url("${choosen ? pdf : wordcv}")`,
                    backgroundSize: "contain",
                  }}
                  className="duration-500 hover:-rotate-0 group [transform:rotate3d(1_,-1,_1,_60deg)]    border-4 border-b-8   overflow-hidden rounded-2xl relative h-96 w-64 bg-sky-800 p-5 flex flex-col items-start gap-4"
                >
                  <a
                    className="mt-20"
                    href={
                      choosen
                        ? `https://drive.google.com/file/d/1LNnLcbieLP9ZlTFMwWZMHeUmB3bXAxdb/view?usp=sharing`
                        : `https://docs.google.com/document/d/1v8nKugdto29cIcsEuTlSlOcQkGPVuNjE/edit`
                    }
                  >
                    <button className="duration-300 hover:bg-sky-900 border hover:bg-purple-400 rounded-lg text-white bg-[#b968c7] font-semibold  px-3 py-2 flex flex-row items-center gap-3">
                      View&Dowload
                    </button>
                  </a>

                  <svg
                    className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2   fill-gray-50 stroke-sky-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <path
                      data-name="layer1"
                      d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    ></path>
                  </svg>

                  <svg
                    class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-[#b968c7] stroke-sky-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <path
                      data-name="layer1"
                      d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <ButtonGroup
                  onClick={handlePrev}
                  color="purple"
                  className="mt-7"
                >
                  <Button>Back</Button>
                </ButtonGroup>{" "}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
