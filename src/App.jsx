import { createContext, useState } from "react";
import "./App.css";

import ProjectSideBar from "./components/SideBar";
export const AppContext = createContext();
function App() {
  const [currency, setCurrency] = useState("bitcoin");
  return (
    <AppContext.Provider value={{ currency, setCurrency }}>
      <ProjectSideBar />
    </AppContext.Provider>
  );
}

export default App;
