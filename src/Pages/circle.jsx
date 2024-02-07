import React from 'react'
import { useEffect, useState } from "react";
import "../App"
const Circle = () => {
     const [circleCount, setCircleCount] = useState(0);
    const [circle, setCircle] = useState([]);

    function addMore() {
      console.log("clicked");
      setCircle([
        ...circle,
        {
          name: "hello",
          isClicked: false,
          count: 1,
        },
      ]);
    }
  
    function chnageColor(indexOUT) {
      const newSetArray = circle?.map((data,index)=>{
        return index === indexOUT ? {
            ...data,isClicked:!data?.isClicked
        }: data
      })
      console.log(newSetArray,"see here")
    setCircle(newSetArray)
    }
  
    const countValue = () => {
      let count = 0;
      for (let i = 0; i < circle.length; i++) {
        if (circle?.[i]?.isClicked) {
          count = count + 1;
        }
      }
      setCircleCount(count);


      return count;
    };
    useEffect(() => {
      countValue();
    }, [circle]);
  return (
    <div>
    <button onClick={addMore}>Add more</button>
    <div>{circleCount}</div>
    {circle?.map((data, index) => {
      return (
        <div key={index}>
          <div
            onClick={() => chnageColor(index)}
            className={`${data?.isClicked ? "changeColor" : "circleColor"}`}
          >
            {data?.isCLikced}
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Circle