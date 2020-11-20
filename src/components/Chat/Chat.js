import React, { useState, useEffect } from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import axios from "axios"

let socket;

function Chat({ location }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    useEffect(() => {
        axios.get('localhost:2727', {data: 'check'}).then(res => {
            console.log('check', res);
        })
        const { name, room } = queryString.parse(location.search)
        
        socket = io('localhost:5000')

        setName(name)
        setRoom(room)
        console.log(socket);
    },[])
    return (
        <div>
            Chat
        </div>
    )
}

export default Chat
