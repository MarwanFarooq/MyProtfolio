import React, { useState } from "react";
import { Chip } from "@material-tailwind/react";
import QuranPhoto from "../../image/download (2).jpeg";
import Shahid from "../../image/12.png";
import Otlob from "../../image/1.png";
import MaleStore from "../../image/different-fashion-styles-for-men-cover.jpg";
import DokanShop from "../../image/DokanShop.png";
import facebookSign from "../../image/facebookSign.png";
import golden from "../../image/golden.png";
import makeup from "../../image/makeup.png";
import Netflix from "../../image/Netflix.png";
import town from "../../image/town.png";
import calculator from "../../image/calculator.png";
import convirt from "../../image/convert.png";
import comic from "../../image/comic.png";
import clock from "../../image/clock.png";
import weather from "../../image/weather.png";
import cart from "../../image/cart.png";
import drklight from "../../image/drklight.png";
import translator from "../../image/translator.png";
import typingclub from "../../image/Typingpng.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { MdWeb } from "react-icons/md";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";

const Project = ({ project }) => {
  const [activeTab, setActiveTab] = useState("All");

  const data = [
    {
      label: "Html,Css",
      value: "html",
      informaition: [
        {
          name: "DokanShop",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://dokan-shop-two.vercel.app/",
          img: `${DokanShop}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Dokanshop is a clothing store known for its flexibility across all display screens have made by css,html,workshop:bootstrap",
        },
        {
          name: "facebookSign",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://facebook-sign-up-nine.vercel.app/",
          img: `${facebookSign}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Here is a design similar to the Facebook login page using HTML and CSS Bootstrap",
        },
        {
          name: "goldengym",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://golden-blush.vercel.app/",
          img: `${golden}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " GoldenGym Web simulitor have three page and include locition wich show the client where is the place in map using HTML and CSS Bootstrap",
        },
        {
          name: "makeup",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://makeup-self.vercel.app/",
          img: `${makeup}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " makeup Web simulitor have three page and include contectus to send us your feedback using HTML and CSS Bootstrap",
        },
        {
          name: "Netflix",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://netflix-psi-sand.vercel.app/",
          img: `${Netflix}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " netflex site first website wuth bootstrap in mylife and in my career hope you enjoy HTML and CSS Bootstrap",
        },
        {
          name: "town",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://town-red.vercel.app/",
          img: `${town}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "town its flexibility across all display screens have some card and footer and navbar have made by css,html,workshop:bootstrap",
        },
      ],
    },
    {
      label: "React",
      value: "react",
      informaition: [
        {
          name: "shahid-aflam",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "react.js",
            "tailwind css",
            "meterial tailwind",
            "redux",
            "redux-toolkit",
          ],
          Link: "https://shahid-aflam.vercel.app/",
          img: `${Shahid}`,
          condition: "Available",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "React Movies is a large-scale project that includes data for both old and new movies and TV shows, with detailed information about the films, actors, and even their respective YouTube trailers embedded within the film details. This project took approximately a month and a half to complete, and it heavily relies on the APIs provided by The Movie Database (TMDB). Additionally, my website features an advanced search system. Don't forget to give it a try!",
        },

        {
          name: "Male Store",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "react.js",
            "tailwind css",
            "tailwind element",
            "json-server",
          ],
          Link: "",
          img: `${MaleStore}`,
          condition: "UpComing",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "the male fashion website is built with react.js and json-server that u need to run json-server to use the website. the website contain a login system and admin dashboard that you can control every thing in the website products,members. if you are use you can edit your profile details . the website have cart system. go check it!",
        },
        {
          name: "Cart",
          workshop: ["HTML", "CSS", "daisyUI", "tailwind", "react"],
          Link: " https://cartsecond.vercel.app/",
          img: `${cart}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "cart site to simulation cart in the big e-commerce have made by css,html,workshop:tailwind,react",
        },
        {
          name: "Qurankarim",
          workshop: [""],
          Link: "",
          img: `${QuranPhoto}`,
          condition: "UpComing",
          conditioncolor: "Gray-500",
          cursor: "not-allowed",
          descripition:
            "Launching a website that offers the Quran in various recitations by different sheikhs, along with Hadith and interpretations, is a wonderful idea that can greatly benefit Muslims around the world. To create this website, the following steps can be followed:,",
        },
      ],
    },
    {
      label: "Next.js",
      value: "Next.js",
      informaition: [
        {
          name: "Otlob-Shop",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "next.js",
            "tailwind css",
            "meterial tailwind",
            "chakra ui",
            "redux",
            "redux-toolkit",
          ],
          img: `${Otlob}`,
          Link: "https://market-shoop.vercel.app/",
          condition: "Available",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "rsa-market is an e-commerce website built with next.js that have a products and product details page, cart and search page. products divided by categories . go check it now",
        },
      ],
    },
    {
      label: "JavaScript",
      value: "JavaScript",
      informaition: [
        {
          name: "calculator",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "https://calcoulater.vercel.app/",
          img: `${calculator}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "calcoulater site javaScriptwebsite for me it make a small mathmatical equition have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "translator",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "// https://weatehermap.vercel.app/",
          img: `${translator}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "A program that simulates Google Translate works on Convert the text language to any language you want have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "clock",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: " https://clock-wheat-five.vercel.app/",

          img: `${clock}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "clock site it small website to show what is thw clock and small design have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "comic",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: " https://comic-murex-omega.vercel.app/",

          img: `${comic}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Comic site it small website to show what random Comic from internet and get it from api have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "convirt",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "https://convert-black.vercel.app/",
          img: `${convirt}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "convirt coin site to show how much coins exchange today  In any other foreign currency such as the dollar or the euro  have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "weather",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "// https://weatehermap.vercel.app/",
          img: `${weather}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "weather site to know what is Temp today and And to know about any possible natural disasters as well have made by css,html,workshop:bootstrap,javaScript",
        },
      ],
    },
    {
      label: "TypeScript",
      value: "TypeScript",
      informaition: [
        {
          name: "TypingClub",
          workshop: ["HTML", "CSS", "DaisyUI", "TypingScript", "Vite"],
          Link: "https://typing-club-ten.vercel.app/",
          img: `${typingclub}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",

          descripition: ` A small game to improve your typing speed on the keyboard and you can try to break your topscore and its flexibility across all display screens have made by css,html,TypeScript ,workshop:DaisyUI,TailwindCss`,
        },
      ],
    },
    {
      label: "All",
      value: "All",
      informaition: [
        {
          name: "Otlob-Shop",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "next.js",
            "tailwind css",
            "meterial tailwind",
            "chakra ui",
            "redux",
            "redux-toolkit",
          ],
          img: `${Otlob}`,
          Link: "https://market-shoop.vercel.app/",
          condition: "Available",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "rsa-market is an e-commerce website built with next.js that have a products and product details page, cart and search page. products divided by categories . go check it now",
        },
        {
          name: "shahid-aflam",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "react.js",
            "tailwind css",
            "meterial tailwind",
            "redux",
            "redux-toolkit",
          ],
          Link: "https://shahid-aflam.vercel.app/",
          img: `${Shahid}`,
          condition: "Available",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "React Movies is a large-scale project that includes data for both old and new movies and TV shows, with detailed information about the films, actors, and even their respective YouTube trailers embedded within the film details. This project took approximately a month and a half to complete, and it heavily relies on the APIs provided by The Movie Database (TMDB). Additionally, my website features an advanced search system. Don't forget to give it a try!",
        },

        {
          name: "Male Store",
          workshop: [
            "HTML",
            "CSS",
            "javascript",
            "react.js",
            "tailwind css",
            "tailwind element",
            "json-server",
          ],
          Link: "https://e-commerce-application-gamma.vercel.app/",
          img: `${MaleStore}`,
          condition: "UpComing",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "the male fashion website is built with react.js and json-server that u need to run json-server to use the website. the website contain a login system and admin dashboard that you can control every thing in the website products,members. if you are use you can edit your profile details . the website have cart system. go check it!",
        },
        {
          name: "Qurankarim",
          workshop: [""],
          Link: "",
          img: `${QuranPhoto}`,
          condition: "UpComing",
          conditioncolor: "Gray-500",
          cursor: "not-allowed",
          descripition:
            "Launching a website that offers the Quran in various recitations by different sheikhs, along with Hadith and interpretations, is a wonderful idea that can greatly benefit Muslims around the world. To create this website, the following steps can be followed:,",
        },
        {
          name: "DokanShop",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://dokan-shop-two.vercel.app/",
          img: `${DokanShop}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Dokanshop is a clothing store known for its flexibility across all display screens have made by css,html,workshop:bootstrap",
        },
        {
          name: "facebookSign",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://facebook-sign-up-nine.vercel.app/",
          img: `${facebookSign}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Here is a design similar to the Facebook login page using HTML and CSS Bootstrap",
        },
        {
          name: "goldengym",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://golden-blush.vercel.app/",
          img: `${golden}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " GoldenGym Web simulitor have three page and include locition wich show the client where is the place in map using HTML and CSS Bootstrap",
        },
        {
          name: "makeup",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://makeup-self.vercel.app/",
          img: `${makeup}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " makeup Web simulitor have three page and include contectus to send us your feedback using HTML and CSS Bootstrap",
        },
        {
          name: "Netflix",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://netflix-psi-sand.vercel.app/",
          img: `${Netflix}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            " netflex site first website wuth bootstrap in mylife and in my career hope you enjoy HTML and CSS Bootstrap",
        },
        {
          name: "town",
          workshop: ["HTML", "CSS", "Bootstrap"],
          Link: "https://town-red.vercel.app/",
          img: `${town}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "town its flexibility across all display screens have some card and footer and navbar have made by css,html,workshop:bootstrap",
        },
        {
          name: "calculator",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "https://calcoulater.vercel.app/",
          img: `${calculator}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "calcoulater site javaScriptwebsite for me it make a small mathmatical equition have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "translator",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "// https://weatehermap.vercel.app/",
          img: `${translator}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "A program that simulates Google Translate works on Convert the text language to any language you want have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "clock",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: " https://clock-wheat-five.vercel.app/",

          img: `${clock}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "clock site it small website to show what is thw clock and small design have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "comic",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: " https://comic-murex-omega.vercel.app/",

          img: `${comic}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "Comic site it small website to show what random Comic from internet and get it from api have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "convirt",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "https://convert-black.vercel.app/",
          img: `${convirt}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "convirt coin site to show how much coins exchange today  In any other foreign currency such as the dollar or the euro  have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "weather",
          workshop: ["HTML", "CSS", "Bootstrap", "javaScript"],
          Link: "// https://weatehermap.vercel.app/",
          img: `${weather}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "weather site to know what is Temp today and And to know about any possible natural disasters as well have made by css,html,workshop:bootstrap,javaScript",
        },
        {
          name: "Cart",
          workshop: ["HTML", "CSS", "daisyUI", "tailwind", "react"],
          Link: " https://cartsecond.vercel.app/",
          img: `${cart}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "cart site to simulation cart in the big e-commerce have made by css,html,workshop:tailwind,react",
        },
        {
          name: "dark/Light",
          workshop: ["HTML", "CSS", "JavaScript"],
          Link: "https://darklight-blond.vercel.app/",
          img: `${drklight}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition:
            "lightdark site to simulation light and dark mode in popular website have made by css,html,workshop:tailwind,react",
        },
        {
          name: "TypingClub",
          workshop: ["HTML", "CSS", "DaisyUI", "TypingScript", "Vite"],
          Link: "https://typing-club-ten.vercel.app/",
          img: `${typingclub}`,
          condition: "",
          conditioncolor: "white",
          cursor: "pointer",
          descripition: ` A small game to improve your typing speed on the keyboard and you can try to break your topscore and its flexibility across all display screens have made by css,html,TypeScript ,workshop:DaisyUI,TailwindCss`,
        },
      ],
    },
  ];
  return (
    <div>
      <div ref={project}>
        <Typography variant="h2" className="text-center text-white">
          My Recent <span className="text-[#b968c7]">Works</span>
        </Typography>
        <p className="text-white text-center">
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <div className="mt-10">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none laptop:gap-[6em] tablet:gap-0 mobile:gap-0  mobile:overflow-x-scroll mobile:overflow-y-hidden tablet:overflow-hidden  border-black border-b-4   bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-[#7345c6] shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-[#b968c7] scale-[110%] duration-500  "
                    : "text-white backdrop-blur-sm "
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody>
            {data.map(({ value, desc, informaition }) => (
              <TabPanel className="" key={value} value={value}>
                <div className="">
                  {informaition ? (
                    <div className="flex flex-wrap  gap-10 justify-evenly items-center ">
                      {informaition.map(
                        (
                          {
                            name,
                            workshop,
                            img,
                            condition,
                            conditioncolor,
                            cursor,
                            descripition,
                            Link,
                          },
                          index
                        ) => (
                          <Card
                            key={index}
                            className={`card_box shadow-2xl mt-6 w-96 shadow-[#5c3e98]   cursor-${cursor}`}
                          >
                            <CardHeader
                              color="purple"
                              className="relative mt-5 bg-transparent"
                            >
                              <img src={`${img}`} alt="card-image" />
                            </CardHeader>
                            <span className="title">
                              <span
                                id="transition"
                                className={`absolute z-50  text-${conditioncolor} `}
                              >
                                {name}
                              </span>
                            </span>
                            <CardBody>
                              <div className="">
                                <div className=" flex mt-4 gap-2 flex-wrap">
                                  {workshop.map((name, index) => (
                                    <div key={index} className="">
                                      <Chip
                                        className=" bg-[#2F1F4F] text-[#9357f3]"
                                        value={`${name}`}
                                      />
                                    </div>
                                  ))}
                                </div>
                                <Typography
                                  variant="paragraph"
                                  className="text-center mt-3 text-[#8033FF]"
                                >
                                  Descripition
                                </Typography>
                                <ShowMoreText
                                  lines={3}
                                  more="Show more"
                                  less="Show less"
                                  className="content-css text-center mx-3"
                                  anchorClass="text-[#8033FF] hover:text-purple-500 cursor-pointer"
                                  width={280}
                                >
                                  <Typography className="text-white">
                                    {descripition}
                                  </Typography>
                                </ShowMoreText>
                              </div>
                            </CardBody>
                            <CardFooter className="pt-0">
                              <div className="flex justify-end">
                                <button
                                  className="cursor-pointer transition-all
                          bg-[#2F1F4F] text-[#8033FF] px-6 py-2 rounded-lg

                            hover:brightness-110 hover:-translate-y-[1px]
                          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-[#8033FF] shadow-[#8033FF] active:shadow-none"
                                >
                                  <span className="flex items-center gap-2">
                                    <MdWeb />
                                    <h4>
                                      <a href={`${Link}`}>Demo</a>
                                    </h4>
                                  </span>
                                </button>
                              </div>
                            </CardFooter>
                          </Card>
                        )
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Project;
