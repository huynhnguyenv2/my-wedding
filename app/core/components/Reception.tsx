import Image from "next/image"
export default function Reception() {
  return (
    <section className="py-8 sm:px-40 flex flex-col gap-4 ">
      <div className="w-full gap-16 sm:gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-4 col-span-1 px-4 sm:px-0">
          <div className="">
            <h1 className="text-3xl font-bold">Lời cầu hôn</h1>
          </div>
          <div className=" flex flex-col h-full gap-4 col-span-1">
            <p className="text-md my-4">
              Nhận được lời cầu hôn vào một ngày đẹp trời dưới sự chứng kiến của
              má Chi tại Sài Gòn, hơn hẳn những câu nói ngôn tình em từng mong
              đợi trước đó, việc anh đầy trân trọng và "hồi hộp, căng thẳng",
              thật sự rất động lòng hehe… Và, trên hết, câu nói "anh muốn chăm
              sóc em: cùng sự kiên định của anh về việc rời Sài Gòn để về cạnh
              em, hơn tất thẩy những gì anh từng nói trước đó, từ ngày "có" anh,
              em thật sự được yêu thương, chăm nom và lắng lo nhiều. Yêu và được
              yêu nó "chill" như đúng người đúng thời điểm vậy, rất hân hạnh trở
              thành "cuộc đời" nhau! Biết ơn vì cuộc đời sau này luôn có anh,
              yêu &hearts; <br />
              <p className="text-md">*Lời kể từ dợ Neil*</p>
              {/* gất sến 🙂 but thật lòng */}
            </p>
            <p>
              Hôm đó anh thật sự rất hồi hộp và bối rối, anh đã lên kế hoạch từ
              lâu nhưng khi đến ngày thì anh vẫn cảm thấy rất căng thẳng. Anh
              nhớ lúc đó, tay anh run run, giọng anh nghẹn lại, mặt anh đỏ cả
              lên nhưng điều duy nhất anh biết lúc ấy là: "Anh yêu em, và anh
              muốn dành cả cuộc đời còn lại bên em." Câu hỏi thì đơn giản thôi,
              nhưng anh nghĩ, đó là khoảnh khắc quan trọng nhất trong cuộc đời
              anh. <br />
              Cảm ơn em vì đã said "YES", và cảm ơn em vì đã yêu anh. Anh chỉ
              mong rằng, dù có thế nào, chúng ta sẽ cùng nhau đi qua hết những
              khoảnh khắc vui buồn trong cuộc sống này, và anh sẽ luôn là người
              sẵn sàng ở bên em, dù lúc vui hay lúc khó khăn.
              <p className="text-md">*Lời kể từ chồng bé Nguyên*</p>
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
