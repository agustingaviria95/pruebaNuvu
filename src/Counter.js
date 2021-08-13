import { useState } from "react";

export const Counter = () => {
    const[number,setNumber]=useState(5);
    return (
      <div>
          <button onClick={()=>setNumber(number + 1)}>
              Más
          </button>
          <h4>Contador es{number}</h4>
          <button onClick={()=>setNumber(number - 1)}>
              Menos
          </button>
          <br/>
          <button onClick={()=>setNumber(5)}>
              Reset
          </button>
      </div>
    );  
  };