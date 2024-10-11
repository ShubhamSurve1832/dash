import React from 'react'
import AsideBar from './ChatComponents/AsideBar';
import ListiingCard from './ChatComponents/ListiingCard';
import ChatBox from './ChatComponents/ChatBox';

const ChatScreen = () => {
  return (
    <div className='flex gap-4'>
      <AsideBar />
      <ListiingCard />
      <ChatBox />
    </div>
  )
}

export default ChatScreen;