import React from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CryptoList />
      <Footer />
    </div>
  );
};

export default App;
