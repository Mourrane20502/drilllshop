import Image from "next/image"
import Logo from "../assets/logo.png"
export const LogoDrill = ()=>{
    return(
            <Image src={Logo} loading="lazy" alt="Drill Shop" className="w-12 h-12 rounded-3xl ml-5" />
          
    )
}