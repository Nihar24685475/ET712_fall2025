import React from "react";
import avtaruser1 from './images/batman.png'
import './App.css'
const User = function(props){
    return(
    <>
    <section className="card">
        <a><img src={props.image}/></a>
        <div className="content">
            <a className="author">{props.name}</a>
        </div>
            <div className="metabata">
            <p>Posted on <span className="date">{props.date}</span></p>
        </div>
                <div className="comment">
                    <p><i>"{props.msg}"</i></p>
                </div>
    </section>
    </>
    )
}

export default User