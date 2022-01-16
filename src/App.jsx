import React from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-medium bg-gradient-to-r from-cyan-100 to-blue-100">
      <Header />
      <CryptoList />
      <Footer />
    </div>
  );
};

export default App;
