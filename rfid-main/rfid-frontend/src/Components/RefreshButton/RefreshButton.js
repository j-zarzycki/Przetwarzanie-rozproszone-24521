import style from "./RefreshButton.module.css";

import { MdOutlineRefresh } from 'react-icons/md';

export default function RefreshButton(props) {
    return (
        <div className={style.refreshButton} onClick={props.onClick}>
            Refresh{" "}<MdOutlineRefresh size={20} />
        </div>
    );
}