import "../styles/modal.scss";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: JSX.Element 
}

export default function Modal({isOpen, onClose, title, children}: ModalProps): JSX.Element | null {
    if (!isOpen) return null;

    return (
        <div 
            className={"modal-overlay " + (isOpen ? "show" : "")}
            onClick={onClose}
        >
            <div
                className={"modal-content " + (isOpen ? "slide-in" : "")}
                onClick={function (e) { e.stopPropagation(); }} // Prevent closing when clicking inside modal
            >
                <h2>{title}</h2>
                <div className="modal-children">{children}</div>
            </div>
        </div>
    )
}