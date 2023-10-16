import React from "react";
import "./Dashboard.scss";
import DataTable from "../components/DataTable";
import DoughnutGraph from "../components/DoughnutGraph";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/store";

const Dashboard = () => {
  const { mainTableValue } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const sortFunc = (type, sortType) => {
    dispatch(dataActions.sortHandler({ type, sortType }));
  };

  return (
    <div className="dashboard">
      <div className="contentDiv">
        <DataTable sortFunc={sortFunc} data={mainTableValue} header={true} />
        <DoughnutGraph />
      </div>
    </div>
  );
};
export default Dashboard;
