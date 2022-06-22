import style from "./Input.module.css";


export default function Input(props) {
  const errorClass = props.isValid ? "" : "error";
  return (
    <div className={style.input}>
      <label for={props.id}>{props.label}</label>
      <input
        for={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
      />
    </div>
  );
}