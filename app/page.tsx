import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { Button } from "@/src/components/ui/button";
import { PrismaClient } from "@prisma/client";

const article = {
  title: "Un plan d’urgence pour le 93 : les enseignants manifestent à Paris",
  date: "02/04/2024 à 16h35",
}

export default async function Home() {

  const prisma = new PrismaClient()
  const newArticles = await prisma.article.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <main className="">
      <Button variant="outline" className="m-5">
        Les reportages 15 Secondes TV
      </Button>
      <section className="bg-15s-blue p-5 flex flex-col gap-6">
        <h1 className="text-white font-bold text-xl">Les dernières actus en Ile-de-France</h1>
        <ArticleVideoCard variant="large" textColor="white" article={newArticles[0]} />
        {
          newArticles.slice(1).map((article) => (
            <ArticleVideoCard variant="small" textColor="white" article={article} />
          ))
        }
        <Button className="self-center bg-white hover:bg-white/90 text-black" size="lg">
          Toutes les vidéos
        </Button>
      </section>
    </main>
  );
}
