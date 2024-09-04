import React from "react";
import './suggest.css'

function Suggest(){
    return(
        
        <div class="main_fourth">
            <div className="border_keeper">
                <h1>Services</h1>
                <p class="text_title">Typesetting industry lorem Ipsum is simply dummy text of the</p>
                <div class="card_postals">
                    <div class="header_top_card">
                        <div class="postal_image" style={{marginTop:"47px"}}>
                            <img src="Images/icon1.png" width="70px" alt="" />
                        </div>
                        <h2>Original Coffee</h2>
                        <p>
                            Exerci tation ullamcorper suscipit labortis nisl ut aliquip ex ea
                        </p>
                        <div class="div_button_postal">
                            <button class="button_display_postal">Read More</button>

                        </div>

                    </div>
                    <div class="header_top_card">
                        <div class="postal_image">
                            <img src="Images/icon2.png" width="70px" alt="" />
                        </div>
                        <h2>20 Coffee Flavours</h2>
                        <p>
                            Exerci tation ullamcorper suscipit labortis nisl ut aliquip ex ea
                        </p>
                        <div class="div_button_postal">
                            <button class="button_display_postal">Read More</button>

                        </div>

                    </div>
                    <div class="header_top_card">
                        <div class="postal_image">
                            <img src="Images/icon3.png" width="70px" alt="" />
                        </div>
                        <h2>Pleasant Abient</h2>
                        <p>
                            Exerci tation ullamcorper suscipit labortis nisl ut aliquip ex ea
                        </p>
                        <div class="div_button_postal">
                            <button class="button_display_postal">Read More</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Suggest