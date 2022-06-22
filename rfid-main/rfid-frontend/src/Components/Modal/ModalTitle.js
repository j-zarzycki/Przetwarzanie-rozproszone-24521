import style from "./ModalTitle.module.css";

export default function ModalTitle(props) {
    return <span className={style.modalTitle}>{props.children}</span>;
  }