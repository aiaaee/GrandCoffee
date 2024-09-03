import React , {useState} from "react"
import './about.css'
function About(){
    const [show , setShow] = useState(false)
    const ShowMore = () => {
        setShow(!show)
    }
    return(
        <div className="main_second" >
            <div className="main_second_left">
                <div className="main_second_left_ext">
                    <h2>ABOUT US</h2>
                    <p>
                    Full cleaning and housekeeping services for companies and households.
                    {
                        show ? <div className="fs-1">...</div> : ""
                    }
                    </p> 
                    <p>
                        <span className={!show? "show_more" : ""}>In fact, many people depend on their daily cup of joe right when they wake up to get their day started on the right foot.</span>
                    </p>
                    <button onClick={ShowMore}>{
                        show? <span>Read More</span>  : <span className="text-white">Read Less</span>
                    }</button>
                </div>
            </div>
            <div className="main_second_right">
                <img src="Images/about-img.png" alt="" />
            </div>
        </div>
    )
}

export default About ; 