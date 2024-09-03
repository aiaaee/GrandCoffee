import React from "react";
import './Gallery.css'

function Gallery(){
    return(
        <div class="main_third">
            <div class="Upper_text">
                <h1>Our Gallery </h1>
                <p>
                    Coffee does more than boost your energy. A few daily cups of coffee may also lower your risk of type 2 diabetes and depression, support weight management.and help you live a longer life. Just keep in mind that experts recommend limiting caffeine if you’re pregnant or nursing.
                </p>
            </div>
            <div class="pictures_browser">
                <div class="first_column">
                    <div class="column_position">
                        <img src="Images/Untitled-1-7.jpg" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    <div class="column_position">
                        <img src="Images/img-2.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    <div class="column_position">
                        <img src="Images/img-3.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                </div>
                <div class="first_column">
                    <div class="column_position">
                        <img src="Images/img-4.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    <div class="column_position">
                        <img src="Images/img-5.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    <div class="column_position">
                        <img src="Images/img-6.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                </div>
                <div class="first_column">
                    <div class="column_position">
                        <img src="Images/img-7.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    <div class="column_position">
                        <img src="Images/img-8.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div> 
                    <div class="column_position">
                        <img src="Images/img-9.png" width="100%" height="350px" /> 
                            <div class="text">
                                <a href="#">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                </div>
                <center>
                    <button class="pictures_browser_button">See more</button>
                </center>
            </div>
        </div>
    )
}


export default Gallery ;