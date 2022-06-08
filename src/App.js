import './App.css';
import { useState } from 'react';

function App() {  
  const[bool, setBool] = useState(true)
  
  const [matrix,setMatrix] = useState([
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
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

  const bottons = [...Array(matrix[0].length)].map((item,id) => 
    <button key={id} onClick={()=>handleClick(id)}></button> 
  )  

  return (
    <div className="App">
      <div>   
        {bottons}
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
