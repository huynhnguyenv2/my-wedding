"use client"
import React from "react"
import Header from "../../core/components/Header"
import Greetings from "../../core/components/Greetings"
import OurPhotos from "../../core/components/OurPhotos"
import Registry from "../../core/components/Registry"
import Introduce from "../../core/components/Introduce"
import DefaultPopup from "../../core/components/DefaultPopup"
import Snowfall from "react-snowfall"
import Reception from "../components/Reception"

function Footer() {
  return (
    <footer className="flex justify-center items-center bg-[#f5f5f5] p-4 text-center">
      <p>
        Made with lots of <span>❤️</span> by{" "}
        <a href="mailto:hoangphamkhanh97@gmail.com">
          <b>chong be Nguyen</b>
        </a>
        .
      </p>
    </footer>
  )
}
export default function Home() {
  return (
    <div className="bg-main relative">
      <Snowfall
        snowflakeCount={500}
        style={{ zIndex: 9999 }}
        speed={[3, 3]}
        changeFrequency={10}
      />

      <Header />
      <div className="sm:px-40 pb-8">
        <Introduce />
      </div>
      <Registry />
      <Reception />
      <div className="sm:px-40">
        <OurPhotos />
      </div>
      <Greetings />
      <Footer />
      <DefaultPopup />
    </div>
  )
}
