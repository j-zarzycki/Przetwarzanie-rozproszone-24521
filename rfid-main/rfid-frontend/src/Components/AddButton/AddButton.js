import style from "./AddButton.module.css";

export default function AddButton(props) {
  return (
    <div className={style.addButton} onClick={props.onClick}>
      {props.name}
    </div>
  );
}
