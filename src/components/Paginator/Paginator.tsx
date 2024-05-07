"use client"

import { useQueryState } from "nuqs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { cn } from "@/src/lib/utils";

export type PaginatorProps = {
    lastPage: number;
}


function getNextPageNumber(actualPage: string | null, lastPage: number) {
    if (!actualPage) {
        return 2;
    }
    const nextPage = parseInt(actualPage) + 1;
    return nextPage > lastPage ? lastPage : nextPage;
}

export const Paginator = (props: PaginatorProps) => {

    const [q] = useQueryState("q");
    const [page] = useQueryState("page");

    if (props.lastPage === 0 || props.lastPage === 1) return null;

    return (
        <Pagination className="my-10">
            <PaginationContent>
                {
                    (!page || page === "1") ? null :
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
                {
                    page && parseInt(page) === props.lastPage ? null :
                    <PaginationItem>
                        <PaginationNext href={`?q=${q}&page=${getNextPageNumber(page, props.lastPage)}`} />
                    </PaginationItem>
                }
            </PaginationContent>
        </Pagination>
    )
}