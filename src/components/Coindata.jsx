import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Coindata = ({ coin }) => {
  return (
    <div className="flex w-full justify-center items-center h-full bg-gray-900">
      <div className="w-full max-w-screen-lg h-full max-h-screen-md">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="chart-container w-full h-full">
            <AdvancedRealTimeChart
              symbol={`${coin.symbol}usdt`}
              theme="dark"
              className="chart"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coindata;
