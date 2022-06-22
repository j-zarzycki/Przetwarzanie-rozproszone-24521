import style from "./ModalBackdrop.module.css";
import ReactDOM from 'react-dom';

export default function ModalBackdrop(props) {

    return ReactDOM.createPortal(
        <>
            <div className={style.modalBackdrop}>
                {props.children}
            </div>
        </>,
        document.getElementById('modal')
    )
}