import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintrest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="flex items-center gap-5">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex list-none gap-8 text-[#252525] text-xl">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-5 pb-5 bg-[#fbfbfb] border-solid border-2 border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-5 pb-5 bg-[#fbfbfb] border-solid border-2 border-[#ebebeb]">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="p-5 pb-5 bg-[#fbfbfb] border-solid border-2 border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full mb-30 text-[#1a1a1a] text-2xl">
        <hr className="w-4/5 border-none rounded-xl h-1 bg-[#c7c7c7]" />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
