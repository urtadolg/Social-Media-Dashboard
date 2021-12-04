import { useContext } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./OverviewCard.module.scss";
import { ReactComponent as FacebookLogo } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icon-youtube.svg";
import { ReactComponent as ArrowUpLogo } from "../../assets/icon-up.svg";
import { ReactComponent as ArrowDownLogo } from "../../assets/icon-down.svg";

const OverviewCard: React.FC<{
  cardData: {
    metric:
      | "Page Views"
      | "Likes"
      | "Profile Views"
      | "Retweets"
      | "Total Views";

    socialMedia: "Facebook" | "Instagram" | "Twitter" | "Youtube";

    data: string;

    variation: "up" | "down";

    variationAmount: string;
  };
}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const socialMediaLogo =
    props.cardData.socialMedia === "Facebook" ? (
      <FacebookLogo />
    ) : props.cardData.socialMedia === "Instagram" ? (
      <InstagramLogo />
    ) : props.cardData.socialMedia === "Twitter" ? (
      <TwitterLogo />
    ) : props.cardData.socialMedia === "Youtube" ? (
      <YoutubeLogo />
    ) : (
      <FacebookLogo />
    );

  const overviewCardClasses =
    themeCtx.theme === "Light"
      ? `${styles.overviewCard} ${styles.overviewCardLight}`
      : `${styles.overviewCard} ${styles.overviewCardDark}`;

  const variationArrowIcon =
    props.cardData.variation === "up" ? <ArrowUpLogo /> : <ArrowDownLogo />;

  const variationColor =
    props.cardData.variation === "up"
      ? { color: "hsl(163, 72%, 41%)" }
      : { color: "hsl(356, 69%, 56%)" };

  return (
    <div className={overviewCardClasses}>
      <div className={styles.title_logo}>
        <h2>{props.cardData.metric}</h2>
        {socialMediaLogo}
      </div>
      <div className={styles.data_variation}>
        <span className={styles.data}>{props.cardData.data}</span>
        <span className={styles.variation} style={variationColor}>
          {variationArrowIcon}
          {props.cardData.variationAmount}
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
