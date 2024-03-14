import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Latest from "./Latest";

const Coindata = ({ coin }) => {
  return (
    <>
      <Latest />
      <div className="flex flex-col items-center w-full  bg-gray-900 overflow-x-hidden">
        <div className="w-full max-w-screen-lg h-full max-h-screen-md">
          <div className="h-full flex flex-col items-baseline">
            <div className="chart-container  w-full h-full justify-center items-center">
              <AdvancedRealTimeChart
                symbol={`${coin.symbol}usdt`}
                theme="dark"
                className="chart"

                // Adjust the height as needed
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coindata;
