import "./styles/style.css";

import Menu from "../constants/MenuAPI.js";
import { MenuCards } from "./MenuCards.jsx";

const Restaurant = () => {
  return (
    <>
      <MenuCards menuData={Menu} />
    </>
  );
};

export { Restaurant };
