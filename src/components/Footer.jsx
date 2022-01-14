import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 flex flex-col items-center gap-2 p-5">
      <p className="text-xs text-gray-200">
        © 2022 Piero Lescano. All Rights Reserved.
      </p>
      <p className="text-xs text-gray-200">
        Powered by{" "}
        <a href="https://www.coingecko.com/" rel="noreferrer" target="_blank">
          CoinGecko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
