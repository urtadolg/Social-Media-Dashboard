import React, { useContext, CSSProperties } from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./Card.module.scss";
import { ReactComponent as FacebookLogo } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icon-youtube.svg";
import { ReactComponent as ArrowUpLogo } from "../../assets/icon-up.svg";
import { ReactComponent as ArrowDownLogo } from "../../assets/icon-down.svg";

const Card: React.FC<{
  data: {
    id: string;
    socialMedia: "Facebook" | "Instagram" | "Twitter" | "Youtube";
    username: string;
    data: string;
    variation: "up" | "down";
    variationAmount: string;
  };
}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const socialMediaLogo =
    props.data.socialMedia === "Facebook" ? (
      <FacebookLogo />
    ) : props.data.socialMedia === "Instagram" ? (
      <InstagramLogo />
    ) : props.data.socialMedia === "Twitter" ? (
      <TwitterLogo />
    ) : props.data.socialMedia === "Youtube" ? (
      <YoutubeLogo />
    ) : (
      <FacebookLogo />
    );

  const socialMediaColor: CSSProperties | undefined =
    props.data.socialMedia === "Facebook"
      ? { backgroundColor: "hsl(208, 92%, 53%)" }
      : props.data.socialMedia === "Instagram"
      ? {
          background: "hsl(37, 97%, 70%)",
          backgroundImage:
            "linear-gradient(90deg,hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
        }
      : props.data.socialMedia === "Twitter"
      ? { backgroundColor: "hsl(203, 89%, 53%)" }
      : props.data.socialMedia === "Youtube"
      ? { backgroundColor: "hsl(348, 97%, 39%)" }
      : { backgroundColor: "hsl(208, 92%, 53%)" };

  const variationArrowIcon =
    props.data.variation === "up" ? <ArrowUpLogo /> : <ArrowDownLogo />;

  const dataDescription =
    props.data.socialMedia === "Youtube" ? "SUBSCRIBERS" : "FOLLOWERS";

  const containerClasses =
    themeCtx.theme === "Light"
      ? `${styles.container} ${styles.containerLight}`
      : `${styles.container} ${styles.containerDark}`;

  return (
    <div className={styles.card}>
      <div className={styles.topDetail} style={socialMediaColor} />
      <div className={containerClasses}>
        <div className={styles.socialMediaContainer}>
          {socialMediaLogo}
          <span className={styles.socialName}>{props.data.username}</span>
        </div>
        <div className={styles.mainDataContainer}>
          <span className={styles.mainData}>{props.data.data}</span>
          <span className={styles.description}>{dataDescription}</span>
        </div>
        <div className={styles.variationAmountContainer}>
          {variationArrowIcon}
          <span>{`${props.data.variationAmount} Today`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
