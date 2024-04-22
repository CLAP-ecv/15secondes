import Image from "next/image"
import DefaultArticleImage from "@/src/assets/default_article.png"
import { cn } from "@/src/lib/utils"

export type ArticleVideoCardProps = {
    variant: "small" | "large",
    textColor?: "white" | "black"
    article: {
        title: string,
        date?: string,
        image?: string
    }
}

export const ArticleVideoCard = (props: ArticleVideoCardProps) => {

    if (props.variant === "small") {
        return (
            <article className="flex flex-row gap-2 h-[100px]">
                <Image
                    src={props.article.image ?? DefaultArticleImage}
                    alt="image de l'article"
                    className="object-cover w-1/2 h-[100px] rounded-lg"
                    height={200}
                />
                <div className="flex flex-col justify-between h-full">
                    <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {props.article.date}</p>
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
                src={props.article.image ?? DefaultArticleImage}
                alt="image de l'article"
                className="object-cover w-full h-[200px] rounded-lg"
                height={200}
            />
            <p className={cn("text-sm", props.textColor === "white" && "text-white")}>15 SECONDES TV {props.article.date}</p>
            <h2 className={cn("font-bold", props.textColor === "white" && "text-white")}>
                {props.article.title}
            </h2>
        </article>
    )
}