import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const[bool, setBool] = useState(true)

const [matrix,setMatrix] = useState([
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
])

const handleClick =(id)=>{
  for(let i = 4; i>= 0;i--){
    if(matrix[i][id] === 0){
      let newMatrix = matrix;
      newMatrix[i][id] = bool ? 1 : 2   
      setMatrix([...newMatrix])
      setBool(!bool)
      break
    }
  }
}
console.log("matrix", matrix)



  return (
    <div className="App">
      <div>            
        <button onClick={e=>handleClick(0)}>+</button>       
        <button onClick={e=>handleClick(1)}>+</button>       
        <button onClick={e=>handleClick(2)}>+</button>       
        <button onClick={e=>handleClick(3)}>+</button>       
        <button onClick={e=>handleClick(4)}>+</button>       
      </div>
      {
        matrix?.map((row,idxRow)=>   
            <div key={idxRow}>
              {row?.map((call,idxCall)=>
                <div className={`default_${call}`} key={idxCall}></div>              
              )}
            </div>
          )
      }
    </div>
  );
}

export default App;
