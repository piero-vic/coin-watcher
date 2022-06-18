import React, { useContext } from "react";
import Header from "./components/Header";
import DropdownMenu from "./components/Header/DropdownMenu";
import NavBar from "./components/Header/NavBar";
import CryptoList from "./components/CryptoList";
import CryptoNews from "./components/CryptoNews";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ThemeContext } from "./contexts/ThemeContext";
import { Route, Routes, Link } from "react-router-dom";
import useModal from "./hooks/useModal";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isOpen, modalRef, toggleModal, modalContent } = useModal();

  return (
    <main className={`relative ${darkMode ? "dark" : null}`}>
      <div className="flex min-h-screen flex-col justify-between bg-gradient-to-b from-cyan-100 to-cyan-50 font-medium dark:from-slate-800 dark:to-slate-700 dark:text-white">
        <Header>
          <Link className="hidden w-min text-lg font-bold sm:block" to="/">
            Coin Watcher
          </Link>
          <NavBar />
          <DropdownMenu toggleModal={toggleModal} />
        </Header>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/news" element={<CryptoNews />} />
          <Route path="/:coinId" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </div>

      {isOpen ? (
        <Modal
          modalRef={modalRef}
          toggleModal={toggleModal}
          modalContent={modalContent}
        />
      ) : null}
    </main>
  );
};

export default App;
