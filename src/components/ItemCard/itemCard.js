import React from "react";
import "./style.css";

function ItemCard(props) {
  return (
    <div>
      <img className="item-image" alt="alt" src={props.image} onClick={props.clickItem} />
    </div>
  );
}

export default ItemCard;
