import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [score,setscore]=useState(0);
  const [wicket,setwicket]=useState(0);
  const [balls,setballs]=useState(0);
  const [over,setover]=useState(0);
  const [wide,setwide]=useState(1);

  useEffect(()=>{
    if(balls>=6){
      setover(over+1);
      setballs(0);
    }
    
  },[balls])
  
  function handlewide(){
    setscore(score+wide);
    setballs(balls);
  }

  function addscore(runs){
     setscore(score+runs);
     setballs(balls+1);
  }

  function handlewicket(){
    if(wicket<10){
      setwicket(wicket+1)
    }else{
      setwicket("All Wicket")
    }
  }

  function finalscore(){
      if(wicket>10){
       setover(over);
       setballs(balls);
       setscore(score);
    }
  }
  
  return (
   <div className="container">
    <div className="m-5 form-control w-75 bordered rounded mx-auto p-3">
       <h4 className="text-center fw-bold">CRICKET SCORE BOARD APP</h4>
         <h5 className="text-center fw-bold">T20 MATCH</h5>
       <div className="m-5 fw-bold text-center bg-dark text-white p-3 w-50 mx-auto">
           <p>Score :&nbsp;&nbsp;{score}</p>
           <p>Wickets :&nbsp;&nbsp;{wicket}</p>
           <p>Balls :&nbsp;&nbsp;{balls}</p>
           <p>Over :&nbsp;&nbsp;{over}</p>
       </div>
       
       <div className="row">
          <button className="col btn btn-dark text-white fw-bold m-2" onClick={()=>{addscore(1)}} disabled={wicket=="All Wicket"}>1 Run</button>
          <button className="col btn btn-dark text-white fw-bold m-2" onClick={()=>{addscore(2)}} disabled={wicket=="All Wicket"}>2 Run</button>
          <button className="col btn btn-dark text-white fw-bold m-2" onClick={()=>{addscore(3)}} disabled={wicket=="All Wicket"}>3 Run</button>
          <button className="col btn btn-dark text-white fw-bold m-2" onClick={()=>{addscore(4)}} disabled={wicket=="All Wicket"}>4 Run</button>
          <button className="col btn btn-dark text-white fw-bold m-2" onClick={()=>{addscore(6)}} disabled={wicket=="All Wicket"}>6 Run</button>
       </div>
       <div className="row">
         <button className="col btn btn-danger text-white fw-bold m-2" onClick={handlewicket} disabled={wicket=="All Wicket"}>Wickets</button>
         <button className="col btn btn-secondary text-white fw-bold m-2" onClick={handlewide} disabled={wicket=="All Wicket"}>Wide</button>
       </div>
       <div className='text-center'>
         <h4 className={(over==20 || wicket=="All Wickets")?"text-muted":""}>Final Score :{wicket<10?`${score}/${wicket}`:score} &nbsp;&nbsp; Over:{over}</h4>
       </div>
    </div>
  </div>
  );
}

export default App;
