import Image from "next/image"
import SearchIcon from "@/src/assets/icons/search.svg"

export type NavbarProps = {
  
}

export const Navbar = (props: NavbarProps) => {
  return (
    <div className="flex items-center justify-center bg-white w-full h-[var(--header-height)] rounded-b-lg shadow-lg sticky top-0">
        <Image src={"/15s.png"} alt="15Secondes" width={50} height={50}  />
        <Image src={SearchIcon} alt="Icone de recherche" width={25} height={25} className="absolute top-5 right-5"/>
    </div>
  )
}