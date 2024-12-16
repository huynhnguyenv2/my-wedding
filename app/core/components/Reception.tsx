import Image from "next/image"
export default function Reception() {
  return (
    <section className="py-8 sm:px-40 flex flex-col gap-4 ">
      <div className="w-full gap-16 sm:gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-4 col-span-1 px-4 sm:px-0">
          <div className="">
            <h1 className="text-3xl font-bold">Lời tỏ tình</h1>
          </div>
          <div className="text-center flex flex-col justify-center h-full gap-4 col-span-1">
            <p className="w-1/2 mx-auto my-8">
              /// Lời tỏ tình của chú rể cho cô dâu thông qua lời kể của cô dâu
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4 col-span-1">
            <div className="col-span-2">
              <Image
                src="/images/IMG_9934.jpg"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <Image
                src="/images/IMG_9934.jpg"
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
                src="/images/IMG_9934.jpg"
                width={400}
                height={400}
                alt="An image"
                className=""
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/images/IMG_9934.jpg"
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
