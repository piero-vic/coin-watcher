import React, { useContext } from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode && "dark"}>
      <div className="flex flex-col min-h-screen font-medium bg-gradient-to-b from-cyan-100 to-cyan-50 dark:from-slate-800 dark:to-slate-700 dark:text-white">
        <Header />
        <CryptoList />
        <Footer />
      </div>
    </main>
  );
};

export default App;
