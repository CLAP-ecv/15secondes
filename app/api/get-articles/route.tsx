import { PrismaClient } from "@prisma/client";
import { XMLParser } from "fast-xml-parser";

export async function GET(request: Request) {

    const xmlData = await fetch('https://www.20minutes.tv/sitemap-video-04-2024.xml');
    const xmlText = await xmlData.text();   

    const parser = new XMLParser();
    let jsonObj = parser.parse(xmlText);

    const prisma = new PrismaClient();
    const importStatus = await prisma.article.createMany({
        data: jsonObj.urlset.url.map((articleData: any) => ({
            title: articleData["video:video"]["video:title"],
            content: articleData["video:video"]["video:description"],
            thumbnail: articleData["video:video"]["video:thumbnail_loc"],
            createdAt: new Date(articleData["video:video"]["video:publication_date"]),
            author: "15 Secondes"
        }))
    })

    return new Response(JSON.stringify(importStatus, null, 2), { status: 200 });
}