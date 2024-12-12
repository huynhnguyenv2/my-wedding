"use client"
import Image from "next/image"
import React, { useState } from "react"
import Modal from "react-modal"

const FILENAMES = [
  "NTR_0044.JPG",
  "NTR_0085.JPG",
  "NTR_0087.JPG",
  "NTR_0122.JPG",
  "NTR_0140.JPG",
  "NTR_0155.JPG",
  "NTR_0193.JPG",
  "NTR_0226.JPG",
  // "NTR_0266.JPG",
  // "NTR_0289.JPG",
  // "NTR_0295.JPG",
  // "NTR_0306.JPG",
  // "NTR_0320.JPG",
  // "NTR_0325.JPG",
  // "NTR_0330.JPG",
  // "NTR_0336.JPG",
  // "NTR_0343.JPG",
  // "NTR_8999.JPG",
  // "NTR_9003.JPG",
]

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    zIndex: 1000,
  },
}

function ImageZoomModal({
  openSrc,
  closeModal,
  alt,
}: {
  openSrc: string | null
  closeModal: () => void
  alt: string
}) {
  function handleClose() {
    closeModal()
  }

  return (
    <Modal
      isOpen={!!openSrc}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {openSrc && (
        <Image
          src={openSrc}
          alt={alt}
          layout="fill"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}

      <button
        onClick={handleClose}
        type="button"
        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150 absolute top-0 right-0"
        aria-label="Close"
      >
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
export default function OurPhotos() {
  const [openSrc, setOpenSrc] = useState<string | null>(null)
  const urls = FILENAMES.map((file: string) => `/images/${file}`)
  return (
    <section className="py-8">
      <div className="z-10">
        <h1 className="text-3xl">Our Photos</h1>
        <div className="grid grid-cols-4 mt-4 ">
          {urls.map((url: string, index: number) => (
            <div
              key={index}
              className="relative flex justify-center items-center cursor-pointer"
              onClick={() => setOpenSrc(url)}
            >
              <Image
                src={url}
                width={200}
                height={200}
                alt="An image"
                className=" w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="z-90">
        <ImageZoomModal
          openSrc={openSrc}
          closeModal={() => setOpenSrc(null)}
          alt="An image"
        />
      </div>
    </section>
  )
}
