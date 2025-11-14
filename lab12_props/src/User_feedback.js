import React from "react";
import './App.css'
import Modalwindow from './Modalwindow'

const User_feedback = function(props){
    // modlawindow
    const openmodalwindow = ()=>{
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block";
    }
    return(
        <>
        <div className="feedbackcontainer"> 
            <section className="feedbackcard">
                <div className="content">{props.username}</div>
                <div className="description">{props.children}</div>
                <div className= "cardfooter">
                    <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span> Add Feeback</p>
                </div>
            </section>
        </div>
        {/* modal window */}
        <Modalwindow/>
        
        
        </>
    )
}
export default User_feedback