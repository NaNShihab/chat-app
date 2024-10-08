// import React from 'react'
import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bgColor = fromMe ? "bg-blue-500" : "";
  const exactTime = extractTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
        alt="Tailwind CSS chat bubble component"
        src={profilePicture} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bgColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{exactTime}</div>
    </div>
  )
}

export default Message