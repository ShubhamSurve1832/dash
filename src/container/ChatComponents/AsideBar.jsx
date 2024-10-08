import ChatIcon from '@/images/icons/ChatIcon';
import PhoneIcon from '@/images/icons/PhoneIcon';
import React from 'react'

const ChatAsideBar = ({state , setState}) => {
  return (
    <div className='bg-[#FFFFFF] w-20 flex flex-col items-center gap-10 py-10 h-[90vh] '>
        <div className='cursor-pointer' onClick={() => setState("Chat")}>
            <ChatIcon ratio='32'  />
        </div>
        <div className='cursor-pointer' onClick={() => setState("Call")}>
            <PhoneIcon ratio='32'  />
        </div>
    </div>
  )
}

export default ChatAsideBar;  