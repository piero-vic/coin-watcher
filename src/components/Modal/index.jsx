import React from "react";
import { FiX } from "react-icons/fi";
import coingeckoLogo from "../../assets/CoinGeckoLogo.png";
import messariLogo from "../../assets/MessariLogo.svg";

const Modal = ({ modalRef, toggleModal, modalContent }) => {
  return (
    <div className="fixed top-0 flex min-h-screen min-w-full items-center justify-center backdrop-brightness-50 dark:text-white">
      <div
        ref={modalRef}
        className="max-h-[90vh] w-[85vw] max-w-[420px] rounded-2xl bg-white text-lg dark:bg-zinc-900"
      >
        <header className="flex items-center justify-between p-4 text-2xl font-medium">
          <h1>{modalContent}</h1>
          <button className="text-2xl" onClick={toggleModal}>
            <FiX />
          </button>
        </header>
        <div className="max-h-[70vh] overflow-auto p-4 pt-0 text-sm">
          <div className="flex flex-col gap-4">
            {modalContent === "About" ? <About /> : <License />}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <p className="text-xl">
        Coin Watcher is a web application that displays crypto prices and news.
      </p>
      <p>The app uses the following third-party APIs:</p>
      <div className="flex flex-col gap-2 rounded-2xl bg-stone-100 p-4 dark:bg-zinc-800">
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={coingeckoLogo}
            className="mx-auto max-h-16"
            alt="CoinGecko Logo"
          />
        </a>
        <p>
          The app fetches crypto information, including price, price change, and
          market cap, from this API.
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-2xl bg-stone-100 p-4 dark:bg-zinc-800">
        <a
          href="https://www.messari.io/"
          rel="noopener noreferrer"
          target="_blank"
          className="max-h-16"
        >
          <img src={messariLogo} className="mx-20 py-4" alt="Messari Logo" />
        </a>
        <p>The app fetches crypto related news from this API.</p>
      </div>
    </>
  );
};

const License = () => {
  return (
    <>
      <p>Copyright © 2022 Piero Lescano</p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </>
  );
};

export default Modal;
