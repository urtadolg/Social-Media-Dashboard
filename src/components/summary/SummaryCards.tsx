import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import Card from "./Card";
import styles from "./SummaryCards.module.scss";

const SummaryCards: React.FC<{}> = (props) => {
  const themeCtx = useContext(ThemeContext);
  const cardData = themeCtx.data.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  const summaryCardsClasses =
    themeCtx.theme === "Light"
      ? `${styles.summaryCards} ${styles.summaryCardsLight}`
      : `${styles.summaryCards} ${styles.summaryCardsDark}`;

  return <div className={summaryCardsClasses}>{cardData}</div>;
};

export default SummaryCards;
