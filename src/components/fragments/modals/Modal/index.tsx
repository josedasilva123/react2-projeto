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
            <button onClick={onClose}>Fechar</button>
            {children}
         </div>
      </div>,
      document.body
   );
}
