import style from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ handleOnClick }) => {
  const buttonNames = [
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
    "0",
    "9",
    "=",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {buttonNames.map((item, index) => (
        <button className={style.button} key={index} onClick={()=>handleOnClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
