import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./Overview.module.scss";
import OverviewCard from "./OverviewCard";

const Overview: React.FC<{}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const overviewClasses =
    themeCtx.theme === "Light"
      ? `${styles.overview} ${styles.overviewLight}`
      : `${styles.overview} ${styles.overviewDark}`;

  const cards = themeCtx.data.map((item) => {
    return item.overview.map((overviewItem, index) => {
      return (
        <OverviewCard
          key={item.id + index}
          cardData={{
            metric: overviewItem.metric,
            socialMedia: item.socialMedia,
            data: overviewItem.data,
            variation: overviewItem.variation,
            variationAmount: overviewItem.variationAmount,
          }}
        />
      );
    });
  });

  return (
    <div className={overviewClasses}>
      <h1 className={styles.title}>Overview - Today</h1>
      <ul className={styles.cardsContainer}>{cards}</ul>
    </div>
  );
};

export default Overview;
