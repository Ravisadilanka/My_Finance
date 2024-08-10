import React, { useState } from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import document from "../assets/document.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Email = () => {
  const [message, setMessage] = useState("");

  const modules = {
    toolbar: [
      [{ undo: "undo" }, { redo: "redo" }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [
        { bold: "bold" },
        { italic: "italic" },
        { underline: "underline" },
        { strike: "strike" },
      ],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ direction: "rtl" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"], // remove formatting button
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-screen">
        <Sidemenu />
        <div className="flex flex-col w-full h-full bg-lightBlue p-5 gap-5">
          <div className="bg-white flex justify-between p-5 rounded-xl items-center">
            <h1 className="text-lg font-bold">Bulk Email</h1>
            <button className="flex gap-3 items-center border-2 border-lightBlue py-1 px-2 rounded-lg">
              <IoArrowBackCircleOutline className="text-3xl text-lightGreen" />
              <p className="text-sm font-semibold">Back</p>
            </button>
          </div>
          <div className="flex bg-gray-100 p-5 rounded-xl gap-5 flex-1">
            <div className="items-center border-r-4 border-gray-200 relative">
              <div className=" flex flex-col gap-4 border-r-4 border-buttonBlue p-4">
                <img src={document} alt="Doc Image" className="w-14" />
                <p className="text-buttonBlue font-semibold">Compose</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <form
                action="submit"
                className="flex flex-col w-full gap-7 h-full"
              >
                <div className="relative w-full">
                  <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="to"
                    className="w-full p-3 rounded-xl border-2 border-gray-500"
                    placeholder="To"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 rounded-xl border-2 border-gray-500"
                />
                <div className="relative flex flex-col h-full pb-10 ">
                  <h3 className="absolute top-0 left-1 p-2 text-sm text-buttonBlue z-10">
                    Message
                  </h3>
                  <ReactQuill
                    value={message}
                    onChange={setMessage}
                    modules={modules}
                    formats={formats}
                    className="h-full pt-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
