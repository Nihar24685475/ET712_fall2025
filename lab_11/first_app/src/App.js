import './App.css';
import mountain from "./image/pexels-elijah-pilchard-269100825-12792393.jpg"
function App() {
  return (
    <>
    <h1 className='title'>welcome to react js </h1>
    <h2 className='author'>by NIHAR</h2>
    <h2 style={{color: "green",textAlign:"center"}}>Inline style</h2>
    <section>
      <lable for="user_email">ENter email:</lable>
      <input type="email" id='user_email' placeholder='enter email address...'></input>
    </section>
    <figure className='imgcontainer'>
      <img src={mountain}/>
    </figure>
    </>
  );
}

export default App;
