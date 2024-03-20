import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="flex justify-around p-4 shadow-xl">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-12 text-[#626262] text-xl font-medium">
        <li
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-12">
        <Link to="/login">
          <button className="w-40 h-14 outline-none border-solid border-2 border-[#7a7a7a] rounded-2xl text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="w-5 h-5 flex justify-center items-center mt-9 -ml-14 rounded-xl text-sm bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
