import React from "react";
import "./DataTable.scss";
import more from "./../images/more.png";
import filter from "./../images/filter.svg";

const DataTable = ({ sortFunc, header, data }) => {
  const getProductDataTotal = (parameter) => {
    if (data.every((item) => item.hasOwnProperty(parameter))) {
      return data.reduce((total, item) => total + item[parameter], 0);
    }
  };

  const sortHandler = (e) => {
    const type = e.target.getAttribute("data-type-id");
    const sortType = e.target.innerText;
    if (!type) return;
    sortFunc(type, sortType);
  };

  return (
    <div className="dataTable">
      {header && (
        <div className="tableMainHeader">
          <h2 className="mainTableHeader">Ad Insights</h2>
          <img className="infoIcon" src={more} alt="info" />
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>{header ? "Campaigns" : "Group"} </th>
            <th>
              Clicks
              <img src={filter} className="filter" alt="filter" />
              <div onClick={sortHandler} className="sortingDiv">
                <h2 className="filterHeader">Sort by</h2>

                <p data-type-id="clicks" className="sortType">
                  High to Low
                </p>
                <p data-type-id="clicks" className="sortType">
                  Low to High
                </p>
              </div>
            </th>
            <th>
              Cost <img src={filter} className="filter" alt="filter" />
              <div onClick={sortHandler} className="sortingDiv">
                <h2 className="filterHeader">Sort by</h2>
                <p data-type-id="cost" className="sortType">
                  High to Low
                </p>
                <p data-type-id="cost" className="sortType">
                  Low to High
                </p>
              </div>
            </th>
            <th>
              Conversions <img src={filter} className="filter" alt="filter" />
              <div onClick={sortHandler} className="sortingDiv">
                <h2 className="filterHeader">Sort by</h2>
                <p data-type-id="conversions" className="sortType">
                  High to Low
                </p>
                <p data-type-id="conversions" className="sortType">
                  Low to High
                </p>
              </div>
            </th>
            <th>
              Revenue <img src={filter} className="filter" alt="filter" />
              <div onClick={sortHandler} className="sortingDiv">
                <h2 className="filterHeader">Sort by</h2>
                <p data-type-id="revenue" className="sortType">
                  High to Low
                </p>
                <p data-type-id="revenue" className="sortType">
                  Low to High
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail, i) => (
            <tr key={i}>
              <td>{detail.product}</td>
              <td>{detail.clicks}</td>
              <td>USD {detail.cost.toLocaleString("en")}</td>
              <td>{detail.conversions}</td>
              <td>USD {detail.revenue.toLocaleString("en")}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{getProductDataTotal("clicks")}</td>
            <td>USD {getProductDataTotal("cost").toLocaleString("en")}</td>
            <td>{getProductDataTotal("conversions")}</td>
            <td>USD {getProductDataTotal("revenue").toLocaleString("en")}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default DataTable;
