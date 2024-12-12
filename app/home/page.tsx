import Image from "next/image"
import React from "react"
import Header from "../core/components/Header"
import Direction from "../core/components/Direction"
import Greetings from "../core/components/Greetings"
import OurPhotos from "../core/components/OurPhotos"
import Registry from "../core/components/Registry"
import Introduce from "../core/components/Introduce"
import DefaultPopup from "../core/components/DefaultPopup"
function Footer() {
  return (
    <footer className="flex justify-center items-center bg-[#f5f5f5] p-4">
      <p>
        Made with lots of <span>❤️</span> by{" "}
        <a href="https://facebook.com">
          <b>chong be Nguyen</b>
        </a>
        . Don't forget to{" "}
        <a href="https://github.com">
          <b>rsvp</b>!
        </a>
      </p>
    </footer>
  )
}
export default function Home() {
  return (
    <div className="bg-main">
      <Header />
      <div className=" sm:px-20">
        <Introduce />
      </div>
      <Registry />
      <div className=" sm:px-20">
        <OurPhotos />

        {/* <Direction /> */}
      </div>
      <Greetings />
      <Footer />
      <DefaultPopup />
    </div>
  )
}
