"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Introduce() {
  const [state, setState] = useState({
    daysToEvent: 0,
    wifeDateText: "",
  })

  useEffect(() => {
    const wifeDate = new Date("2024-12-22")
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
    <section className="flex justify-center relative h-[100vh]">
      <Image
        src="/images/12.JPG"
        layout="fill"
        objectFit="cover"
        alt="An image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute z-0  "
        loading="eager"
      />

      <div className="flex flex-col justify-end text-center z-10 font-bold text-red-900 opacity-90 mb-20">
        <h1 className="text-3xl sm:text-4xl mb-2 ">
          {daysToEvent > 0
            ? `${daysToEvent} DAYS TO THE EVENT`
            : "THE DAY HAS COME"}
        </h1>
        <h2 className="font-whisper text-[42px] sm:text-[92px] mb-2">
          We&apos;re getting married
        </h2>
        <p className="text-2xl text-3xl mb-2">{wifeDateText}</p>
      </div>
    </section>
  )
}
