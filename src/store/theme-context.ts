import React from "react";

import { DataFormat } from "./ThemeProvider";

const ThemeContext = React.createContext<{
  theme: "Light" | "Dark";
  changeTheme: (newTheme: "Light" | "Dark") => void;
  data: DataFormat[];
}>({
  theme: "Light",
  changeTheme: () => {},
  data: [],
});

export default ThemeContext;
