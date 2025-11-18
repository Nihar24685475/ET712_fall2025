import './App.css';
import User from './comment'
import User_feedback from './User_feedback'

// import the images
import avatar1 from './images/batman.png'
import avatar2 from './images/superman.png'
import avatar3 from './images/gradution.png'


function App() {
  return (
  <>
  <h1 style={{textAlign:"center"}}>lab_12, React props by NIHAR </h1>
    <section className='container'>
      {/* User 1 */}
      <User_feedback username="Batman">
        <User image={avatar1} date = "04/23/2025" msg="I'M Batman"/>
      </User_feedback>

      <User_feedback username="superman">
        <User image={avatar2}  date = "09/26/2025" msg="I'M superman"/>
      </User_feedback>

      <User_feedback username="lilly">
        <User image={avatar3} date = "01/20/2025" msg="4 year of graduation"/>
      </User_feedback>

    </section>

    <section className='postcomment'> 
      <ul className='commentlist'>
        <li>
          Testing
        </li>      
      </ul>

    </section>
    </>
  );
}

export default App;
