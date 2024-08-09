import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Email = () => {
  return (
    <div className="flex flex-col">
        <Header />
        <div className="flex">
            <Sidemenu />
            <div className="flex flex-col w-full bg-lightBlue p-5 ">
                <div className="bg-white flex justify-between p-5 rounded-xl">
                    <h1>Bulk Email</h1>
                    <button className="flex gap-3 items-center border-2 border-lightBlue py-1 px-2 rounded-lg">
                        <IoArrowBackCircleOutline className="text-3xl text-lightGreen" />
                        <p className="text-sm font-semibold">Back</p>
                    </button>
                </div>
                <div className="flex bg-gray-100 p-5">
                    <div className="flex flex-col gap-4">
                        <img src="" alt="Doc Image" />
                        <p>Compass</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default Email;
