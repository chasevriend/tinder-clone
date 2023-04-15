import React, {useState} from "react";
import './ChatsScreen.css'
import { Avatar } from "@mui/material";
import Header from "./Header"

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Margot",
            image: "https://www.onthisday.com/images/people/margot-robbie-medium.jpg",
            message: "hey let's hang out"
        },
        {
            message: "bet I'll pick you up at 7"
        },
        {
            name: "Margot",
            image: "https://www.onthisday.com/images/people/margot-robbie-medium.jpg",
            message: "Hey! I had a great time yesterday 🫶"
        },
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }
    
    return(
        <div className="chatScreen">
            <Header backButton="/chats"/>
            <p className="chatScreen__timestamp">YOU MATCHED WITH MARGOT ON 04/09/2023</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <div>
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..." 
                        type="text" 
                    />
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;