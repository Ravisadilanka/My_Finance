import React, { useState } from "react";
import Sidemenu from "../components/Sidemenu";
import Header from "../components/Header";
import advisorSettings from "../assets/advisorSettings.jpg";
import organizations from "../assets/organization.jpg";
import promoCodes from "../assets/promoCodes.jpg";
import wordTemplates from "../assets/wordTemplates.jpg";
import superannuation from "../assets/superannuation.jpg";
import profilePic from "../assets/profile.jpeg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calenderStyle.css";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

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

        <div className={isSidemenuOpen ? "bg-lightBlue flex w-full px-5 py-5" : "hidden md:block"}>
          <div className="flex flex-col w-3/4 gap-4">
            <div className="flex gap-4 h-1/3">
              <div className="flex-col bg-white rounded-xl w-full">
                <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                  <h1 className="text-lightGreen font-bold text-5xl">24</h1>
                  <p className="text-sm">Total Advisors</p>
                </div>
                <div className="flex gap-20 px-5 py-4">
                  <div className="flex-col">
                    <h2 className="text-blue-800 text-3xl font-bold pb-2">
                      24
                    </h2>
                    <p className="text-gray-500 text-sm">ACTIVE</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">
                      00
                    </h2>
                    <p className="text-gray-500 text-sm">INACTIVE</p>
                  </div>
                </div>
              </div>
              <div className="flex-col bg-white rounded-xl w-full">
                <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                  <h1 className="text-lightGreen font-bold text-5xl">1347</h1>
                  <p className="text-sm">Total Clients</p>
                </div>
                <div className="flex gap-20 px-5 py-4">
                  <div className="flex-col">
                    <h2 className="text-blue-800 text-3xl font-bold pb-2">
                      1346
                    </h2>
                    <p className="text-gray-500 text-sm">ACTIVE</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">
                      01
                    </h2>
                    <p className="text-gray-500 text-sm">INACTIVE</p>
                  </div>
                </div>
              </div>
              <div className="flex-col bg-white rounded-xl w-full">
                <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                  <h1 className="text-lightGreen font-bold text-5xl">13</h1>
                  <p className="text-sm">Total Leads</p>
                </div>
                <div className="flex gap-20 px-5 py-4">
                  <div className="flex-col">
                    <h2 className="text-blue-800 text-3xl font-bold pb-2">
                      13
                    </h2>
                    <p className="text-gray-500 text-sm">ACTIVE</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">
                      00
                    </h2>
                    <p className="text-gray-500 text-sm">INACTIVE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full bg-white rounded-xl items-center justify-center h-1/3 gap-4">
              <img
                src={advisorSettings}
                alt="advisor settings"
                className="w-20"
              />
              <h2 className="font-semibold">Advisor Settings</h2>
            </div>
            <div className="flex h-1/3 w-full gap-4">
              <div className="flex flex-col w-full bg-white rounded-xl items-center justify-center gap-2">
                <img src={organizations} alt="organizations" className="w-20" />
                <h2 className="font-semibold">Organizations</h2>
              </div>
              <div className="flex flex-col w-full bg-white rounded-xl items-center justify-center gap-2">
                <img src={promoCodes} alt="Promo Codes" className="w-20" />
                <h2 className="font-semibold">Promo Codes</h2>
              </div>
              <div className="flex flex-col w-full bg-white rounded-xl items-center justify-center gap-2">
                <img
                  src={wordTemplates}
                  alt="Word Templates"
                  className="h-20 w-20"
                />
                <h2 className="font-semibold">Word Templates</h2>
              </div>
              <div className="flex flex-col w-full bg-white rounded-xl items-center justify-center gap-2">
                <img
                  src={superannuation}
                  alt="Superannuation"
                  className="w-20"
                />
                <h2 className="font-semibold">Superannuation</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/4 pl-4 gap-4">
            <div className="h-2/3">
              <Calendar
                prevLabel={<span>&lt;</span>}
                nextLabel={<span>&gt;</span>}
                formatShortWeekday={(locale, date) =>
                  date
                    .toLocaleDateString("en", { weekday: "short" })
                    .slice(0, 1)
                }
                tileClassName={({ date, view }) => {
                  const isToday =
                    new Date().toDateString() === date.toDateString();
                  return isToday ? "today" : "";
                }}
              />
            </div>
            <div className="flex flex-col h-1/3 bg-white px-4 py-4 rounded-xl gap-4">
              <div className="flex gap-4 items-center ">
                <h2 className="text-darkBlue font-bold">Notifications</h2>
                <p className="font-semibold rounded-full bg-red-600 p-1 text-white w-7 h-7 items-center justify-center">
                  04
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-500 text-sm">Melinda Deleon</h3>
                  <p className="text-gray-500 text-xs">
                    A Message has been Recieved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
