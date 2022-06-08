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
  const[pl1Card, setPl1Card] = useState(matrix.length * matrix[0].length/2)
  const[pl2Card, setPl2Card] = useState(matrix.length * matrix[0].length/2)
  
    
  const handleClick =(id)=>{
    for(let i = 4; i>= 0;i--){
      if(matrix[i][id] === 0){
        let newMatrix = matrix;
        newMatrix[i][id] = bool ? 1 : 2   
        setMatrix([...newMatrix])
        setBool(!bool)

        matrix[i][id]===1 ? setPl1Card(item=>item-1) : setPl2Card(item=>item-1)

        break
      }
    }
  }

  const bottons = [...Array(matrix[0].length)].map((item,id) => 
    <button key={id} onClick={()=>handleClick(id)}></button> 
  )  

  return (
    <div className="App">
      <div className='buttonsWrapper'>   
        {bottons}
      </div>
      <div className='contentWrapper'>
        <div className='player1'>
          { 
            [...Array(pl1Card)].map((item,id) => 
              <span key={id}></span> 
            )  
          }
        </div>
        <div className='mainBord'>
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
        <div className='player2'>
          { 
            [...Array(pl2Card)].map((item,id) => 
              <span key={id}></span> 
            )  
          }
        </div>
      </div>
    </div>
  );
}

export default App;
