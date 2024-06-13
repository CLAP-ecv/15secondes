import { ArticleVideoCard } from "@/src/components/ArticleVideoCard/ArticleVideoCard";
import { Button } from "@/src/components/ui/button";
import { Loader } from "@/src/components/ui/loader";
import { Article } from "@prisma/client";
import { Suspense } from "react";
import { prisma } from "./layout";
import Link from "next/link";
import MeteoIcon from "@/src/assets/icons/meteo.svg";
import TrafficIcon from "@/src/assets/icons/trafic.svg";
import GameIcon from "@/src/assets/icons/jeu.svg";
import Image from "next/image";

/**
 * Renders the home page component.
 * @returns The JSX element representing the home page.
 */
export default async function Home() {

  let newArticles = [] as Article[];
  try {
    newArticles = await prisma.article.findMany({
      take: 4,
      orderBy: [
        {
          createdAt: 'desc'
        },
        {
          id: "desc"
        }
      ]
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
        <Button asChild className="self-center bg-white hover:bg-white/90 text-black" size="lg">
          <Link href={"/search"}>
            Toutes les vidéos
          </Link>
        </Button>
      </section>
      <section className="px-5 space-y-4">
        <h2 className="text-lg font-bold">Services</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/meteo">
              <div className="bg-15s-black flex flex-row gap-4 px-4 py-2 rounded-md">
                <Image
                  src={MeteoIcon}
                  alt="Météo"
                />
                <span className="text-white font-medium">Météo</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/info-trafic">
              <div className="bg-15s-black flex flex-row gap-4 px-4 py-2 rounded-md">
                <Image
                  src={TrafficIcon}
                  alt="Trafic et carburant"
                />
                <span className="text-white font-medium">Trafic et Carburant</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="bg-15s-black flex flex-row gap-4 px-4 py-2 rounded-md">
                <Image
                  src={GameIcon}
                  alt="Jeux concours"
                />
                <span className="text-white font-medium">Jeux concours</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
