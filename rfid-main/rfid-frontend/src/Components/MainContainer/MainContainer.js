import style from "./MainContainer.module.css";

export default function MainContainer(props) {
    return (
        <div className={style.mainContainer}>
            {props.children}
        </div>
    )
}