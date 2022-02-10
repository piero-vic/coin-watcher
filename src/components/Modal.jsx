import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { FiX } from "react-icons/fi";

function Modal() {
  const { modalRef, toggleModal } = useContext(ModalContext);

  return (
    <div className="fixed min-h-screen min-w-full top-0 flex justify-center items-center backdrop-brightness-50 dark:text-white">
      <div
        ref={modalRef}
        className="text-lg bg-white w-[85vw] max-w-[420px] max-h-[90vh] rounded-2xl dark:bg-zinc-900"
      >
        <header className="p-4 flex justify-between items-center font-medium text-2xl">
          <h1>License</h1>
          <button className="text-2xl" onClick={toggleModal}>
            <FiX />
          </button>
        </header>
        <div className="p-4 pt-0 text-sm overflow-auto max-h-[70vh]">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">MIT License</h2>
            <p>Copyright © 2022 Piero Lescano</p>
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
