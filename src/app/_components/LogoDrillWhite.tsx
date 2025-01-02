import { cn } from "@/lib/utils"
import Image from "next/image"
import LogoWhite from "../assets/drilllogowhite.png"
type LogoDrillWhiteProps = {
    classname?: string
}
export const LogoDrillWhite = ({classname} :LogoDrillWhiteProps )=>{
    return(
            <Image src={LogoWhite} loading="lazy" alt="Drill Shop" className={cn(`w-12 h-12 rounded-3xl ml-5`,classname)} />
          
    )
}