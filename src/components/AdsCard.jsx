import React from "react";
import "./AdsCard.scss";
const AdsCard = ({ navigateTo, setCheckedValue, type, img }) => {
  return (
    <label className="ads" htmlFor={type}>
      <input
        onChange={() => {
          setCheckedValue(navigateTo);
        }}
        id={type}
        className="adsCheckbox"
        type="checkbox"
      />
      <img className="adsMockUp" src={img} alt="text" />
      <div className="typeDiv">
        <p className="typeHeader">Create</p>
        <h2 className="adsType">{type}</h2>
      </div>
    </label>
  );
};
export default AdsCard;
