import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./Layout.module.scss";

const Layout: React.FC<{}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const LayoutClasses =
    themeCtx.theme === "Light"
      ? `${styles.layout} ${styles.layoutLight}`
      : `${styles.layout} ${styles.layoutDark}`;

  return <div className={LayoutClasses}>{props.children}</div>;
};

export default Layout;
