import Image from "next/image"
import DefaultArticleImage from "@/src/assets/default_article.png"
import { cn } from "@/src/lib/utils"
import { Article } from "@prisma/client"
import { dateParser } from "@/src/lib/dateParser"

export type ArticleVideoCardProps = {
    variant: "small" | "large" | "no-date",
    textColor?: "white" | "black"
    article: Article
}

export const ArticleVideoCard = (props: ArticleVideoCardProps) => {

    if (props.variant === "small") {
        return (
            <article className="flex flex-row gap-2 h-[100px]">
                <Image
                    src={props.article.thumbnail ?? DefaultArticleImage}
                    alt="image de l'article"
                    className="object-cover w-1/2 h-[100px] rounded-lg"
                    height={200}
                />
                <div className="flex flex-col justify-between h-full">
                    <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {dateParser(props.article.createdAt)}</p>
                    <h2 className={cn("font-bold text-ellipsis", props.textColor === "white" && "text-white")}>
                        {props.article.title}
                    </h2>
                </div>
            </article>
        )
    }

    return (
        <article className="space-y-2">
            <Image
                src={props.article.thumbnail ?? DefaultArticleImage}
                alt="image de l'article"
                className="object-cover w-full h-[200px] rounded-lg"
                height={200}
            />
            {props.variant !== "no-date" &&
                <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {dateParser(props.article.createdAt)}</p>
            }
            <h2 className={cn("font-bold", props.textColor === "white" && "text-white")}>
                {props.article.title}
            </h2>
        </article>
    )
}