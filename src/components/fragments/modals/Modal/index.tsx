import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

export function Modal({ children, onClose, className }: Props) {
  return createPortal(
    <div className={className}>
      <div role="dialog">
        <button onClick={onClose} aria-label="close">
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
