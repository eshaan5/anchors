import React, { useState } from "react";

import { Button, Img, List, Text } from "components";
import RequestCallbackPopupModal from "modals/RequestCallbackPopup";
import RequestedCallBackModal from "modals/RequestedCallBack";

const EarningPagePage = ({ videos }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const video = videos[0];
  let newVideos = videos.slice(1);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto pb-4 w-full">
        <header className="bg-black-900 flex sm:flex-col md:gap-10 items-center justify-between px-36 md:px-5 py-4 w-full">
          <div className="flex md:flex-1 flex-row items-start justify-center w-[19%] md:w-full">
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
          <div className="flex flex-col items-start justify-start w-auto">
            <Button onClick={() => setIsOpen(true)}
              className="cursor-pointer flex items-center justify-center min-w-[260px]"
              leftIcon={
                <Img
                  className="h-5 mt-px mb-1 mr-2"
                  src="images/img_call.svg"
                  alt="call"
                />
              }
              shape="round"
            >
              <div className="text-left text-xl">Request a call back</div>
            </Button>
            <RequestCallbackPopupModal isOpen={isOpen} setIsOpen={setIsOpen} setIsOpen2={setIsOpen2} />
            <RequestedCallBackModal isOpen={isOpen2} setIsOpen={setIsOpen2} />
          </div>
        </header>
        <div className="bg-black-900 flex flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 w-full">
          <div className="bg-gray-900_01 flex flex-col items-center justify-start max-w-[1079px] mx-auto px-10 md:px-5 py-5 rounded-[16px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-[254px]">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[172px] rounded"
                    leftIcon={
                      <Img
                        className="h-6 mr-1"
                        src="images/img_mdiprize.svg"
                        alt="mdi:prize"
                      />
                    }
                    color="gray_600"
                    size="xs"
                    variant="fill"
                  >
                    <div className="text-base text-left">Top earner video</div>
                  </Button>
                  <Img
                    className="h-[135px] md:h-auto object-cover rounded-[10px] w-60 sm:w-full"
                    src={video?.img}
                    alt="frameSeven"
                  />
                  <Text
                    className="text-base text-white-A700_7f w-auto"
                    size="txtInterRegular16"
                  >
                    Uploaded on - {video?.date}
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-[255px]">
                  <Text
                    className="max-w-[255px] md:max-w-full text-white-A700 text-xl"
                    size="txtInterMedium20"
                  >
                    {video?.title}
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_mdieye.svg"
                        alt="mdieye"
                      />
                      <Text
                        className="text-base text-white-A700_7f w-auto"
                        size="txtInterRegular16"
                      >
                        {video?.views}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_materialsymbolsthumbup.svg"
                        alt="materialsymbols"
                      />
                      <Text
                        className="text-base text-white-A700_7f w-auto"
                        size="txtInterRegular16"
                      >
                        {video?.likes}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_mdicomment.svg"
                        alt="mdicomment"
                      />
                      <Text
                        className="text-base text-white-A700_7f w-auto"
                        size="txtInterRegular16"
                      >
                        {video?.comments}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_02 flex flex-col items-start justify-start px-5 py-10 rounded-[16px] w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-[346px]">
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_rupee.svg"
                      alt="rupee"
                    />
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtInterBold40"
                    >
                      {video?.earnings}
                    </Text>
                  </div>
                  <Button className="bg-white-A700 h-12 rounded-[24px] w-[42%] text-black-900">
                    Check How?
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="mt-[21px] text-white-A700_b2 text-xl"
          size="txtInterMedium20WhiteA700b2"
        >
          Other Videos Potentials
        </Text>
        <List
          className="flex flex-col gap-1 items-center max-w-[1079px] mt-[21px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="bg-gray-900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[29px] sm:px-5 w-full">
            <Text
              className="ml-2.5 sm:ml-[0] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Rank
            </Text>
            <Text
              className="sm:ml-[0] ml-[79px] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Title
            </Text>
            <Text
              className="sm:ml-[0] ml-[102px] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Thumbnail
            </Text>
            <Text
              className="ml-20 sm:ml-[0] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Views
            </Text>
            <Text
              className="ml-10 sm:ml-[0] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Likes
            </Text>
            <Text
              className="ml-10 sm:ml-[0] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Comment
            </Text>
            <Text
              className="ml-10 sm:ml-[0] sm:mt-0 mt-0.5 text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              Uploaded on
            </Text>
            <Text
              className="ml-10 sm:ml-[0] text-base text-white-A700 w-[10vw]"
              size="txtInterBold16"
            >
              *Estimated Earning
            </Text>
          </div>
          {newVideos.map((video, index) => {
            return (
              <div key={video._id} className="bg-gray-900_7f flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[3px] w-full">
                <Text
                  className="sm:ml-[0] ml-[51px] text-base text-white-A700_cc w-[10vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {index + 2}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[47px] text-base text-white-A700_cc w-[20vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.title}
                </Text>
                <Img
                  className="sm:flex-1 h-[67px] md:h-auto ml-10 sm:ml-[0] sm:mt-0 mt-[7px] object-cover rounded-[10px] w-[20vw] sm:w-full"
                  src={video.img}
                  alt="frameEight"
                />
                <Text
                  className="sm:ml-[0] ml-[55px] text-base text-white-A700_cc w-[15vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.views}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[33px] text-base text-white-A700_cc w-[10vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.likes}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[57px] text-base text-white-A700_cc w-[10vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.comments}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[53px] text-base text-white-A700_cc w-[10vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.date}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[81px] text-base text-white-A700_cc w-[10vw]"
                  size="txtInterRegular16WhiteA700cc"
                >
                  {video.earnings}
                </Text>
              </div>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default EarningPagePage;
