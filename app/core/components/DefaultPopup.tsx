"use client"
import React, { useState } from "react"
import Modal from "react-modal"

export default function DefaultPopup() {
  const [isOpen, setIsOpen] = useState(false)
  function handleClose() {
    setIsOpen(false)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="relative h-full">
        <iframe
          src={"https://www.youtube.com/embed/AdrOBcLLhJ8?autoplay=1&mute=1"}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
          title="Embedded youtube"
          className="w-full h-full"
        ></iframe>
      </div>
      <button
        onClick={handleClose}
        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150 absolute top-0 right-0"
        aria-label="Close"
      >
        {" "}
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Modal>
  )
}
