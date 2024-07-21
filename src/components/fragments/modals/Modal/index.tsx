import { createPortal } from "react-dom";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

export function Modal({ children, onClose, className }: Props) {
  return createPortal(
    <div className={`${className} ${styles.overlay}`}>
      <div role="dialog" className={`background-white ${styles.box}`}>
        <button className={styles.close} onClick={onClose} aria-label="close">
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
