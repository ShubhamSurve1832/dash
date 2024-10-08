import React from 'react'
import ChatAsideBar from '../ChatComponents/AsideBar';
import ListiingCard from '../ChatComponents/ListiingCard';
import ChatBox from '../ChatComponents/ChatBox';
import CallBox from '../ChatComponents/CallBox';

const CallScreen = () => {
    return (
        <div className='flex gap-4 w-full'>
            <ListiingCard />
            <CallBox />
        </div>
    )
}

export default CallScreen;