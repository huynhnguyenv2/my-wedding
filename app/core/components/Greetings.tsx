"use client"
import React, { useState } from "react"
import Dropzone from "react-dropzone"
import dayjs from "dayjs"
export default function Greetings() {
  const greetingMessages = [
    {
      name: "Chong Wei",
      message:
        "Hello, I am Chong Wei. I am so happy to be here. Congratulations on your wedding!",
      date: "2022-01-01 12:00:00",
    },
    {
      name: "Anonymous",
      message: "Congratulations on your wedding!",
      date: "2022-01-01 12:00:00",
    },
    {
      name: "Kai",
      message: "Congratulations on your wedding! I wish you all the best!",
      date: "2022-01-01 12:00",
    },
  ]

  const [messages, setMessages] = useState(greetingMessages)

  const addMessage = (message: string, name: string) => {
    setMessages([
      ...messages,
      {
        name,
        message,
        date: new Date().toISOString(),
      },
    ])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    addMessage(
      formData.get("message") as string,
      formData.get("name") as string
    )
  }

  function handleUpload(files: File[]) {
    console.log(files)
  }

  return (
    <div className="py-8 px-4 sm:px-20 bg-gray-100 flex flex-col gap-4">
      <h2 className="font-bold text-3xl">Gửi lời chúc phúc:</h2>
      <div className="flex flex-col gap-4 w-full sm:w-1/2 ">
        <div className="flex items-start gap-2 font-bold">
          <label htmlFor="name" className="w-40">
            Tên or Biệt danh
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-12 w-full bg-main"
          />
        </div>
        <div className="flex items-start gap-2 font-bold">
          <label htmlFor="message" className="w-40">
            Đôi lời nhắn nhủ
          </label>
          <textarea
            id="message"
            name="message"
            className="h-40 w-full px-2 bg-main"
          />
        </div>
        <div className="flex items-start gap-2 font-bold ">
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
            className="border rounded-full bg-black text-main px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border p-4 bg-main">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col gap-2  p-4 font-white">
            <p className="italic">
              {dayjs(message.date).format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <p>
              {message.message} ({!message.name ? "Anonymous" : message.name})
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
