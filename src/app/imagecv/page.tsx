import Image from "next/image"
export default function ImageCV(){
    return(
        <div  className="place-items-center  mt-2 mb-4 h-[90vh] justify-center">
            <Image src={'/WhatsApp Image 2024-12-06 at 14.21.21_c6bce1c4.jpg'} alt="ImageCV" height={150} width={300}></Image>
        </div>
    )
}