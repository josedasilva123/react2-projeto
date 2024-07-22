import { createPortal } from "react-dom";
import styles from "./style.module.scss";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

export function Modal({ children, onClose, className }: Props) {
  const [isClosing, setIsClosing] = useState(false);

  function handleClose(){
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  }

  return createPortal(
    <div className={`${className} ${styles.overlay} ${isClosing ? styles.closing : ""}`}>
      <div role="dialog" className={`background-white ${styles.box}`}>
        <button className={styles.close} onClick={handleClose} aria-label="close">
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
