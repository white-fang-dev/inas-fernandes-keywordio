import { configureStore, createSlice } from "@reduxjs/toolkit";
import { doughnutData, productData } from "../Data/data";

const getPropertyValues = (property) => {
  return doughnutData.map((item) => item[property]);
};

const sortData = (data, property, sortOrder) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (sortOrder === "High to Low") {
      return b[property] - a[property];
    } else if (sortOrder === "Low to High") {
      return a[property] - b[property];
    }
  });
  return sortedData;
};

const initialState = {
  mainTableValue: productData,
  donutValues: getPropertyValues("clicks"),
  doughnutTableValue: doughnutData,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dropdownHandler(state, action) {
      state.donutValues = getPropertyValues(action.payload);
    },
    sortHandler(state, { payload }) {
      state.mainTableValue = sortData(
        productData,
        payload.type,
        payload.sortType
      );
    },
    sortDoughnut(state, { payload }) {
      state.doughnutTableValue = sortData(
        doughnutData,
        payload.type,
        payload.sortType
      );
    },
  },
});

export const dataActions = dataSlice.actions;

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
