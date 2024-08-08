import React from "react";
import Sidemenu from "../components/Sidemenu";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex-col overflow-hidden">
        <Header />
        <div className="flex">
          <Sidemenu />
          <div className="bg-lightBlue flex w-full px-5 py-5"> 
            <div className="flex w-3/4 ">
              <div className="flex gap-4">
                <div className="flex-col bg-white h-48 rounded-xl" >
                  <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                    <h1 className="text-lightGreen font-bold text-5xl">24</h1>
                    <p className="text-sm">Total Advisors</p>
                  </div>
                  <div className="flex gap-20 px-5 py-4">
                    <div className="flex-col">
                      <h2 className="text-blue-800 text-3xl font-bold pb-2">24</h2>
                      <p className="text-gray-500 text-sm">ACTIVE</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">00</h2>
                      <p className="text-gray-500 text-sm">INACTIVE</p>
                    </div>
                  </div>
                </div>
                <div className="flex-col bg-white h-48 rounded-xl" >
                  <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                    <h1 className="text-lightGreen font-bold text-5xl">24</h1>
                    <p className="text-sm">Total Clients</p>
                  </div>
                  <div className="flex gap-20 px-5 py-4">
                    <div className="flex-col">
                      <h2 className="text-blue-800 text-3xl font-bold pb-2">24</h2>
                      <p className="text-gray-500 text-sm">ACTIVE</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">00</h2>
                      <p className="text-gray-500 text-sm">INACTIVE</p>
                    </div>
                  </div>
                </div>
                <div className="flex-col bg-white h-48 rounded-xl" >
                  <div className="flex gap-4 border-b-2 border-gray px-5 py-5 items-center">
                    <h1 className="text-lightGreen font-bold text-5xl">24</h1>
                    <p className="text-sm">Total Leads</p>
                  </div>
                  <div className="flex gap-20 px-5 py-4">
                    <div className="flex-col">
                      <h2 className="text-blue-800 text-3xl font-bold pb-2">24</h2>
                      <p className="text-gray-500 text-sm">ACTIVE</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h2 className="text-red-600 text-3xl font-bold pb-2 justify-end">00</h2>
                      <p className="text-gray-500 text-sm">INACTIVE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/4">
              <div>calendar</div>
            </div>
          </div>
        </div>
        
    </div>
    
  );
};

export default Home;
