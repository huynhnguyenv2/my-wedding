"use client"
import Image from "next/image"
import React, { useState } from "react"
import Modal from "react-modal"
import useResizeListener from "../../hooks/useResizeListener"

const FILENAMES = [
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.jpg",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.jpg",
  "9.JPG",
  "10.jpg",
  "11.JPG",
  "12.JPG",
]

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    width: "90%",
    height: "90%",
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
        <div className="relative h-full">
          <Image
            src={openSrc}
            alt={alt}
            layout="fill"
            loading="eager"
            className="object-cover w-full h-full"
          />
        </div>
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
  const urls = FILENAMES.map((filename) => `/images/${filename}`)

  const { mobileView } = useResizeListener({})

  return (
    <section className="py-8">
      <div className="z-10">
        <h1 className="text-3xl">Những bức hình xinh xẻo</h1>
        <div className=" px-4 sm:px-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 mt-4 gap-4">
            {urls
              .slice(0, mobileView ? 3 : 4)
              .map((url: string, index: number) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center cursor-pointer col-span-1"
                  onClick={() => setOpenSrc(url)}
                >
                  <Image
                    src={url}
                    width={200}
                    height={200}
                    alt="An image"
                    className=" w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
            {urls
              .slice(mobileView ? 3 : 4, mobileView ? 5 : 7)
              .map((url: string, index: number) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center cursor-pointer col-span-1"
                  onClick={() => setOpenSrc(url)}
                >
                  <Image
                    src={url}
                    width={200}
                    height={200}
                    alt="An image"
                    className=" w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 mt-4 gap-4">
            {urls
              .slice(mobileView ? 5 : 7, mobileView ? 8 : 11)
              .map((url: string, index: number) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center cursor-pointer col-span-1"
                  onClick={() => setOpenSrc(url)}
                >
                  <Image
                    src={url}
                    width={200}
                    height={200}
                    alt="An image"
                    className=" w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
            {urls
              .slice(mobileView ? 3 : 4, mobileView ? 5 : 7)
              .map((url: string, index: number) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center cursor-pointer col-span-1"
                  onClick={() => setOpenSrc(url)}
                >
                  <Image
                    src={url}
                    width={200}
                    height={200}
                    alt="An image"
                    className=" w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
          </div> */}
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
