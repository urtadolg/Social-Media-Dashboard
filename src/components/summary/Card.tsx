import React, {
  useContext,
  Component,
  ReactComponentElement,
  CSSProperties,
} from "react";

import ThemeContext from "../../store/theme-context";
import styles from "./Card.module.scss";
import { ReactComponent as FacebookLogo } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icon-youtube.svg";
import { ReactComponent as ArrowUpLogo } from "../../assets/icon-up.svg";
import { ReactComponent as ArrowDownLogo } from "../../assets/icon-down.svg";

const Card: React.FC<{
  socialMedia: "Facebook" | "Instagram" | "Twitter" | "Youtube";
  socialMediaUserName: string;
  data: string;
  dataDescription: string;
  variation: "up" | "down";
  variationAmout: string;
}> = (props) => {
  const themeCtx = useContext(ThemeContext);

  const socialMediaLogo =
    props.socialMedia === "Facebook" ? (
      <FacebookLogo />
    ) : props.socialMedia === "Instagram" ? (
      <InstagramLogo />
    ) : props.socialMedia === "Twitter" ? (
      <TwitterLogo />
    ) : props.socialMedia === "Youtube" ? (
      <YoutubeLogo />
    ) : (
      <FacebookLogo />
    );

  const socialMediaColor: CSSProperties | undefined =
    props.socialMedia === "Facebook"
      ? { backgroundColor: "hsl(208, 92%, 53%)" }
      : props.socialMedia === "Instagram"
      ? {
          background: "hsl(37, 97%, 70%)",
          backgroundImage:
            "linear-gradient(90deg,hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
        }
      : props.socialMedia === "Twitter"
      ? { backgroundColor: "hsl(203, 89%, 53%)" }
      : props.socialMedia === "Youtube"
      ? { backgroundColor: "hsl(348, 97%, 39%)" }
      : { backgroundColor: "hsl(208, 92%, 53%)" };

  const variationArrowIcon =
    props.variation === "up" ? <ArrowUpLogo /> : <ArrowDownLogo />;

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
          <span className={styles.socialName}>{props.socialMediaUserName}</span>
        </div>
        <div className={styles.mainDataContainer}>
          <span className={styles.mainData}>{props.data}</span>
          <span className={styles.description}>{props.dataDescription}</span>
        </div>
        <div className={styles.dataVariationContainer}>
          {variationArrowIcon}
          <span>{`${props.variationAmout} Today`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
