"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { cn } from "@/src/lib/utils"

type AutocompleteProps = {
    options: { label: string, value: string }[]
    formRef: React.RefObject<HTMLFormElement>
}

export const Autocomplete = (props: AutocompleteProps) => {
    const [value, setValue] = useState("")

    return (
        <>
            <Input
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ul className={cn(
                "absolute w-full max-h-56 bg-white overflow-y-auto border rounded-lg p-2 mt-2",
                !value.length && "hidden"
            )}>
                {props.options
                    .filter((article) => article.value.includes(value))
                    .map((article) => (
                        <li
                            key={article.value}
                            onClick={() => { setValue(article.value); setTimeout(() => props.formRef.current?.requestSubmit(), 100) }}
                            className={cn(
                                "cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                            )}
                        >
                            {article.label}
                        </li>
                    ))}
            </ul>
        </>
    )
}