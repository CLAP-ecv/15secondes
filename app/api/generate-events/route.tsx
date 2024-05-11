import { PrismaClient } from "@prisma/client";

const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology"
]

function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randDate(after?: Date) {

    if (after) {
        return new Date(after.getTime() + rand(0, 1000 * 60 * 60 * 24 * 7));
    }

    return new Date(2024, rand(0, 11), rand(1, 28), rand(0, 23), rand(0, 59), rand(0, 59));
}

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const importStatus = await prisma.event.createMany({
        data: Array.from({ length: 50 }, (_, i) => {
            const startDate = randDate();
            return ({
                category: categories[rand(0, categories.length - 1)],
                title: `Event ${i}`,
                description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                startDate: startDate,
                endDate: rand(0, 1) ? randDate(startDate) : null,
                location: "Location",
                link: "https://www.20minutes.tv",
                slug: `event-${i}`,
                thumbnail: "https://via.placeholder.com/300x170"
            });
        })
    })

    return new Response(JSON.stringify(importStatus, null, 2), { status: 200 });
}