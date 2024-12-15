import Image from "next/image"
import dayjs from "dayjs"

export default function Introduce() {
  const wifeDate = "12-22-2024"
  function getDaysToEvent() {
    const now = dayjs()
    const eventDate = dayjs(wifeDate, "DD/MM/YYYY")
    const event = dayjs(eventDate)
    const diff = event.diff(now, "day")
    return diff
  }

  const daysToEvent = getDaysToEvent()

  const wifeDateText = dayjs(wifeDate).format("MMMM D, YYYY")
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
