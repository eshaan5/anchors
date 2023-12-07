import React, { useState } from "react";

import { Img, Input, Text, Button } from "components";
import { Link } from "react-router-dom";

const LandingpagePage = ({ setVideoId }) => {
  const [videoLink, setVideoLink] = useState("");

  const handleLink = () => {
    const videoId = videoLink.split("v=")[1];
    setVideoId(videoId);
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-[46px] items-end justify-start mx-auto w-full">
        <div className="flex flex-col gap-[58px] items-center w-full">
          <div className="bg-black-900 flex flex-col items-center justify-between max-w-[1367px] md:px-10 px-36 sm:px-5 py-4 w-full">
            <div className="flex flex-row items-start justify-start w-[19%]">
              <Img
                className="h-[22px] md:h-auto mt-[7px] object-cover w-[22px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <Text
                className="ml-3.5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSoraSemiBold28"
              >
                anchors
              </Text>
              <Text
                className="bg-blue_gray-100 justify-center mb-[19px] ml-2.5 px-1.5 rounded text-[10px] text-gray-900 w-auto"
                size="txtInterRegular10"
              >
                Beta
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start md:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start max-w-[741px] w-full">
              <Text
                className="leading-[72.00px] max-w-[741px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterBold50"
              >
                Discover your earning potential
              </Text>
              <Text
                className="leading-[36.00px] text-2xl md:text-[22px] text-center text-white-A700_cc sm:text-xl"
                size="txtInterRegular24"
              >
                <>
                  Turn your Youtube expertise into a lucrative income
                  <br />
                  through resource sharing
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start max-w-[713px] w-full">
              <Input
                name="enteryoutubevideolink"
                placeholder="enter youtube video link"
                className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                wrapClassName="flex sm:flex-1 rounded-[24px] w-[76%] sm:w-full"
                prefix={
                  <Img
                    className="mt-auto mb-0.5 h-6 mr-2.5"
                    src="images/img_mdiyoutube.svg"
                    alt="mdi:youtube"
                  />
                }
                color="white_A700_7f"
                size="xs"
                value={videoLink}
                onChange={setVideoLink}
              ></Input>
              <Link to="/earnings" onClick={handleLink} className="flex justify-center bg-red-A400 h-12 rounded-[24px] w-[23%]  p-[9px] border border-solid border-white-A700_7f text-white-A700">
                Calculate!
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white-A700_0f flex flex-col items-end justify-end p-[50px] md:px-5 rounded-[120px] w-1/5 md:w-full">
          <Img
            className="h-20 mr-5 mt-[60px] w-20"
            src="images/img_solarplaybold.svg"
            alt="solarplaybold"
          />
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
