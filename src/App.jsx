import style from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import React,{useState} from 'react'
function App() {
   // const handleOnchange=(event)=>{
   //    console.log(event.target.value)
   //    // console.log(buttonState);
   //    // setbuttonState(buttonState)
   // }

   const [calval,setcalval]=useState('');
   const handleOnClick=(buttonText)=>{
      if(buttonText==='C')
      {
         setcalval("");
      }else if(buttonText==='=')
      {
         let result=eval(calval);
         setcalval(result);
      }
      else{
         const newval=calval+buttonText;
         setcalval(newval);
      }
  }
   return (
   <div className={style.calculator}>
    <Display Displayval={calval}/>
    <ButtonsContainer handleOnClick={handleOnClick}/>
   </div>
   );
}

export default App
