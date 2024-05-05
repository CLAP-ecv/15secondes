"use client"

import ReactSelect from "react-select"

type AutocompleteProps = {
    options: { label: string, value: string }[]
}

export const Autocomplete = (props: AutocompleteProps) => {
    return (
        <ReactSelect
            isSearchable
            isClearable={false}
            isLoading={false}
            placeholder="Rechercher un article"
            // @ts-ignore
            options={props.options}
            classNames={{
                menuList: () => "bg-black4 hover:[&>div]:bg-blue1 [&>div]:bg-black4 border-blue1 border",
                valueContainer: () => "bg-black4",
                dropdownIndicator: () => "bg-black4",
                indicatorsContainer: () => "bg-black4",
                indicatorSeparator: () => "!bg-blue1",
                control: () => "!border-blue1 !rounded-lg !overflow-hidden",
                singleValue: () => "!text-black",
                input: () => "!text-black",
                option: () => "!text-black",
            }}
            name="search"
        />
    )
}