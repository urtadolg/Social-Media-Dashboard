import { useContext } from "react";

import ThemeContext from "./store/theme-context";
import Switch from "./components/ui/Switch";
import styles from "./App.module.scss";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import SummaryCards from "./components/summary/SummaryCards";

function App() {
  const themeCtx = useContext(ThemeContext);

  const appContainerClasses =
    themeCtx.theme === "Light"
      ? `${styles.appContainer} ${styles.appContainerLight}`
      : `${styles.appContainer} ${styles.appContainerDark}`;

  return (
    <Layout>
      <Switch />
    </Layout>
  );
}

export default App;
