import React from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-100 to-blue-100">
      <Header />
      <CryptoList />
      <Footer />
    </div>
  );
};

export default App;
