import React , {useState} from "react";
import './gallery.css'
import { IoSearchSharp } from "react-icons/io5";

function Gallery(){

    const [result, setResult] = useState("");

    const fetchImage = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=gNYoN-Lb_a6htizxkrg0A00SDG6TJIWmfTFqmP5suyA&query=Coffee`)
        .then(res => res.json())
        .then(data => {
          setResult(data.results)
        })
        .catch(err => console.log(err))

    }
    return(
        <div className="main_third">
            <div className="Upper_text">
                <h1>Our Gallery </h1>
                <p>
                    Coffee does more than boost your energy. A few daily cups of coffee may also lower your risk of type 2 diabetes and depression, support weight management.and help you live a longer life. Just keep in mind that experts recommend limiting caffeine if you’re pregnant or nursing.
                </p>
            </div>
            <div className="pictures_browser">
                
                <div className="first_column">
                    <div className="column_position">
                        <img src="Images/Untitled-1-7.jpg" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                    <div className="column_position">
                        <img src="Images/img-2.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                    <div className="column_position">
                        <img src="Images/img-3.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="first_column">
                    <div className="column_position">
                        <img src="Images/img-4.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                    <div className="column_position">
                        <img src="Images/img-5.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                    <div className="column_position">
                        <img src="Images/img-6.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="first_column">
                    <div className="column_position">
                        <img src="Images/img-7.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                    <div className="column_position">
                        <img src="Images/img-8.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true" style={{left:'40%'}}>
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div> 
                    <div className="column_position">
                        <img src="Images/img-9.png" width="100%" height="350px" /> 
                            <div className="text">
                                <a href="#">
                                    <i className="fa fa-search" aria-hidden="true">
                                        <IoSearchSharp/>
                                    </i>
                                </a>
                            </div>
                    </div>
                </div>
                {
                result? 
                    result.map((item) => 
                    <img key={item.id} src={item.urls.regular} alt="" />
                    )
                    : <div className="text-danger text-center">Please try to connect VPN</div>
                }
                



                <center>
                    <button className="pictures_browser_button" onClick={fetchImage}>See more</button>
                </center>
            </div>
        </div>
    )
}


export default Gallery ;