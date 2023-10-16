import React, { useState } from "react";
import "./AdsForm.scss";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import PrimaryBtn from "../components/PrimaryBtn";
import SuccessfulModal from "../components/SuccessfulModal";
import { useNavigate, useParams } from "react-router-dom";
const AdsForm = () => {
  const { adsType } = useParams();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const btnHandler = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
      navigate("/create-ads");
    }, 600);
  };
  const backBtnHandler = () => {
    navigate("/create-ads");
  };
  return (
    <>
      {modal && <SuccessfulModal />}
      <main className="mediaAds">
        <section className="mediaInputSection">
          <h2 className="createAdsHeader">
            Create Text{adsType === "media-ads" && " & Media"}
          </h2>
          <form action="">
            <div className="flex">
              <div>
                <Input
                  id={"heading1"}
                  header={"Heading 01"}
                  placeholder={"Add a heading that would make users interested"}
                />
                <Input
                  id={"heading2"}
                  header={"Heading 02"}
                  placeholder={"Add a heading that would make users interested"}
                />
              </div>
              <TextArea
                id={"description1"}
                header={"Description 01"}
                placeholder={
                  "Add primary text to help users understand more about your products, services or offers"
                }
              />
            </div>
            {adsType === "media-ads" && (
              <>
                <div className="flex">
                  <Input
                    id={"img1"}
                    header={"Landscape Marketing Image (1:9:1)"}
                    placeholder={
                      "Add the URL of the image you want to use for the ad"
                    }
                  />
                  <Input
                    id={"img2"}
                    header={"Portrait Marketing Image (4:5)"}
                    placeholder={
                      "Add the URL of the image you want to use for the ad"
                    }
                  />
                  <Input
                    id={"img3"}
                    header={"Square Marketing Image (1:1)"}
                    placeholder={
                      "Add the URL of the image you want to use for the ad"
                    }
                  />
                </div>
                <Input
                  id={"video1"}
                  header={"Video URL"}
                  placeholder={
                    "Add the URL of the video you want to use for the ad"
                  }
                />
              </>
            )}

            <div className="flex">
              <Input
                id={"business1"}
                header={"Business Name"}
                placeholder={"Add your business name"}
              />
              <Input
                id={"button"}
                header={"Button Label"}
                placeholder={"Select a label that best suits your ad"}
              />
            </div>
            <Input
              id={"website"}
              header={"Website URL"}
              placeholder={
                "Add the URL of the landing page you want to redirect users to"
              }
            />
          </form>
          <div className="formBtnDiv">
            <PrimaryBtn
              text={"Back"}
              active={false}
              btnHandler={backBtnHandler}
            />
            <PrimaryBtn text={"Submit"} active={true} btnHandler={btnHandler} />
          </div>
        </section>
      </main>
    </>
  );
};
export default AdsForm;
