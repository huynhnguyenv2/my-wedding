import Direction from "./Direction"
import Image from "next/image"
export default function Registry() {
  return (
    <>
      <section className="py-8 sm:px-40 flex flex-col gap-4 px-4 sm:px-0">
        <div className="">
          <h1 className="text-3xl font-bold">Di đeo</h1>
        </div>
        <div className="flex w-full gap-4">
          {/* https://www.youtube.com/watch?v=zDudqXvHz_0 */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zDudqXvHz_0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[40dvh]"
          ></iframe>
        </div>
      </section>
      <section className="py-8 sm:px-40 flex flex-col gap-4 px-4 sm:px-0">
        <div className="">
          <h1 className="text-3xl font-bold">Our Sì to ri</h1>
        </div>
        <div className="flex w-full gap-4">
          <p>
            Triệu hạt mưa rơi, không hạt nào rơi nhầm chỗ. Những người ta gặp,
            không người nào là ngẫu nhiên! Găp được nhau và yêu nhau ở thời điểm
            cả hai đều tin vào bản thân đủ sẵn sàng để dựng xây một gia đình nhỏ
            cho riêng mình, đối với tụi mình đó là một điều hơn cả mong đợi… Rất
            sến súa nhưng tụi mình luôn nói về sự xuất hiện của đối phương như
            một điều may mắn đến tận bây giờ… Và khi nhìn thấy những lần đầu
            tiên đều “trộm vía” suôn sẻ, tụi mình tự tin hơn với quyết định lớn
            hơn của cuộc đời. Vì đâu đó có câu: kết hôn là lần duy nhất chúng ta
            được chọn “người nhà”, nên là, trộm vía bây giờ và hi vọng cả sau
            này, chúng mình thật sự hạnh phúc khi trở thành người nhà của nhau.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="gap-4 col-span-2">
            <Image
              src="/images/4.jpg"
              width={400}
              height={400}
              alt="An image"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
