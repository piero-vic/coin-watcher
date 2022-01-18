import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-5 text-xs gap-2">
      <p>© 2022 Piero Lescano. All Rights Reserved.</p>
      <p>
        Powered by{" "}
        <a href="https://www.coingecko.com/" rel="noreferrer" target="_blank">
          CoinGecko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
