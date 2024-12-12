import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-whisper text-[60px]">
        <Link href="/home">Hoang & Nguyen</Link>
      </h1>
      <div className="flex gap-4 items-center">
        <div className="">
          <Image
            src="/icons/king.png"
            width={40}
            height={40}
            alt="An image"
            className="rounded-full"
          />
        </div>
        <span className="text-2xl">&hearts;</span>
        <div className="">
          <Image
            src="/icons/queen.png"
            width={40}
            height={40}
            alt="An image"
            className="rounded-full"
          />
        </div>
      </div>
      {/* <ul className="flex justify-center text-3xl ">
        <li>&hearts;</li>
        <li>&hearts;</li>
        <li>&hearts;</li>
      </ul> */}
    </div>
  )
}
