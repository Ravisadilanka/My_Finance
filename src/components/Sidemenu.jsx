import React, { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FiServer } from "react-icons/fi";
import { TbAbacus } from "react-icons/tb";
import { TbNotification } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const Sidemenu = () => {
  const location = useLocation();
  const [select, setSelect] = useState("");

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case "/dashboard":
        setSelect("dashboard");
        break;
      case "/advisor-settings":
        setSelect("advisorSettings");
        break;
      case "/email":
        setSelect("email");
        break;
      case "/email-templates":
        setSelect("emailTemplates");
        break;
      case "/promo-codes":
        setSelect("promoCodes");
        break;
      case "/word-templates":
        setSelect("wordTemplates");
        break;
      case "/superannuation":
        setSelect("superannuation");
        break;
      case "/subscriptions":
        setSelect("subscriptions");
        break;
      case "/payment-history":
        setSelect("paymentHistory");
        break;
      case "/notification":
        setSelect("notification");
        break;
      default:
        setSelect("");
        break;
    }
  }, [location]);

  const navigate = useNavigate();

  const handleItemClick = (path, item) => {
    setSelect(item);
    navigate(path);
  };

  return (
    <div className="h-screen w-60 flex-col pr-5 bg-darkBlue">
      <div className="flex align-middle border-b-2 border-white items-center py-7 ">
        <div
          className={`w-56 flex gap-6 px-5 py-3 cursor-pointer rounded-tr-3xl ${
            select === "dashboard" ? "text-lightGreen bg-white" : "text-white"
          }`}
          onClick={() => handleItemClick("/dashboard", "dashboard")}
        >
          <MdDashboard className="text-xl" />
          <p className="text-sm font-medium">Dashboard</p>
        </div>
      </div>
      <div className="py-7">
        <ul>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "advisorSettings" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/advisor-settings", "advisorSettings")}
          >
            <IoSettingsOutline className="text-xl" />
            <p className="text-sm font-medium">Advisor Settings</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "email" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/email", "email")}
          >
            <BiMessageAltDetail className="text-xl" />
            <p className="text-sm font-medium">Email</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "emailTemplates" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/email-templates", "emailTemplates")}
          >
            <TbTemplate className="text-xl" />
            <p className="text-sm font-medium">Email Templates</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "promoCodes" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/promo-codes", "promoCodes")}
          >
            <RiCoupon2Line className="text-xl" />
            <p className="text-sm font-medium">Promo Codes</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "wordTemplates" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/word-templates", "wordTemplates")}
          >
            <TbTemplate className="text-xl" />
            <p className="text-sm font-medium">Word Templates</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "superannuation" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/superannuation", "superannuation")}
          >
            <AiOutlineDollar className="text-xl" />
            <p className="text-sm font-medium">Superannuation</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "subscriptions" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/subscriptions", "subscriptions")}
          >
            <FiServer className="text-xl" />
            <p className="text-sm font-medium">Subscriptions</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "paymentHistory" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/payment-history", "paymentHistory")}
          >
            <TbAbacus className="text-xl" />
            <p className="text-sm font-medium">Payment History</p>
          </li>
          <li
            className={`px-5 flex gap-6 py-3 cursor-pointer items-center rounded-tr-3xl ${
              select === "notification" ? "text-lightGreen bg-white" : "text-white"
            }`}
            onClick={() => handleItemClick("/notification", "notification")}
          >
            <TbNotification className="text-xl" />
            <p className="text-sm font-medium">Notification</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
