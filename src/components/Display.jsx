//import style from '../App.module.css';
import style from "./Display.module.css";
const Display = ({ Displayval }) => {
  return (
    <>
      <input className={style.display} type="text" 
      defaultValue={Displayval} readOnly/>
    </>
  );
};
export default Display;
