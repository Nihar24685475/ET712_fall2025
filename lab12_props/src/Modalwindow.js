import React from "react";
import "./App.css"


const Modalwindow = function () {
    const closemodalwindow = () => {
        const modalWindow = document.querySelector(".modalwindow")
        modalWindow.style.display = "none";
    }
    //functional collect comment
    const collectcomment = () => {
        let commentarea = document.querySelector(".commentarea")
        const commentlist = document.querySelector(".commentlist")
        const modalusername = document.querySelector(".modalusername").textContent
        const postedate = new Date().toLocaleDateString()
        const modalwindow = document.querySelector(".modalwindow")

        // attent comment from the modal window to the comment list
        commentlist.innerHTML += `<li><em> <b> ${modalusername} </b></em> -- - ${ commentarea.value } --- <span style="font-size:0.8rem; color: gray">  </span> </li>`
        commentarea.value = ""
        modalwindow.style.display = "none"


    }



    return (
        <>
            {/* {modal.windonwn} */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>ADD feedback to <b className="modalusername">  </b></p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>

                    <main className="modalbody">
                        <input className="commentarea" type="text" placeholder="Type your comment..." />
                        {/* <p className="description_comment">Max 200 char</p> */}
                        <button className="btnpost_feedback" onClick={collectcomment}>Post feedback</button>
                    </main>
                </div>
            </section>

        </>
    )

}

export default Modalwindow