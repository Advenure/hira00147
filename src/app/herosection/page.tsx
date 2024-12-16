import Image from "next/image"
export default function HeroSection(){
    return(
        <div className="grid md:grid-cols-2 items-center md:gap-4 max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
        <p className=" font-bold text-4xl ">Hello I am <b className="font-bold text-4xl text-blue-600"> Hira </b></p><br/>
        <p className=" font-bold text-4xl">Web Developer and</p><br/>
        <p className=" font-bold text-4xl">student of Next.js</p> 
        </div>
        <div className="md:h-[470px]">
          <Image src={'/female port-pic.jpg'} alt="image" height={50} width={200} className="w-full h-full md:object-contain"></Image>
        </div>
      </div>
    )
}