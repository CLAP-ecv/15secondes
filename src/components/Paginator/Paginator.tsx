"use client"

import { useQueryState } from "nuqs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { cn } from "@/src/lib/utils";

export type PaginatorProps = {
    lastPage: number;
}

export const Paginator = (props: PaginatorProps) => {

    const [q] = useQueryState("q");
    const [page] = useQueryState("page");

    return (
        <Pagination>
            <PaginationContent>
                {
                    page === "1" ? null :
                        <PaginationItem>
                            <PaginationPrevious href={`?q=${q}&page=${page ? (parseInt(page) - 1) : 1}`} />
                        </PaginationItem>
                }
                {
                    Array.from({ length: props.lastPage }).map((_, index) => (
                        <PaginationItem key={index} className={cn(
                            index + 1 === parseInt(page ?? "1") ? "bg-gray-200" : "bg-white",
                            "border border-gray-200"
                        )}>
                            <PaginationLink href={`?q=${q}&page=${index + 1}`}>{index + 1}</PaginationLink>
                        </PaginationItem>
                    ))
                }
                <PaginationItem>
                    <PaginationNext href={`?q=${q}&page=${page ? (parseInt(page) + 1) : 1}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}