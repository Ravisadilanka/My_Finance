import React from "react";
import Sidemenu from "../components/Sidemenu";
import Header from "../components/Header";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePreview } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const templates = [
  { id: 1, name: "Forgot Password - Client Portal" },
  { id: 2, name: "Verification Email" },
  { id: 3, name: "Team Member Invitation" },
  { id: 4, name: "Forgot Password - Advisor Portal" },
];

const EmailTempletes = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-screen">
        <Sidemenu />
        <div className="flex flex-col w-full h-full bg-lightBlue p-5 gap-5">
          <div className="bg-white flex justify-between p-5 rounded-xl items-center">
            <h1 className="text-lg font-bold">Email Templates</h1>
            <button className="flex gap-3 items-center border-2 border-lightBlue py-1 px-2 rounded-lg">
              <IoArrowBackCircleOutline className="text-3xl text-lightGreen" />
              <p className="text-sm font-semibold">Back</p>
            </button>
          </div>
          <div className="flex bg-white p-5 rounded-xl gap-5 flex-col">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-blue-700 p-2 rounded-md">
                <TfiEmail className="h-5 text-white" />
                <p className="text-sm text-white">Add Email Template</p>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex grid grid-cols-3 items-center border-2 border-gray-300 p-4 rounded-xl"
                >
                  <div className="flex gap-4 items-center">
                    <TfiEmail className="text-darkBlue w-5 h-5 rounded-md" />
                    <p className="text-sm text-gray-500 font-bold">
                      {template.name}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-sm text-gray-500">11th July 2024</p>
                  </div>
                  <div className="flex gap-4 items-center justify-end">
                    <button>
                      <MdOutlinePreview className="w-6 h-6 text-lightGreen" />
                    </button>
                    <button>
                      <TbEdit className="w-6 h-6 text-darkBlue" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTempletes;
