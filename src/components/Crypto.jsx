import React, { useEffect } from "react";
import { getAllCurrencies } from "./api";
import ProjectSideBar from "./SideBar.jsx";

const Crypto = () => {
  //   useEffect(() => {
  //     const getCurrecny = async () => {
  //       const data = await getAllCurrencies();
  //       console.log(data);
  //     };
  //     getCurrecny();
  //   }, []);
  return (
    <div>
      <h1 className="text-2xl">Hello</h1>
      <ProjectSideBar />
    </div>
  );
};

export default Crypto;
