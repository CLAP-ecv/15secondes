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

function generateHref(q: string | null, page: number | null, month: string | null) {
    const query = new URLSearchParams();
    if (q) {
        query.set("q", q);
    }
    if (page) {
        query.set("page", page+"");
    }
    if (month) {
        query.set("month", month+"");
    }
    return "?"+query.toString();
}

export const Paginator = (props: PaginatorProps) => {

    const [q] = useQueryState("q");
    const [page] = useQueryState("page");
    const [month] = useQueryState("month");

    if (props.lastPage === 0 || props.lastPage === 1) return null;

    return (
        <Pagination className="my-10">
            <PaginationContent>
                {
                    (!page || page === "1") ? null :
                        <PaginationItem>
                            <PaginationPrevious href={generateHref(q, page ? (parseInt(page) - 1) : 1, month ?? "")} />
                        </PaginationItem>
                }
                {
                    Array.from({ length: props.lastPage }).map((_, index) => (
                        <PaginationItem key={index} className={cn(
                            index + 1 === parseInt(page ?? "1") ? "bg-gray-200" : "bg-white",
                            "border border-gray-200"
                        )}>
                            <PaginationLink href={generateHref(q, index + 1, month ?? "")}>{index + 1}</PaginationLink>
                        </PaginationItem>
                    ))
                }
                {
                    page && parseInt(page) === props.lastPage ? null :
                    <PaginationItem>
                        <PaginationNext href={generateHref(q, getNextPageNumber(page, props.lastPage), month ?? "")} />
                    </PaginationItem>
                }
            </PaginationContent>
        </Pagination>
    )
}