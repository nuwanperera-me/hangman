import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type PopUpProps = {
  children: React.ReactNode;
};

export default function PopUp({ children }: PopUpProps) {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="pop-up-container">
      <dialog className="pop-up">
        <button onClick={() => setIsOpen(false)} className="close-button">
          <XMarkIcon className="icon" />
        </button>
        {children}
      </dialog>
    </div>
  );
}
