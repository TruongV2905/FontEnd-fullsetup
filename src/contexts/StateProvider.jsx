import { createContext, useContext, useState } from "react";

const StateContext = createContext(null);
function StateProvider({ children }) {
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("black");
  const [zoom, setZoom] = useState(false);

  const state = {
    theme,
    setTheme,
    zoom,
    setZoom,
    color,
    setColor,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}

export default StateProvider;
export const useStateValue = () => useContext(StateContext);
