import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuapi.js"
import Menucard from "./menucard.js"
const Restaurant = () => {
const [menuData, setMenuData] = useState(Menu);
  return (
    <>
    <Menucard menuData = {menuData}/>
    </>
  )
}

export default Restaurant;