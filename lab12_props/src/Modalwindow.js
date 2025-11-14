import React from "react";
import "./App.css"


const Modalwindow = function(){
    const closemodalwindow = ()=> {
        const modalWindow =document.querySelector(".modalwindow")
        modalWindow.style.display = "none";
    }
    
return(
    <>
    {/* {modal.windonwn} */}
    <section className="modalwindow"> 
        <div className="modalcontent">
            <header className="modalheader">
                <p>ADD feedback</p>
                <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
            </header>

            <main className="modalbody">
                <input className="commentarea" type="text" placeholder="Type your comment..."/>
                {/* <p className="description_comment">Max 200 char</p> */}
                <button className="btnpost_feedback">Post feedback</button>
            </main>
        </div>
    </section>
    
    </>
)

}

export default Modalwindow