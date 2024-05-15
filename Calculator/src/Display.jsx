import style from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input type="text" className={style.display} value={displayVal} readOnly />
  );
};
export default Display;
