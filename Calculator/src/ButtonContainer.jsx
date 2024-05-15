import style from "./ButtonContainer.module.css";
const ButtonContainer = ({ handleOnButtonClick }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={style["buttons-container"]}>
        {button.map((btn) => (
          <button
            className={style.button}
            key={btn}
            onClick={() => handleOnButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
