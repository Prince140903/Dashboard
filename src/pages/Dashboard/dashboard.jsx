import React from "react";
import "./dashboard.css";

import Box from "./Box/box.jsx";
import DynamicIcon from "../../constants/icons.jsx";
import { PieChart } from "@mui/x-charts/PieChart";

const Dashboard = () => {
  const desktopOS = [
    { id: "Windows", value: 50 },
    { id: "macOS", value: 30 },
    { id: "Linux", value: 20 },
  ];

  const valueFormatter = (value) => `${value}%`;

  return (
    <>
      <div className="right-content w-100 ">
        <div className="row boxRow">
          <div className="col-md-8">
            <div className="boxWrapper d-flex">
              <Box
                color={["#1da256", "#48d483"]}
                grow={true}
                icon={<DynamicIcon iconName="AccountCircleOutlined" />}
              />
              <Box
                color={["#c012e2", "#eb64fe"]}
                icon={<DynamicIcon iconName="ShoppingCartOutlined" />}
              />
              <Box
                color={["#2c78e5", "#60aff5"]}
                icon={<DynamicIcon iconName="LocalMallOutlined" />}
              />
              <Box
                color={["#e1950e", "#f3cd29"]}
                grow={true}
                icon={<DynamicIcon iconName="StarsOutlined" />}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="w-100 bottomEle">
                <h6 className="text-white mb-0">Total Sales</h6>
                <h2 className="text-white">₹3,00,000</h2>
                <PieChart
                  series={[
                    {
                      data: desktopOS,
                      highlightScope: { fade: "global", highlight: "item" },
                      faded: {
                        innerRadius: 30,
                        additionalRadius: -30,
                        color: "gray",
                      },
                      valueFormatter,
                    },
                  ]}
                  height={200}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
