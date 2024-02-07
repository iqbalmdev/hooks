import React, { Fragment, useState, useRef ,useEffect,useContext} from 'react';
import { useNavigate  } from 'react-router-dom';
import { MainContext } from './context/mainContext';
const Home = () => {
  const numbrRef = useRef();
  const navigate = useNavigate();
const {state,setState,states} = useContext(MainContext)
  const [inputNumber, setInputNumber] = useState([{ name: 1, value: '' }]);


  const addInput = () => {
    const length = inputNumber.length;
    setInputNumber((prev) => [
      ...prev,
      {
        name: length + 1,
        value: '',
      },
    ]);
  };
  const settingValues = (id,value)=>{
const changedValues=  inputNumber?.map((item,index)=>{
 return  index === id ? {
    ...item,value
  }: item
}
)
setInputNumber(changedValues)
}
 ;

 useEffect(() => {
   const count = inputNumber.reduce((curr,acc)=>{
return parseInt(acc.value) + curr
   },0)
   console.log(count)
   numbrRef.current.textContent = count
 }, [inputNumber])
 
console.log(inputNumber)
  return (
    <>
      <div ref={numbrRef}>0</div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '500px', gap: '2rem' }}>
        <button onClick={addInput}>Add input</button>
        <form  style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {inputNumber.map((data, id) => (
            <Fragment key={id}>
              <label>{data.name} input</label>
              <input
                name={data.name}
                type="number"
          onChange={(e)=>settingValues(id,parseInt(e.target.value))}
              />
            </Fragment>
          ))}
          <button type="submit">Submit count</button>
        </form>
        {state}
        {states.name}
      </div>
    </>
  );
};

export default Home;
