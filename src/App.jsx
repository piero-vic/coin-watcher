import React, { useContext } from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import CryptoNews from "./components/CryptoNews";
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
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-cyan-100 to-cyan-50 font-medium dark:from-slate-800 dark:to-slate-700 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route
            path="/portfolio"
            element={
              <div className="grid grow place-items-center">
                <h1>Portfolio page under construction</h1>
              </div>
            }
          />
          <Route path="/news" element={<CryptoNews />} />
        </Routes>
        <Footer />
      </div>

      {isOpen ? <Modal /> : null}
    </main>
  );
};

export default App;
