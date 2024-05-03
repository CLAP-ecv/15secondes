import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { prisma } from "../layout";
import { Suspense } from "react";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault('').withOptions({
        clearOnDefault: true,
    })
})

export type SearchPageProps = {
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {


    const { q } = searchParamsCache.parse(searchParams)

    const filteredArticles = await prisma.article.findMany({
        where: {
            title: {
                contains: q
            }
        }
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

        </main>
    )
}