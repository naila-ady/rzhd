import Image from "next/image";
import img from "../../../public/assets/heroimage.webp";
import { Heebo } from "next/font/google";
import { Button } from "@/components/ui/button"




const heebo = Heebo({subsets:['latin']})

export default function Hero() {
    return (
      <div className=" w-[auto] p-6 md:w-[1030px] md:h-[400px] mx-auto flex flex-col-reverse
       md:flex-row item-center justify-between">
        {/* text div */}
        <div className="md:w-[512px] md:w-[412px] md:h-[305px] flex flex-col gap-2 md:justify-between
         items-start sm:justify-evenly ">
          <h1 className={`${heebo.className} sm:text-[28px] md:text-[48px] text-mypink font-bold`}>TRENDY TREADS<br/>Walk and Carry!</h1>
        <p className={`${heebo.className} text-[18px] font-normal text-myblack`}>Step into elegance with our stunning collection of **fancy sandals** and **luxury bags**.
           Perfectly crafted to elevate any outfit, our sandals offer comfort with style,
            while our bags add a touch of sophistication to every look.
             Discover the perfect blend of fashion and function today!</p>
             <Button variant="destructive" className={`${heebo.className} text-[16px] font-medium
             text-white bg-mypink w-[205px] h-[50px] mt-5  rounded-sm shadow-md shadow-black/50`}>Shop Now</Button>

        </div>
        <div>
          {/* image div */}
        <div className="w-[500px] h-[400px] relative">
            <Image src={img} alt={"heroimage"} width={500} height={500}/>
            <div className="bg-heroeclipse w-[490px] h-[204px] absolute -z-10 top-2 right-2"></div>

            </div>
        
        </div>
    
  
      </div>
    );
  }
  