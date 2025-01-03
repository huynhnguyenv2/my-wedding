"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Introduce() {
  const [state, setState] = useState({
    daysToEvent: 0,
    wifeDateText: "",
  })

  useEffect(() => {
    const wifeDate = new Date("2025-1-5")
    const now = new Date()
    const diff = Math.ceil(
      (wifeDate.getTime() - now.getTime()) / (1000 * 3600 * 24)
    )
    const wifeDateText = wifeDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    setState({ daysToEvent: diff, wifeDateText })
  }, [])

  const { daysToEvent, wifeDateText } = state
  return (
    <section className="flex justify-center relative ">
      <div className="relative w-full h-auto flex flex-col">
        <Image
          src="/images/12.JPG"
          width={1920}
          height={1080}
          alt="An image"
          className="z-0 object-cover w-full h-auto sm:h-[90vh]"
          loading="eager"
        />
      </div>
      <div className="absolute bottom-0 flex flex-col justify-end text-center z-10 font-bold text-red-900 opacity-90 mb-20 sm:mb-80">
        <h1 className="text-3xl sm:text-4xl mb-2 ">
          {daysToEvent > 0
            ? `${daysToEvent} DAYS TO THE EVENT`
            : "THE DAY HAS COME"}
        </h1>
        <h2 className="font-whisper text-[42px] sm:text-[92px] mb-2">
          We&apos;re getting married
        </h2>
        <p className="text-2xl text-3xl mb-2">January 5, 2025</p>
      </div>
    </section>
  )
}
