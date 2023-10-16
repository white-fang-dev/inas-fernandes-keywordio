import React, { useState } from "react";
import "./CreateAds.scss";
import AdsCard from "../components/AdsCard";
import { adsCardData } from "./../Data/data";
import PrimaryBtn from "../components/PrimaryBtn";
import { useNavigate } from "react-router-dom";
const CreateAds = () => {
  const [checkedValue, setCheckedValue] = useState();
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate(`/${checkedValue}`);
  };
  return (
    <main className="createAds">
      <section className="createAdsSection">
        <h2 className="createAdsHeader">Create Ads</h2>
        <div className="adsSection">
          {adsCardData.map((card, i) => (
            <AdsCard
              navigateTo={card.navigateTo}
              setCheckedValue={setCheckedValue}
              key={i}
              type={card.type}
              img={card.img}
            />
          ))}
        </div>
        <div className="createAdsBtnDiv">
          <PrimaryBtn text={"Next"} active={true} btnHandler={btnHandler} />
        </div>
      </section>
    </main>
  );
};
export default CreateAds;
