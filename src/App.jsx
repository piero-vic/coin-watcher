import React, { useContext } from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import CryptoNews from "./components/CryptoNews";
import CoinDetails from "./components/CoinDetails"
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContext } from "./contexts/ModalContext";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isOpen } = useContext(ModalContext);

  return (
    <main className={`relative ${darkMode ? "dark" : null}`}>
      <div className="flex min-h-screen flex-col justify-between bg-gradient-to-b from-cyan-100 to-cyan-50 font-medium dark:from-slate-800 dark:to-slate-700 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/news" element={<CryptoNews />} />
          <Route path="/:coinId" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </div>

      {isOpen ? <Modal /> : null}
    </main>
  );
};

export default App;
