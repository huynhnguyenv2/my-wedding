"use client"
import React, { useState, useReducer, useEffect, useRef } from "react"
import Dropzone from "react-dropzone"
import dayjs from "dayjs"
import ChatService from "../../utils/firebases/chat"
import Heart from "@react-sandbox/heart"
export default function Greetings() {
  const chatServiceRef = useRef<ChatService>()

  useEffect(() => {
    if (typeof window === "undefined" || chatServiceRef.current) return
    chatServiceRef.current = new ChatService()
  }, [])

  const [values, dispatch] = useReducer(
    (
      state: { name: string; messageContent: string },
      action: { type: string; payload: string }
    ) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload }
        case "SET_MESSAGE":
          return { ...state, messageContent: action.payload }
        case "RESET":
          return { name: "", messageContent: "" }
        default:
          return state
      }
    },
    {
      name: "",
      messageContent: "",
    }
  )
  const { name, messageContent } = values

  const [messages, setMessages] = useState([] as any)
  useEffect(() => {
    if (typeof window === "undefined") return
    const lastQueryIndex = 0

    if (!chatServiceRef.current) return
    const { messagesQuery, onSnapshot } =
      chatServiceRef.current.getMessages(lastQueryIndex)

    const unsubscribe =
      typeof onSnapshot === "function" &&
      onSnapshot(messagesQuery, (snapshot: any) => {
        const messages = snapshot.docs.map((doc: any) => ({
          ...doc.data(),
          messageUID: doc.id,
        }))

        if (messages.length === 0) return

        setMessages(messages)
      })

    return () => {
      unsubscribe
    }
  }, [])

  function handleSubmit() {
    if (chatServiceRef.current) {
      chatServiceRef.current.createMessage({ message: messageContent, name })
    }

    setMessages([
      ...messages,
      {
        name,
        message: messageContent,
        date: new Date().toISOString(),
      },
    ])

    dispatch({ type: "RESET", payload: "" })
  }

  function handleUpload(files: File[]) {
    console.log(files)
  }

  return (
    <div className="py-8 px-4 sm:px-20 bg-gray-100 flex flex-col gap-4">
      <h2 className="font-bold text-3xl">Gửi lời chúc phúc:</h2>
      <div className="flex flex-col gap-4 w-full sm:w-full ">
        <div className="flex flex-col sm:flex-row items-start gap-2 font-bold">
          <label htmlFor="name" className="w-40">
            Tên or Biệt danh
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-2 h-12 w-full bg-main"
            value={name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 font-bold">
          <label htmlFor="message" className="w-40">
            Đôi lời nhắn nhủ
          </label>
          <textarea
            id="message"
            name="message"
            className="h-40 w-full p-2 bg-main"
            value={messageContent}
            onChange={(e) =>
              dispatch({ type: "SET_MESSAGE", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 font-bold hidden">
          <label htmlFor="message" className="w-40">
            Gửi ảnh kèm
          </label>
          {/* <p className="w-full">Upload</p> */}
          <div className="w-full flex">
            <Dropzone onDrop={handleUpload}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border rounded-full bg-black text-main px-4 py-2 cursor-pointer w-auto"
                >
                  <input {...getInputProps()} />
                  Upload
                </div>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="flex items-end gap-2 font-bold justify-end ">
          <button
            onClick={handleSubmit}
            className="border-x-[0.5px] border-y border-black px-8 py-2"
          >
            Send
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border p-4 bg-main">
        {messages.map((messageItem: any, index: number) => (
          <div key={index}>
            <MessageItem messageItem={messageItem} />
          </div>
        ))}
      </div>
    </div>
  )
}

function MessageItem({ messageItem }: any) {
  const [active, setActive] = useState(false)

  return (
    <div className="flex flex-col gap-2 font-white border-b border-dashed rounded py-2 border-gray-700">
      <div className="w-full flex justify-between">
        <span>
          <b>{!messageItem.name ? "Anonymous" : messageItem.name}:</b>{" "}
          {messageItem.message}
        </span>
        <Heart
          width={24}
          height={24}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
      <div className="w-full flex justify-between">
        <p className="italic font-bold w-full flex justify-end">
          {dayjs(messageItem.createdAt).format("MM-DD HH:mm")}
        </p>
      </div>
    </div>
  )
}
