import { createSearchParamsCache, parseAsString } from "nuqs/server";
import { prisma } from "../layout";
import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";

const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault('').withOptions({
        clearOnDefault: true
    })
})

export type SearchPageProps = {
}

export default async function SearchPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {

    const { q } = searchParamsCache.parse(searchParams)

    const filteredArticles = await prisma.article.findMany({
        where: {
            title: {
                contains: Buffer.from(q, "ascii").toString()
            }
        }
    })

    return (
        <main className="p-5">
            <h1 className="font-bold text-lg">Résultat(s) de recherche pour : <br /><q>{Buffer.from(q, "ascii").toString()}</q></h1>
            <ul className="space-y-5">
                {filteredArticles.map((article) => (
                    <ArticleVideoCard
                        key={article.id}
                        article={article}
                        variant="no-date"
                    />
                ))}
            </ul>
        </main>
    )
}