import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 p-5 text-xs">
      <p>© 2022 Piero Lescano. All Rights Reserved.</p>
      <p>
        Powered by{" "}
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoinGecko
        </a>{" "}
        and{" "}
        <a
          href="https://www.messari.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Messari
        </a>
      </p>
    </footer>
  );
};

export default Footer;
