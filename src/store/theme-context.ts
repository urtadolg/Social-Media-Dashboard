import React from "react";

const ThemeContext = React.createContext<{
  theme: "Light" | "Dark";
  changeTheme: (newTheme: "Light" | "Dark") => void;
}>({
  theme: "Light",
  changeTheme: () => {},
});

export default ThemeContext;
