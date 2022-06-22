import style from "./ModalBody.module.css";

export default function ModalBody(props) {
    return (
        <div className={style.modalBody}>
            {props.children}
        </div>
    )
}