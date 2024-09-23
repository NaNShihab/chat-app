// import React from 'react'
import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import Message from "./Message"
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {loading, messages} = useGetMessages()
  useListenMessages()
  const lastMessage = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({behavior: "smooth"})
    }, 100)
  }, [messages])
  return (
    <div className="px-4 flex-1 overflow-auto" key={Math.random()}>
      {loading && [...Array(5)].map(index => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center underline">To start the conversation send a message</p>
      )}
      {!loading && messages.length > 0 && messages.map(message => {
        return <div ref={lastMessage} key={message._id}><Message message={message} /></div>
      })}
    </div>
  )
}

export default Messages