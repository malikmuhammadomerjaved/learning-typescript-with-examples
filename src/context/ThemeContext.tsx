import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextType = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextType) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
