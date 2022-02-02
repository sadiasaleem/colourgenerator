
import { useState } from 'react';
import './App.css';
import Values from 'values.js';
import SingleColor from './SingleColor';



function App() {
  const [colour,setColour]=useState('')
  const [error,setError]=useState('')
  const [list,setList]=useState(new Values('#f15025').all(10))
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      let colours=new Values(colour).all(10)
    setList(colours)
    }
    catch(error){
      setError(true)
    }
    
  }
  
  return (
    <>
    <section className='container'>
      <h3>COLOUR GENERATOR</h3>
      <form onSubmit={handleSubmit} >
        <input type='text' value={colour} onChange={(e)=>
          
          setColour(e.target.value)} placeholder='e.g #F15025'
          className={`${error?'error':null}`}></input>

        <button className='btn' type='submit'>submit</button>
      </form>
     
    </section> 
    
    <section className='colors'>
        {list.map((colour, index) => {
          return (
            
            <SingleColor
              key={index}
              {...colour}
              index={index}
              hexColour={colour.hex}
            />
            
          )
        })}
    </section>
    </>
  );
}

export default App;
