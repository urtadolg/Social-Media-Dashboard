import { useState } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider: React.FC<{}> = (props) => {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");

  const changeTheme = (newTheme: "Light" | "Dark") => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
