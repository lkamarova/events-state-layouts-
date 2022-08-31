import React, { useState } from "react";
import "../App.css";
import { NAME_ICON } from "../constants";
import CardsView from "./CardsView/CardsView.js";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView/ListView";

const Store = ({ products }) => {
  const [nameIcon, setNameIcon] = useState(NAME_ICON.VIEW_LIST);

  return (
    <>
      <IconSwitch
        icon={nameIcon}
        onSwitch={setNameIcon}
      />
      {nameIcon === NAME_ICON.VIEW_LIST && <CardsView cards={products} />}
      {nameIcon === NAME_ICON.VIEW_MODULE && <ListView items={products} />}
    </>
  );
};

export default Store;
