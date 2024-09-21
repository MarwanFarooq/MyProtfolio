import React, { useState } from "react";
import Svg from "../assets/rocket-svgrepo-com.svg";
import telephone from "../assets/telephone-phone-svgrepo-com.svg";
import { Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

const Contectus = ({ contectus }) => {
  const [userInfo, setUserInfo] = useState({
    from_name: "",
    message: "",
    user_email: "",
  });
  const [CheckInfo, setCheckInfo] = useState("");
  const [alert, setalert] = useState(false);

  const sendMsg = () => {
    const emailValid = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    !userInfo.from_name.length
      ? setCheckInfo("please enter your name first")
      : !emailValid.test(userInfo.user_email)
      ? setCheckInfo("invalid email")
      : userInfo.message.length < 3
      ? setCheckInfo("please enter atleast one word in your message")
      : emailjs
          .send("service_3yl506a", "template_wj9r1si", userInfo, {
            publicKey: "JAU7BgYAXgywKutZR",
          })
          .then(
            async () => {
              await setCheckInfo(
                "done, we will reaply to your message At the earliest"
              );
              setalert(true);
            },
            (error) => {
              setCheckInfo("netWork Error , please try again later");
            }
          );
  };

  return (
    <div>
      <div ref={contectus} className="my-[6em]">
        <Typography
          variant="h2"
          className="  text-white flex justify-center items-center gap-4"
        >
          Contact
          <span>
            <img width={30} className="" src={telephone} alt="" />
          </span>
        </Typography>
        <Typography variant="h5" className="text-center  text-gray-300">
          Feel free to reach out to me for any{" "}
          <span className="text-[#b968c7]">questions</span> or
          <span className="text-[#b968c7]"> opportunities!</span>
        </Typography>
      </div>
      <div className="flex justify-center ">
        <div className="bg-[#171721] border contect border-white shadow-xl shadow- w-[50%]  gap-2 rounded-xl p-6 text-sm">
          <div className="flex justify-start ms-3 my-4">
            <h1 className="text-center  text-white text-2xl font-bold  ">
              Email Me
            </h1>
            <img src={Svg} width={30} alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <Input
              className="  text-white mobile:w-[82%] tablet:w-full  "
              color="purple"
              label="User-Name"
              type="text"
              value={userInfo.from_name}
              onChange={(inp) =>
                setUserInfo({ ...userInfo, from_name: inp.target.value })
              }
            />
            <Input
              className="    text-white mobile:w-[82%] tablet:w-full "
              color="purple"
              label="Your-Email"
              type="email"
              value={userInfo.user_email}
              onChange={(inp) =>
                setUserInfo({ ...userInfo, user_email: inp.target.value })
              }
            />

            <textarea
              placeholder="Your feedback..."
              onChange={(inp) =>
                setUserInfo({ ...userInfo, message: inp.target.value })
              }
              className=" bg-transparent text-white w-full text-slate-600 h-48  placeholder:opacity-50 border border-slate-200  resize-none outline-none rounded-lg p-2 duration-300 focus:border-purple-500"
            ></textarea>
          </div>
          <div className="my-5">
            <button
              onClick={sendMsg}
              style={{
                background:
                  "-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)",
              }}
              className="  w-full rounded-lg p-4 duration-300 text-white "
            >
              Send
            </button>
            {alert ? (
              <div className="bg-green-400 text-center p-4 mt-10 ">
                <h1>{CheckInfo}</h1>
              </div>
            ) : (
              <div
                className={`${
                  CheckInfo ? "bg-red-500" : "bg-transparent"
                } text-center p-4 mt-10 `}
              >
                <h1>{CheckInfo}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contectus;
