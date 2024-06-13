import Image from "next/image"
import DefaultArticleImage from "@/src/assets/default_article.png"
import { cn } from "@/src/lib/utils"
import { Article } from "@prisma/client"
import { dateParser } from "@/src/lib/dateParser"
import Link from "next/link"

export type ArticleVideoCardProps = {
    variant: "small" | "large" | "no-date",
    textColor?: "white" | "black"
    article: Article
}

export const ArticleVideoCard = (props: ArticleVideoCardProps) => {

    if (!props.article) return "Aucun article trouvé"

    if (props.variant === "small") {
        return (
            <article>
                <Link href={`/articles/${props.article.id}`} className="flex flex-row gap-2 h-[100px]">
                    <figure>
                        <Image
                            src={props.article.thumbnail ?? DefaultArticleImage}
                            alt="image de l'article"
                            className="flex-1 object-cover h-[100px] w-auto rounded-lg"
                            height={100}
                            width={global?.window ? window.innerWidth / 2 : 400}
                        />
                    </figure>
                    <div className="flex-1 flex flex-col justify-between h-full">
                        <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {dateParser(props.article.createdAt)}</p>
                        <h2 className={cn("font-bold text-ellipsis line-clamp-2", props.textColor === "white" && "text-white")}>
                            {props.article.title}
                        </h2>
                    </div>
                </Link>
            </article>
        )
    }

    return (
        <article>
            <Link href={`/articles/${props.article.id}`} className="space-y-2">
                <figure>
                    <Image
                        src={props.article.thumbnail ?? DefaultArticleImage}
                        alt="image de l'article"
                        className="object-cover w-full h-[200px] rounded-lg"
                        height={200}
                        width={global?.window ? window.innerWidth : 800}
                        priority
                    />
                </figure>
                {props.variant !== "no-date" &&
                    <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {dateParser(props.article.createdAt)}</p>
                }
                <h2 className={cn("font-bold", props.textColor === "white" && "text-white")}>
                    {props.article.title}
                </h2>
            </Link>
        </article>
    )
}