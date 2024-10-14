import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css'

function Review(){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };

      return(
        <div className="ReviewConatiner">
        <div class="title">
          <h2>our reviews</h2>
          <div class="underline"></div>
        </div>
        <article class="review">
            <Slider {...settings}>
                <div className="Item">
                    <div class="img-container" style={{marginTop:"3px"}}>
                        <img src='Images/Client1.jpg' id="person-img" alt="" />
                    </div>
                    <h4 id="author">sara jones</h4>
                    <p id="job">ux designer</p>
                    <p id="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        asperiores debitis incidunt, eius earum ipsam cupiditate libero?
                        Iste, doloremque nihil?
                    </p>
                </div>

                <div className="Item">
                    <div class="img-container">
                        <img src="Images/Client2.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">sara jones</h4>
                    <p id="job">ux designer</p>
                    <p id="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        asperiores debitis incidunt, eius earum ipsam cupiditate libero?
                        Iste, doloremque nihil?
                    </p>
                </div>


                <div className="Item">
                    <div class="img-container">
                        <img src="Images/Client3.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">sara jones</h4>
                    <p id="job">ux designer</p>
                    <p id="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        asperiores debitis incidunt, eius earum ipsam cupiditate libero?
                        Iste, doloremque nihil?
                    </p>
                </div>
            </Slider>
        </article>
        </div>
      )
}
export default Review; 