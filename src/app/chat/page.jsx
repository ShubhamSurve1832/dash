'use client'
import React, { useState } from 'react'
import ChatScreen from '@/container/ChatScreen';
import CallScreen from '@/container/CallScreen';
import ChatAsideBar from '@/container/ChatComponents/AsideBar';

const Chat = () => {
    const [state, setState] = useState("Chat");
    return (
        <div className='flex gap-4'>
            <ChatAsideBar state={state} setState={setState} />
            {state === "Chat" && <ChatScreen state={state} />}
            {state === "Call" && <CallScreen state={state} />}
        </div>
    )
}

export default Chat;