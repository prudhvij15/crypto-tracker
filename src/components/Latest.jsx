import React, { useEffect, useState } from "react";
import { trendingCoins } from "./api";

const Latest = () => {
  const [coins, setCoins] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await trendingCoins();
        setCoins(data);
      } catch (err) {
        console.log(err);

        setCoins([
          {
            id: "bitcoin",
            symbol: "btc",
            name: "Bitcoin",
            image:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            current_price: 72994,
          },
          {
            id: "ethereum",
            symbol: "eth",
            name: "Ethereum",
            image:
              "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            current_price: 3997.26,
          },
          {
            id: "ripple",
            symbol: "xrp",
            name: "XRP",
            image:
              "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
            current_price: 0.687638,
          },
          {
            id: "solana",
            symbol: "sol",
            name: "Solana",
            image:
              "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
            current_price: 163.51,
          },
        ]);
      }
    };
    fetchCoins();
  }, []);

  useEffect(() => {
    if (coins) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % coins.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [coins]);

  const visibleCoins = coins ? coins.slice(index, index + 4) : [];

  return (
    <>
      <div className="bg-gray-900  text-white p-4 m-5">
        <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between">
          {visibleCoins.map((coin, idx) => (
            <div
              key={coin.id}
              className="border border-gray-800 rounded p-2 "
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <img
                src={coin.image}
                alt={coin.symbol}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-center font-semibold">{coin.name}</p>
              <p className="text-center">{coin.symbol}</p>
              <p className="text-center">{coin.current_price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Latest;
