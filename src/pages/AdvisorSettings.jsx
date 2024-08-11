import React, { useState } from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import { IoMdMore } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const AdvisorSettings = () => {
  const financialDatas = [
    { id: 1, Year: "2024/2025" },
    { id: 2, Year: "2023/2024" },
    { id: 3, Year: "2022/2023" },
    { id: 4, Year: "2021/2022" },
    { id: 5, Year: "2020/2021" },
    { id: 6, Year: "2019/2020" },
    { id: 7, Year: "2018/2019" },
    { id: 8, Year: "2017/2018" },
    { id: 9, Year: "2016/2017" },
    { id: 10, Year: "2015/2016" },
  ];
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(true);

  function toggleSidemenu() {
    setIsSidemenuOpen(!isSidemenuOpen);
  }


  return (
    <div className="flex-col">
      <div className="md:block flex items-center justify-between px-5">
        <div className="block md:hidden">
          <button onClick={toggleSidemenu}>
            <FaBars className="text-md" />
          </button>
        </div>
        <Header />
      </div>
      <div className="md:flex">
        <div className={isSidemenuOpen ? "hidden md:block" : ""}>
          <Sidemenu />
        </div>
        <div className={isSidemenuOpen ? "flex flex-col px-5 pb-5 bg-lightBlue w-full gap-4" : "hidden md:block"}>
          <div className="bg-white flex text-sm gap-4 pl-4 pb-4 pr-4 rounded-bl-xl rounded-br-xl">
            <button className="bg-buttonBlue text-white p-2 rounded-md">Individual Tax Settings</button>
            <button className="bg-lightBlue text-gray-500 p-2 rounded-md">Company Tax Settings</button>
          </div>
          <div className="flex flex-col h-full bg-white rounded-xl p-5 gap-5">
            <div className="flex justify-end">
              <button className="bg-buttonBlue text-white py-2 text-sm rounded-md px-10">Add New Tax</button>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-4 md:w-full md:h-full flex flex-col gap-4">
              {financialDatas.map((financialData) => (
                <div key={financialData.id} className="flex flex-col bg-lightBlue text-darkBlue rounded-xl p-5 gap-7">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Financial Year {financialData.Year}</h2>
                    <IoMdMore className="w-5 h-5" />
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Year</h2>
                    <h2 className="font-bold text-lg">{financialData.Year}</h2>
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

export default AdvisorSettings;
