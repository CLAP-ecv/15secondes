"use client"
import Image from "next/image"
import SearchIcon from "@/src/assets/icons/search.svg"
import Cross from "@/src/assets/icons/cross.svg"
import { useState } from "react"
import { SearchBar } from "./searchbar"

export type NavbarProps = {

}

export const Navbar = (props: NavbarProps) => {

  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false)

  return (
    <nav className="flex items-center justify-center bg-white w-full h-[var(--header-height)] rounded-b-lg shadow-lg sticky top-0">
      <Image src={"/15s.png"} alt="15Secondes" width={50} height={50} className="z-10" />

      <button onClick={() => setIsSearchBarOpened(!isSearchBarOpened)}>
        {isSearchBarOpened ? (
          <Image src={Cross} alt="Icone de recherche" width={25} height={25} className="absolute top-5 right-5" />
        ) : (
          <Image src={SearchIcon} alt="Icone de recherche" width={25} height={25} className="absolute top-5 right-5" />
        )
        }

      </button>

      {isSearchBarOpened &&
        <SearchBar close={() => setIsSearchBarOpened(false)} />
      }
    </nav>
  )
}