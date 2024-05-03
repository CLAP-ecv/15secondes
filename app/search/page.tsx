import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { prisma } from "../layout";
import { Suspense } from "react";
import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/server";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/src/components/ui/pagination";

const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault('').withOptions({
        clearOnDefault: true,
    }),
    page: parseAsInteger.withDefault(1)
})

export type SearchPageProps = {
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string, page: string } }) {
    const { q, page } = searchParamsCache.parse(searchParams)

    const filteredArticles = await prisma.article.findMany({
        where: {
            title: {
                contains: q
            }
        },
        take: page * 10,
        skip: (page - 1) * 10
    })

    return (
        <main className="p-5">
            <h1 className="font-bold text-lg">Résultat(s) de recherche pour : <br /><q>{searchParams.q}</q></h1>
            <ul className="space-y-5">
                <Suspense fallback={"Chargement ..."}>
                    {filteredArticles.map((article) => (
                        <ArticleVideoCard
                            key={article.id}
                            article={article}
                            variant="no-date"
                        />
                    ))}
                </Suspense>
            </ul>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={""} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </main>
    )
}