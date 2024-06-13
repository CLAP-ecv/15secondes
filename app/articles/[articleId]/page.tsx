import { prisma } from "@/app/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/src/components/ui/breadcrumb";
import { dateParser } from "@/src/lib/dateParser";
import Image from "next/image";

export default async function RoutePage({ params: { articleId } }: { params: { articleId: string } }) {

  const article = await prisma.article.findFirst({
    where: {
      id: parseInt(articleId)
    }
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main>
      {
        article.thumbnail &&
        <section className="bg-15s-blue flex items-center justify-center py-10">
          <Image
            src={article.thumbnail}
            alt={`Vidéo de l'article ${article.title}`}
            width={800}
            height={400}
            className="px-5"
          />
        </section>
      }
      <section className="max-w-7xl mx-auto space-y-5 my-5 px-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Articles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="text-15s-lightgrey"><span className="uppercase">15 Secondes tv</span> Publié : {dateParser(article.createdAt)}</p>
        <p>{article.content}</p>
      </section>
    </main>
  )
}