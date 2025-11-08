import React from "react";
import './App.css'

const User_feedback = function(props){
    return(
        <>
        <div className="feedbackcontainer"> 
            <section className="feedbackcard">
                <div className="content">{props.username}</div>
                <div className="description">{props.children}</div>
                <div className= "cardfooter">
                    <p className="addicon"><span>&#10011;</span> Add Feeback</p>
                </div>
            </section>
        </div>
        </>
    )
}
export default User_feedback