import React from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dark">
      <div className="flex flex-col min-h-screen font-medium bg-gradient-to-b from-cyan-100 to-cyan-50 dark:from-slate-800 dark:to-slate-700 dark:text-white">
        <Header />
        <CryptoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
