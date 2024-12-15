import Image from "next/image"
export default function Reception() {
  return (
    <section className="py-8 sm:px-20 flex flex-col gap-4 ">
      <div className="w-full gap-16 sm:gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-4 col-span-1 px-4 sm:px-0">
          <div className="">
            <h1 className="text-3xl">Reception</h1>
          </div>
          <div className="text-center flex flex-col justify-center h-full gap-4 col-span-1">
            <p className="w-1/2 mx-auto my-8">
              Join us for drinks, dinner, and dancing as we celebrate our new
              life together. We can't wait to see you there!
            </p>
            {/* view map */}
            <div className="flex justify-center">
              <button
                className="bg-none border-x-[0.5px] border-y border-black px-12 py-2 text-lg "
                onClick={() => {
                  // window.location.href =
                  //   "https://maps.app.goo.gl/v9bKHYPa9YCZXjhi8"
                  window.open(
                    "https://maps.app.goo.gl/v9bKHYPa9YCZXjhi8",
                    "_blank"
                  )
                }}
              >
                VIEW MAP
              </button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4 col-span-1">
            <div className="col-span-2">
              <Image
                src="/images/1.JPG"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Image
                src="/images/2.JPG"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 col-span-1">
            <div className="col-span-1">
              <Image
                src="/images/4.jpg"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/images/5.JPG"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
