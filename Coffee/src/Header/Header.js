import React, { useState } from "react";
import './style.css'
import { IoSearchSharp } from "react-icons/io5";
import {FaBars , FaTimes} from 'react-icons/fa'
import { styles , Data } from './data';
function Header(){
    const [show , setShow] = useState(false)
    let MenuSidebar = () => {
        setShow(!show)
    } 
    
    return(
        <header className={`${show ? "header_height" : ""}`}>
            <div className="logo">
                <img src="Images/logo.png" alt="" />
            </div>
            
            <div className="Navbar">
                <ul className={`${show ? "ul_display" : ""}`}>
                    {
                        Data.map(item => {
                            let {id,  title , ref} = item ;
                            return(
                                <li key={id}>
                                    <a href={ref}>{title}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a class="icon" href="">
                            <IoSearchSharp style={{fontSize:"30px" , marginTop:'3px'}}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="div_menu">
                <li className="menu_icon">
                        {
                            show ? <FaTimes style={styles} onClick={MenuSidebar}/> : <FaBars style={styles} onClick={MenuSidebar}/>
                        }
                </li>
            </div>
        </header>
    )
}


export default Header