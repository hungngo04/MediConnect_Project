import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get("/api/chat/");
        
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>Hone Page { chats.map }</div>
    )
}

export default HomePage;