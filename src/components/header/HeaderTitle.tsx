import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./HeaderTitle.module.scss";

const HeaderTitle: React.FC<{}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const headerClasses =
    themeCtx.theme === "Light"
      ? `${styles.title_desc} ${styles.title_desc_light}`
      : `${styles.title_desc} ${styles.title_desc_dark}`;

  return (
    <div className={headerClasses}>
      <h1>Social Media Dashboard</h1>
      <p>
        Total Followers: <span>23,007</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
