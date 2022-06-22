import style from "./RfidCard.module.css";

import { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai"

export default function RfidCard(props) {

    const [showDeleteIcon, setShowDeleteIcon] = useState(false)

    return (
        <div className={style.rfidCard} key={props.key} onMouseEnter={() => setShowDeleteIcon(true)} onMouseLeave={() => setShowDeleteIcon(false)} >
            {showDeleteIcon && <span className={style.rfidCardIcon} onClick={props.onDeleteClick}><AiOutlineDelete size={25} /></span>}
            <span className={style.rfidCardOwner}>{props.cardOwnerFirstName}{" "}{props.cardOwnerLastName}</span>
            <span className={style.rfidCardId}>{props.cardId}</span>
        </div>
    )
}