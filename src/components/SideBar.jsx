import { useEffect, useState } from "react";
import { getAllCurrencies } from "./api";

export default function ProjectSideBar() {
  const [currency, setCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const data = await getAllCurrencies();
        setCurrency(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };
    getCurrencies();
  }, []);

  const handleCurrencyClick = (selectedId) => {
    setSelectedCurrency(selectedId);
  };

  return (
    <aside className="h-auto  w-96 flex flex-col bg-gray-900 text-white px-4 py-6">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <ul className="flex flex-col w-full space-y-4">
        {currency.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-md ${
              selectedCurrency === item.id ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
            onClick={() => handleCurrencyClick(item.id)}
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
    </aside>
  );
}
