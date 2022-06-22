import style from "./ModalIconsList.module.css";

export default function ModalIconsList(props) {
    return (
        <div className={style.modalIconsList}>
            {props.children}
        </div>
    )
}