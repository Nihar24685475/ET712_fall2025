import './App.css';
import React, { useState } from 'react';


function App() {
  /*
  //set intial state for username
  const [username, setUsername] = useState("");
*/
  
// set multiple state for input 
const [inputs, setInputs]= useState({})

// set state for gender
const [myGender, setMyGender] = useState("")

// function to collct the selected gender
const selectedGender = (event)=>{
  setMyGender(event.target.value);
}

// set state for comments
const [textcomment, setcomment] = useState("")

// function to collect the comments
const submitted_comments = function(event){
  setcomment(event.target.value);
}


const handle_change = function(event){
  const name = event.target.name;
  const value = event.target.value;
  //update the state
  setInputs(values=>({...values,[name]:value}))
}


// function submit form
  const submitform = function (event) {
    event.preventDefault();
  }



  return (
    <div className="App">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>forms in react JS</legend>

          <div>
            <label for="name">Enter username:</label>
            <input
              type='text'
              id='name'
              className='inputstyle'
              name='username'
              placeholder='Type the username...'
              value={inputs.username}
              onChange={handle_change}
            />
            
            
          </div>


          <div className='formgroup'>
            <label for="age">Enter age:</label>
            <input 
                 type='number' 
                 id='age'
                 className='inputstyle'
                 name='age'
                 placeholder='Type in the number your age...'
                 value={inputs.age}
                 onChange={handle_change}
                 />
          </div>

          {/* select gender */}
          <div className='formgroup'> 
            <label>select gender
              <select value={myGender} onChange={selectedGender}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="Ohter">Other</option>
          </select>
          </label>
          </div>
            
          
          

          {/* comment textarea */}
          <div className='formgroup'>
            <label for="comments">Any suggestion:</label>
            <textarea
              id='comments'
              value={textcomment}
              onChange={submitted_comments}
              placeholder='Type comment...'
            />
          </div>

          <div>
            <label for="password">Enter Password:</label>
            <input
              type='text'
              id='password'
              className='inputstyle'
              name='userpassword'
              placeholder='Type the password...'
              value={inputs.password}
              onChange={handle_change}
            />
            
            
          </div>

          {/* submit form */}
          <input type='submit' className='btnSubmit' />

        </fieldset>
      </form>
      {/* test the username collected after the submit button */}
      <p className='printresult'>Username = {inputs.username}</p>
      <p className='printresult'>Age= {inputs.age}</p>
      <p className='printresult'>gender= {myGender}</p>
      <p className='printresult'>comments= {textcomment}</p>
      <p className='printresult'>Password = {inputs.userpassword}</p>


    </div>

  )
}


export default App;
