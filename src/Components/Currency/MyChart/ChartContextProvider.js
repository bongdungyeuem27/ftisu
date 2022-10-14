import { createContext, useState } from "react";

export const ChartContext = createContext();

const ChartContextProvider = ({ children }) => {
  const [listSelected, setListSelected] = useState([]);

  const data = {
    listSelected, setListSelected
  };

  return <ChartContext.Provider value={data}>{children}</ChartContext.Provider>;
};

export default ChartContextProvider;
