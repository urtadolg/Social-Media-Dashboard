import { useContext, useEffect } from "react";

import styles from "./App.module.scss";
import ThemeContext from "./store/theme-context";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import SummaryCards from "./components/summary/SummaryCards";
import Overview from "./components/overview/Overview";

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    themeCtx.changeTheme(theme as "Light" | "Dark");
  }, [themeCtx]);

  return (
    <Layout>
      <main className={styles.container}>
        <Header />
        <SummaryCards />
        <Overview />
      </main>
    </Layout>
  );
}

export default App;
