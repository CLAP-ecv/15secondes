import SearchIconBlack from "@/src/assets/icons/search-black.svg"
import { Article } from "@prisma/client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Autocomplete } from "../AutocompleteSelect/Autocomplete"
import { getAllArticles, searchAction } from "./search.action"

export type SearchBarProps = {
    close: () => void
}

const SearchBar = (props: SearchBarProps) => {

    const formRef = useRef<HTMLFormElement>(null);

    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getAllArticles()
            .then((articles) => setArticles(articles))
    }, [])


    return (
        <div className="bg-white absolute -bottom-16 w-full h-20 px-5 flex items-center justify-center">
            <form ref={formRef} className="relative w-full" action={(formData: FormData) => {
                searchAction(formData)
                props.close()
            }}>
                <Autocomplete
                    options={(articles ?? []).map((article) => ({ value: article.title, label: article.title }))}
                    formRef={formRef}
                />
                <button type="submit" className="absolute w-8 h-8 bottom-1/2 -right-2">
                    <Image src={SearchIconBlack} alt="Icone de recherche" width={25} height={25} className="absolute top-5 right-10" />
                </button>
            </form>
        </div>
    )

}

export { SearchBar }

