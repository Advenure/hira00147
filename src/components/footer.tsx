import Image from "next/image"
export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-12 px-4 font-sans tracking-wide">
        <div className="text-center">
          <h6 className="text-lg text-gray-300">Stay connected with us:</h6>
  
          <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
           
            <li>
              <Image src={'/image copy 4.png'} alt="image" height={10} width={200} ></Image>
            </li>
          </ul>
  
          <p className="text-base text-gray-300"> All rights reserved.</p>
        </div>
      </footer>
   
        
    )
}