import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { Paginator } from "@/src/components/Paginator/Paginator";
import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/server";
import { Suspense } from "react";
import { prisma } from "../layout";

// Create a cache for search parameters
const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault('').withOptions({
        clearOnDefault: true,
    }),
    page: parseAsInteger.withDefault(1)
})

/**
 * Props for the SearchPage component
 */
export type SearchPageProps = {
    searchParams: {
        q: string;
        page: string;
    };
}

/**
 * Renders the search page.
 * @param searchParams - The search parameters.
 * @returns The rendered search page.
 */
export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q, page } = searchParamsCache.parse(searchParams);

    // Get the total number of articles matching the search query
    const totalArticles = await prisma.article.count({
        where: {
            title: {
                contains: q
            }
        }
    });

    // Get the filtered articles based on the search query and pagination
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
            {searchParams.q &&
                <h1 className="font-bold text-lg">Résultat(s) de recherche pour : <br /><q>{searchParams.q}</q></h1>
            }
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