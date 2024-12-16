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
      contentLabel="Cảm ơn"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "40rem",
          width: "100%",
          maxHeight: "100dvh",
        },
      }}
    >
      <div className="text-xl bg-main p-4 ">
        <h2 className="text-2xl font-bold text-center mb-2">Lời Cảm Ơn</h2>
        <p className="">
          Hôm nay là một ngày vô cùng đặc biệt đối với 2 vợ chồng con/em – ngày
          mà hai trái tim trở thành một, cùng nhau bước vào một hành trình mới
          đầy yêu thương và hạnh phúc. Con/em muốn dành những lời cảm ơn chân
          thành nhất đến tất cả các bạn, những người đã đến chia vui và chúc
          phúc cho 2 vợ chồng con/em.
        </p>
        <p className="">
          Đặc biệt, con/em muốn cảm ơn gia đình hai bên đã luôn yêu thương, chăm
          sóc và là nguồn động viên to lớn để 2 vợ chồng con/em có thể đứng vững
          và quyết tâm cùng nhau xây dựng tương lai. Cảm ơn bố mẹ, những người
          đã dành cả đời hy sinh vì con/em, dạy con/em biết yêu thương và tôn
          trọng.
        </p>
        <p className="">
          Cảm ơn bạn bè, người thân đã không quản ngại đường xá xa xôi, dành
          thời gian quý báu đến chung vui và sẻ chia niềm hạnh phúc trong ngày
          trọng đại này. Con/em cảm thấy vô cùng may mắn khi có các bạn bên
          cạnh.
        </p>
        <p className="">
          Ngày hôm nay sẽ không thể hoàn hảo nếu thiếu sự hiện diện và sự yêu
          thương của các bạn. Con/em xin hứa sẽ cùng nhau gìn giữ, phát triển
          tình yêu này, và mong rằng mỗi khi nhìn lại ngày hôm nay, các bạn sẽ
          luôn nhớ về những khoảnh khắc vui tươi và ấm áp mà chúng ta đã cùng
          chia sẻ.
        </p>
        <p className="">
          Một lần nữa, xin chân thành cảm ơn và chúc tất cả mọi người sức khỏe,
          hạnh phúc và thành công trong cuộc sống!
        </p>
        <p className="text-right font-bold">Huy Hoàng & Phương Nguyên</p>
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
