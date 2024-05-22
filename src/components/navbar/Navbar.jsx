import React, { useState, memo } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import SearchSection from "./SearchSection";
import { useGetSearchProductsQuery } from "../../context/api/productApi";
import { HiGift } from "react-icons/hi2";
import { BsFillBookFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegFaceSmile } from "react-icons/fa6";
//
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(false)
  const [value, setValue] = useState("");
  const [shrink, setShrink] = useState(false);
  let { data } = useGetSearchProductsQuery({ q: value });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <header className="header container">
      <div className="container">
        <nav className={`navbar ${shrink ? "shrink" : ""}`}>
          <NavLink className="navbar__logo" to={"/"}>
            <span>AliExpress</span>
          </NavLink>
          {/* <div className="input-icons"> */}
          <BsFillBookFill />
          <div className="navbar__search">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              // onFocus={()=> setShowSearch(true)}
              // onBlur={()=> setShowSearch(false)}
              type="text"
              placeholder="search..."
            />
            <button>Search</button>
            {value.trim() ? (
              <SearchSection setValue={setValue} data={data?.products} />
            ) : (
              <></>
            )}
          </div>
          <HiGift />
          <HiShoppingCart />
          <FaRegFaceSmile />
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default memo(Navbar);
