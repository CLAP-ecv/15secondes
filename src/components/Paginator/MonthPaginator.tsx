"use client"

import { Button } from "../ui/button"
import ArrowLeft from "@/src/assets/icons/arrow-left.svg"
import ArrowRight from "@/src/assets/icons/arrow-right.svg"
import { dateParser } from "@/src/lib/dateParser"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { useQueryState } from "nuqs"

export type MonthPaginatorProps = {

}

function generateHref(month: string | null, state: "previous" | "next") {
    if (state === "previous") {
        return `?month=${dayjs(new Date(month ?? "")).subtract(1, "month").format("YYYY-MM")}`
    }
    return `?month=${dayjs(new Date(month ?? "")).add(1, "month").format("YYYY-MM")}`
}

export const MonthPaginator = (props: MonthPaginatorProps) => {

    const [month] = useQueryState("month");

    return (
        <div className="border-y border-black py-4 my-4">
            <h2 className="text-center font-bold mb-10">{dayjs(new Date(month ?? "")).format("MMMM YYYY")}</h2>
            <div className="flex items-center justify-center gap-x-8">
                <Button asChild className="flex flex-row gap-2">
                    <Link href={generateHref(month, "previous")}>
                        <Image src={ArrowLeft} alt="Mois précédent" width={20} height={20} />
                        Mois précédent
                    </Link>
                </Button>
                <Button asChild className="flex flex-row gap-2">
                    <Link href={generateHref(month, "next")}>
                        Mois suivant
                        <Image src={ArrowRight} alt="Mois suivant" width={20} height={20} />
                    </Link>
                </Button>
            </div>
        </div>
    )
}