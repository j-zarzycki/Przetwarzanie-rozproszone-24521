import style from "./ModalIcon.module.css";

export default function ModalIcon(props) {
    return (
        <div
            className={`${style.modalIcon} ${props.disabled && style.modalIconDisabled}`}
            onClick={!props.disabled && props.onClick}
        >
            <span>{props.children}</span>
        </div>
    );
}