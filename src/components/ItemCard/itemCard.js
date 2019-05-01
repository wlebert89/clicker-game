import React from "react";
import "./style.css";

function ItemCard(props) {
  return (
    <div className="item-card">
      <img className="item-image" alt={props.name} src={props.image} onClick={props.clickItem} />
    </div>
  );
}

export default ItemCard;