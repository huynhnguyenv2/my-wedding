import Image from "next/image"
export default function Menu() {
  return (
    <section className="py-8 sm:px-40 flex flex-col gap-4 bg-main ">
      <div className="w-full gap-16 sm:gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-4 col-span-1 px-4 sm:px-0">
          <div className="">
            <h1 className="text-3xl font-bold">Menu</h1>
          </div>
          <div className="text-center flex flex-col justify-center h-full gap-4 col-span-1">
            <div>
              <p className="text-2xl font-bold">Khai vị</p>
              <p className="text-lg">- Spring Rolls</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Món chính</p>
              <p className="text-lg">- Grilled Salmon</p>
              <p className="text-lg">- Beef Steak</p>
              <p className="text-lg">- Chicken Salad</p>
              <p className="text-lg">- Vegetarian Pasta</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Tráng miệng</p>
              <p className="text-lg">- Chocolate Cake</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Drinks</p>
              <p className="text-lg">- Bia</p>
              <p className="text-lg">- Coca Cola</p>
              <p className="text-lg">- Nước suối</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          ///image here
          {/* <div className="grid grid-cols-2 gap-4 col-span-1">
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
          </div> */}
        </div>
      </div>
    </section>
  )
}
