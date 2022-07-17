import React ,{ useState } from "react";
import "./styles/style.css";
import Menu from "../constants/MenuAPI.js";
import { MenuCards } from "./MenuCards.jsx";
// import { useState } from "react";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (type)=>{
    const updatestList = Menu.filter((curr)=>{
      return curr.type === type ;
    });
    // console.log(updatestList);
    setMenuData(updatestList);
  };
  
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick = {()=> filterItem("Breakfast")}>Breakfast</button>
        <button className="btn-group__item"onClick = {()=> filterItem("Lunch")}>Lunch</button>
        <button className="btn-group__item"onClick = {()=> filterItem("Evening")}>Evening</button>
        <button className="btn-group__item"onClick = {()=> filterItem("Dinner")}>Dinner</button>
        <button className="btn-group__item"onClick = {()=> setMenuData(Menu)}>All</button>
      </div>
    </nav>


      <MenuCards menuData={menuData} />

    </>
  );
};

export { Restaurant };
