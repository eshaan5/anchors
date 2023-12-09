import React, { useState } from "react";
import { default as ModalProvider } from "react-modal";
import { sendCallback } from "api";

import { Button, Input, Text } from "components";

const RequestCallbackPopupModal = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

  const handleRequestCallback = async () => {
    try {
      const response = await sendCallback({ name, phone, time, comments });
    } catch (error) {
      console.log(error);
    }
    props.setIsOpen(false);
    props.setIsOpen2(true);
  };

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-white-A700_33 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_02 flex flex-col h-[396px] md:h-auto items-center justify-center p-10 md:px-5 rounded-[10px] w-[480px] sm:w-full">
          <div className="flex flex-col gap-10 items-center justify-center w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                size="txtInterMedium24"
              >
                Request a call back{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-7 items-center justify-center w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Input
                  name="name"
                  placeholder="Enter Name"
                  className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                  wrapClassName="w-full"
                  type="text"
                  shape="round"
                  value={name}
                  onChange={setName}
                ></Input>
                <Input
                  name="mobilenumber"
                  placeholder="Mobile number"
                  className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                  wrapClassName="w-full"
                  type="text"
                  shape="round"
                  value={phone}
                  onChange={setPhone}
                ></Input>
                <Input
                  name="time"
                  placeholder="Preffered Time"
                  className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                  wrapClassName="w-full"
                  type="time"
                  shape="round"
                  value={time}
                  onChange={setTime}
                ></Input>
                <Input
                  name="comments"
                  placeholder="Any comments or questions?"
                  className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                  wrapClassName="w-full"
                  type="text"
                  shape="round"
                  value={comments}
                  onChange={setComments}
                ></Input>
              </div>
              <Button
                className="cursor-pointer leading-[normal] min-w-[268px] rounded-[24px] text-center text-xl"
                shape="round"
                color="white_A700"
                variant="fill"
                onClick={handleRequestCallback}
              >
                Request a Call Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default RequestCallbackPopupModal;
