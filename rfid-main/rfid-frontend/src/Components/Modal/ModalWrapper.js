import style from "./ModalWrapper.module.css";

export default function ModalWrapper(props) {
    return (
        <div className={style.modalWrapper}>
            {props.children}
        </div>
    )
}