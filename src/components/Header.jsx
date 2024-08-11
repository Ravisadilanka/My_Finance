import React, { useState } from "react";
import { FaRegBell, FaBars } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import profileImg from "../assets/profile.jpeg";
import Sidemenu from "../components/Sidemenu"; // Assuming Sidemenu is imported here

const Header = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);


  return (
    <div>
      <div className="h-15 flex justify-between text-center py-4 px-6 items-center">
        <h1 className="font-playwrite font-bold text-2xl text-darkBlue">
          My Finance
        </h1>
        <div className="flex gap-4">
          <button className="px-3 bg-lightPurple rounded-lg">
            <FaRegBell className="text-purple-500 text-xl " />
          </button>
          <div className="flex gap-2 px-2 py-2 bg-lightBlue rounded-3xl">
            <img src={profileImg} alt="" className="w-8 h-8 rounded-2xl" />
            <button>
              <IoSettingsOutline className="text-secondDarkBlue text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
