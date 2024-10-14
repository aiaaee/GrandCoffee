import React from "react";
import './Reviews.css'
function Review(){
    let ClientsReview = [
        {id : 1 , author : 'sara jones' , job:'ux designer' , image : `Images/Client1.jpg` } , 
        {id : 2 , author : "jack robert" , job: "Mechanic" , image: `Images/Client2.jpg`} , 
        {id : 2 , author : "emily brandon" , job: "Driver" , image: `Images/Client3.jpg`} , 

    ]
    return(
        ClientsReview.map(items => {
            return (
                <div className="Review_wrapper">
                    
                    <section className="Reviewcontainer">
                        <div className="title">
                        <h2>our reviews</h2>
                        <div className="underline"></div>
                        </div>
                        <article className="review">
                        <div className="img-container">
                            <img src={items.image} id="person-img" alt="" />
                        </div>
                        <h4 id="author">{items.author}</h4>
                        <p id="job">{items.job}</p>
                        <p id="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                            asperiores debitis incidunt, eius earum ipsam cupiditate libero?
                            Iste, doloremque nihil?
                        </p>
                        <div className="button-container">
                            <button className="prev-btn">
                            <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="next-btn">
                            <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <button classNameName="random-btn">surprise me</button>
                        </article>
                    </section>
                </div>
            )
        })
    )    
}

export default Review ; 
