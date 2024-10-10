import Image from "next/image";

export default function Furniro() {
  return (
    <main className="bg-cover bg-center min-h-full md:h-auto lg:h-auto flex justify-center" style={{ backgroundImage: "url('/furnirofurniturebg-img.png')" }}>
      <div className="">

        <div className="text-center py-20">
          <p className="font-semibold text-white py-1">Share your setup with</p>
          <h3 className="text-4xl font-semibold">#FurniroFurniture</h3>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 py-10 px-3">
          <div className="...">
            <Image
              src="/furniro-img1.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

          <div className="...">
            <Image
              src="/furniro-img2.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

          <div className="...">
            <Image
              src="/furniro-img3.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

          <div className="...">
            <Image
              src="/furniro-img4.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

          <div className="...">
            <Image
              src="/furniro-img5.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

          <div className="...">
            <Image
              src="/furniro-img1.png"
              height={200}
              width={200}
              alt="Slide 5"
              className="w-[320px] h-[300px] rounded-lg"
            />
          </div>

        </div>
      </div>
    </main>
  )
}
