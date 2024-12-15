"use client"
import React from "react"
import Header from "../../core/components/Header"
import Greetings from "../../core/components/Greetings"
import OurPhotos from "../../core/components/OurPhotos"
import Registry from "../../core/components/Registry"
import Introduce from "../../core/components/Introduce"
import DefaultPopup from "../../core/components/DefaultPopup"
import Direction from "../../core/components/Direction"
import Snowfall from "react-snowfall"
import Reception from "../components/Reception"
function Footer() {
  return (
    <footer className="flex justify-center items-center bg-[#f5f5f5] p-4 text-center">
      <p>
        Made with lots of <span>❤️</span> by{" "}
        <a href="https://facebook.com">
          <b>chong be Nguyen</b>
        </a>
        .<br className="sm:hidden" /> Don&apos;t forget to{" "}
        <a href="https://github.com">
          <b>rsvp</b>!
        </a>
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
        // speed={[3, 3]}
        changeFrequency={10}
      />

      <Header />
      <div className=" sm:px-20">
        <Introduce />
      </div>
      <Reception />
      <Registry />
      <div className=" sm:px-20">
        <OurPhotos />
      </div>
      {/* <div className=" sm:px-20">
        <Direction />
      </div> */}
      <Greetings />
      <Footer />
      <DefaultPopup />
    </div>
  )
}
