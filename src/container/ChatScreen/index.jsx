import React from 'react'
import AsideBar from '../ChatComponents/AsideBar';
import ListiingCard from '../ChatComponents/ListiingCard';
import ChatBox from '../ChatComponents/ChatBox';

const ChatScreen = ({state}) => {
  return (
    <div className='flex gap-4 w-full'>
      <ListiingCard state={state} />
      <ChatBox />
    </div>
  )
}

export default ChatScreen;