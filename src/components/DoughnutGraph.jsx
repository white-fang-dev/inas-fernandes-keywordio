import React, { useState } from "react";
import "./DoughnutGraph.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import more from "./../images/more.png";
import DataTable from "./DataTable";
import tableIconBlack from "./../images/tableBlack.png";
import tableIconWhite from "./../images/tableWhite.png";
import doughnutBlack from "./../images/doughnutBlack.png";
import doughnutWhite from "./../images/doughnutWhite.png";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  radius: "60%",
  cutout: "60%",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
};

const DoughnutGraph = () => {
  const [toggle, setToggle] = useState(true);

  const tableGraphData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const sortFunc = (type, sortType) => {
    if (!type) return;
    dispatch(dataActions.sortDoughnut({ type, sortType }));
  };

  const optionHandler = (e) => {
    dispatch(dataActions.dropdownHandler(e.target.value));
  };

  const toggleHandler = () => {
    setToggle((prev) => !prev);
    dispatch(dataActions.dropdownHandler("clicks"));
  };

  const totalCount = tableGraphData.donutValues.reduce(
    (acc, value) => acc + value,
    0
  );

  const percentages = tableGraphData.donutValues.map((value) =>
    ((value / totalCount) * 100).toFixed(2)
  );

  const [malePercentage, femalePercentage, unknownPercentage] = percentages;
  const data = {
    labels: [
      `${malePercentage}% Male`,
      `${femalePercentage}% Female`,
      `${unknownPercentage}% Unknown`,
    ],
    datasets: [
      {
        data: tableGraphData.donutValues,
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        borderColor: ["#ff823c", "#0096ff", "#323c46"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="donutDiv">
      <div className="donutHeader">
        <h2 className="mainDonutHeader">Ad Insights</h2>
        <div className="dropdownDiv">
          {toggle && (
            <select onChange={optionHandler} className="dropdown" id="matrics">
              <option value="clicks">Clicks</option>
              <option value="conversions">Conversions</option>
              <option value="revenue">Revenue</option>
              <option value="cost">Cost</option>
            </select>
          )}

          <img className="infoIcon" src={more} alt="info" />
        </div>
      </div>
      {toggle ? (
        <Doughnut data={data} options={options} />
      ) : (
        <DataTable
          sortFunc={sortFunc}
          data={tableGraphData.doughnutTableValue}
          header={false}
        />
      )}
      <div onClick={toggleHandler} className="toggleDiv">
        <div className={`toggleIconDiv ${toggle && "toggleIconActive"}`}>
          <img
            className="toggleIcon"
            src={toggle ? doughnutWhite : doughnutBlack}
            alt="donut"
          />
        </div>
        <div className={`toggleIconDiv ${!toggle && "toggleIconActive"}`}>
          <img
            className="toggleIcon"
            src={!toggle ? tableIconWhite : tableIconBlack}
            alt="table"
          />
        </div>
      </div>
    </div>
  );
};
export default DoughnutGraph;
