import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const fetchChats = async () => {
        const data = await axios.get("/api/chats");
        console.log(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);

    return <div>Chats</div>
}

export default HomePage;