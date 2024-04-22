import Image from "next/image"
import SearchIconBlack from "@/src/assets/icons/search-black.svg"

const SearchBar = () => {

    return (
        <div className="bg-white absolute -bottom-16 w-full h-20 px-5 flex items-center justify-center">
            <form className="relative w-full">
                <input type="search" placeholder="Votre recherche..." className="bg-15s-lightgrey/10 rounded-lg h-11 w-full px-5" />
                <button type="submit" className="absolute w-8 h-8 bottom-1/2 -right-2">
                    <Image src={SearchIconBlack} alt="Icone de recherche" width={25} height={25} className="absolute top-5 right-5" />
                </button>
            </form>
        </div>
    )

}

export { SearchBar }