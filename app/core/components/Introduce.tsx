import Image from "next/image"

function getDaysToEvent() {
  const daysToEvent = new Date("2025-1-5").getTime() - new Date().getTime()
  return Math.ceil(daysToEvent / (1000 * 60 * 60 * 24))
}

export default function Introduce() {
  const daysToEvent = getDaysToEvent()

  return (
    <section className="flex justify-center relative h-screen">
      <Image
        src="/images/NTR_0044.JPG"
        layout="fill"
        objectFit="cover"
        alt="An image"
        className="absolute z-0"
      />

      <div className="flex flex-col justify-center text-center z-10 font-bold text-white opacity-80">
        <h1 className="text-4xl mb-2 ">{daysToEvent} DAYS TO THE EVENT</h1>
        <h2 className="font-whisper text-[92px] mb-2">We're getting married</h2>
        <p className="text-3xl mb-2">January 5th, 2025</p>
        <div>
          <button className="bg-black text-3xl text-main px-8 py-3 rounded-full mt-4">
            RSVP
          </button>
        </div>
      </div>
    </section>
  )
}
