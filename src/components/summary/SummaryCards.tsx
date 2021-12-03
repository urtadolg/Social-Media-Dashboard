import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import Card from "./Card";
import styles from "./SummaryCards.module.scss";

const SummaryCards: React.FC<{}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const summaryCardsClasses =
    themeCtx.theme === "Light"
      ? `${styles.summaryCards} ${styles.summaryCardsLight}`
      : `${styles.summaryCards} ${styles.summaryCardsDark}`;

  return (
    <div className={summaryCardsClasses}>
      <Card
        socialMedia={"Facebook"}
        socialMediaUserName={"@urtadolg"}
        data={"1234"}
        dataDescription={"FOLLOWERS"}
        variation={"up"}
        variationAmout={"123"}
      />
      <Card
        socialMedia={"Twitter"}
        socialMediaUserName={"@urtadolg"}
        data={"1044"}
        dataDescription={"FOLLOWERS"}
        variation={"up"}
        variationAmout={"99"}
      />
      <Card
        socialMedia={"Instagram"}
        socialMediaUserName={"@urtadolg"}
        data={"11k"}
        dataDescription={"FOLLOWERS"}
        variation={"up"}
        variationAmout={"1099"}
      />
      <Card
        socialMedia={"Youtube"}
        socialMediaUserName={"@urtadolg"}
        data={"8239"}
        dataDescription={"SUBSCRIBERS"}
        variation={"down"}
        variationAmout={"144"}
      />
    </div>
  );
};

export default SummaryCards;
