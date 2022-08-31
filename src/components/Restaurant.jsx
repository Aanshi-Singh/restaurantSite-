import React, { useState } from "react";
import "./styles/style.css";
import Menu from "../constants/MenuAPI.js";
import { MenuCards } from "./MenuCards.jsx";
import Navbar from "./Navbar";
// import { useState } from "react";

const uniqueList = [
  ...new Set(
    Menu.map((curr) => {
      return curr.type;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (type) => {
    if (type === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedtList = Menu.filter((curr) => {
      return curr.type === type;
    });
    // console.log(updatedtList);
    setMenuData(updatedtList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCards menuData={menuData} />
    </>
  );
};

export { Restaurant };
