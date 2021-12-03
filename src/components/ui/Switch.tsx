import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./Switch.module.scss";

const Switch = () => {
  const themeCtx = useContext(ThemeContext);
  console.log(themeCtx);

  const wrapperSwitchClasses =
    themeCtx.theme === "Light"
      ? `${styles.wrapperSwitch} ${styles.wrapperSwitchLight}`
      : `${styles.wrapperSwitch} ${styles.wrapperSwitchDark}`;

  const handleThemeToggle = () => {
    console.log("mudando tema....");
    themeCtx.changeTheme(themeCtx.theme === "Light" ? "Dark" : "Light");
  };

  return (
    <div className={wrapperSwitchClasses}>
      <p>{themeCtx.theme} Mode</p>
      <div className={styles.switchContainer} onClick={handleThemeToggle}>
        <div className={styles.selector} />
      </div>
    </div>
  );
};

export default Switch;
