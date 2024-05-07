import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { Paginator } from "@/src/components/Paginator/Paginator";
import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/server";
import { Suspense } from "react";
import { prisma } from "../layout";

const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault('').withOptions({
        clearOnDefault: true,
    }),
    page: parseAsInteger.withDefault(1)
})

export type SearchPageProps = {
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string, page: string } }) {
    const { q, page } = searchParamsCache.parse(searchParams);

    const totalArticles = await prisma.article.count({
        where: {
            title: {
                contains: q
            }
        }
    });
    const filteredArticles = await prisma.article.findMany({
        where: {
            title: {
                contains: q
            }
        },
        take: 10,
        skip: (page - 1) * 10
    });

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
            <Suspense>
                <Paginator lastPage={parseInt((totalArticles/10).toFixed(0))} />
            </Suspense>
        </main>
    )
}