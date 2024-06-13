import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { Button } from "@/src/components/ui/button";
import { Loader } from "@/src/components/ui/loader";
import { Article } from "@prisma/client";
import { Suspense } from "react";
import { prisma } from "./layout";

/**
 * Renders the home page component.
 * @returns The JSX element representing the home page.
 */
export default async function Home() {

  let newArticles = [] as Article[];
  try {
    newArticles = await prisma.article.findMany({
      take: 4,
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (_) {

  }


  return (
    <main className="">
      <Button variant="outline" className="m-5">
        Les reportages 15 Secondes TV
      </Button>
      <section className="bg-15s-blue p-5 flex flex-col gap-6">
        <h1 className="text-white font-bold text-xl">Les dernières actus en Ile-de-France</h1>
        <Suspense fallback={<Loader />}>
          <ArticleVideoCard variant="large" textColor="white" article={newArticles[0]} />
          {
            newArticles.slice(1).map((article) => (
              <ArticleVideoCard key={article.id} variant="small" textColor="white" article={article} />
            ))
          }
        </Suspense>
        <Button className="self-center bg-white hover:bg-white/90 text-black" size="lg">
          Toutes les vidéos
        </Button>
      </section>
    </main>
  );
}
