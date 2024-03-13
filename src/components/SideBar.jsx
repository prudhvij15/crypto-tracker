import React, { useEffect, useState } from "react";
import { getAllCurrencies, getCoinData } from "./api";
import Coindata from "./Coindata";

export default function ProjectSideBar() {
  const [currencies, setCurrencies] = useState([{}]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [coin, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const data = await getAllCurrencies();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    getCurrencies();
  }, []);

  const handleAsideClick = async (id) => {
    try {
      setSelectedCurrency(id);
      const data = await getCoinData(id);
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  h-screen ">
      {/* Sidebar */}
      <div className="bg-gray-900 w-full lg:w-1/4">
        <aside className="flex flex-col w-full bg-gray-900 text-white px-4 py-6">
          <h2 className="mb-8 font-bold uppercase text-white md:text-xl">
            Cryptocurrency Coin Catalog
          </h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="flex flex-col w-full space-y-4 max-h-[calc(100vh-110px)] overflow-y-scroll">
              {currencies.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-md ${
                    selectedCurrency === item.id
                      ? "bg-blue-500"
                      : "hover:bg-blue-500"
                  }`}
                  onClick={() => handleAsideClick(item.id)}
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.symbol}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm">{item.name}</div>
                      <div className="text-sm">${item.market_cap}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg">${item.current_price}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
      {/* Chart */}
      <div className="w-full lg:w-3/4 h-full bg-gray-900">
        <div className="h-full overflow-y-auto">
          {coin !== null && <Coindata coin={coin} />}
          {coin === null && <Coindata coin={{ symbol: "btc" }} />}
        </div>
      </div>
    </div>
  );
}
