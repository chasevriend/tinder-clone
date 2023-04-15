import React from "react";
import Header from "./Header";
import Chat from "./Chat";
import "./Chats.css"

function Chats() {
    return(
        <div className="chats">
            <Header backButton="/"/>
            <Chat 
                name="Margot"
                message="Hey! I had a great time yesterday 🫶"
                timestamp="22 minutes ago"
                profilePic="https://www.onthisday.com/images/people/margot-robbie-medium.jpg"
            />
            <Chat 
                name="Elastigirl"
                message="You're Mr. More Incredible ❤️"
                timestamp="41 minutes ago"
                profilePic="https://cdn.mos.cms.futurecdn.net/N3Xe5axewkzfVVzaBhRMNT.jpg"
            />
            <Chat 
                name="Kylie"
                message="Hey! I miss you 🥹"
                timestamp="59 minutes ago"
                profilePic="https://images.hola.com/us/images/025b-0ee1f76950cc-2880409e9bf0-1000/horizontal-1150/kylie-jenner-with-tan-lipstick-and-her-hair-down.jpg"
            />
            <Chat 
                name="Zendaya"
                message="Heyy"
                timestamp="2 days ago"
                profilePic="https://media.glamourmagazine.co.uk/photos/63fc99bb3ca80ea44878250d/16:9/w_1920,h_1080,c_limit/ZENDAYA%20NAACP%20270223%20default-GettyImages-1469620256.jpg"
            />
            <Chat 
                name="Sandy"
                message="Please respond 🥲"
                timestamp="5 days ago"
                profilePic="https://cdn.shopify.com/s/files/1/0150/0643/3380/products/Viacom_Spongebob_Tote_Printful_SBSP-SBF-PT_Image03_800x.jpg?v=1583786197"
            />
            <Chat 
                name="Emma"
                message="How are you?"
                timestamp="1 week ago"
                profilePic="https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg"
            />
        </div>
    )
}

export default Chats;