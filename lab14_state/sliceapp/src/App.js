import './App.css';
import { useState } from 'react';

//list of three massege
const message = ["I think . therefor I am", "I have a dream", "The only thing we have to fear is fear itself"];



function App() {
  // set initial state
  const [couter, setCounter] = useState(1)

  // set initial state for open and close
  const [isOpen, setIsopen] = useState(true)




  return (
    <div className="App">
      <h1 className='title'>slice card by Nihar Patel</h1>
      {/* slice card */}
      <section className='slicewrapper'>
        <div className='numberwrapper'>
          <p className='msg'>{couter} ------- {message[couter-1]}</p>
          <div className={couter == 1 ? "active" : ""}> <p>1</p> </div>
          <div className={couter == 2 ? "active" : ""}> <p>2</p> </div>
          <div className={couter == 3 ? "active" : ""}> <p>3</p> </div>

        </div>
        

        <div className='btngroup'>
          <button onClick={function (){if(couter<message.length)setCounter(couter+1)}}>Next</button>
          <button onClick={function (){if(couter>1)setCounter(couter-1)}}>Previous</button>
        </div>
      </section>

      {/* open and close */}
      <section className='info'>
        <p><b>Cat (Felis catus)</b>, commonly reffered to as domestic car or house cat <button className='readmorebtn' onClick={function(){setIsopen(!isOpen)}}>{isOpen ? "Hide" : "Read More"}</button></p>
      </section>

      <section>
        {
          isOpen && (
            <div className='readmore'>
              <p>The cat, commonly reffered to as the domestic car or house cat , is a small domesticted speices of the family felidae</p>
            </div>
          )
        }
      </section>
    </div>
  );
}

export default App;


