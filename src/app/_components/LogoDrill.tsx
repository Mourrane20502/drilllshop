import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../assets/logo.png";
type LogoDrillProps = {
  classname?: string;
};
export const LogoDrill = ({ classname }: LogoDrillProps) => {
  return (
    <Image
      src={Logo}
      loading="lazy"
      alt="Drill Shop"
      className={cn(`w-12 h-12 rounded-3xl ml-5`, classname)}
    />
  );
};
