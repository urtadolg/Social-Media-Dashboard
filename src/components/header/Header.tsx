import styles from "./Header.module.scss";
import Switch from "../ui/Switch";
import HeaderTitle from "./HeaderTitle";

const Header: React.FC<{}> = (props) => {
  return (
    <div className={styles.headerContainer}>
      <HeaderTitle />
      <Switch />
    </div>
  );
};

export default Header;
