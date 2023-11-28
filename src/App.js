import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';
function App() {

const [state,setState] = useState(0)
const [theme,setTheme] = useState('green')


const resetReturnedValue = useMemo(()=>{
  return  doubleTheNumber(state)
},[state])  

  return (
    <div className="App">
   <div>hello</div>
   <input onChange={(e)=>setState(parseInt(e.target.value))}/>

   <div>{state}</div>
   <label>Returned Value</label>

   <div>{resetReturnedValue}</div>

   <div onClick={()=>setTheme('black')} style={theme==='green' ? {backgroundColor:"green"}:theme==='black' ? {backgroundColor:"black"}:null}>Theme change</div>
    </div>
  );
}

export default App;

function doubleTheNumber(num){
console.log("double the number function works")
for(let i = 0;i<=100000000;i++){

}
return num *2 
}
