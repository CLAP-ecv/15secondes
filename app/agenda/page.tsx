import { Paginator } from "@/src/components/Paginator/Paginator"
import { prisma } from "../layout"
import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/server";
import { EventCard } from "@/src/components/EventCard/EventCard";
import { MonthPaginator } from "@/src/components/Paginator/MonthPaginator";

const searchParamsCache = createSearchParamsCache({
    page: parseAsInteger.withDefault(1),
    month: parseAsString.withDefault("2024-05"),
})

export default async function RoutePage({ searchParams }: { searchParams: { month: string, page: string } }) {

    const { month, page } = searchParamsCache.parse(searchParams);

    const totalEvents = await prisma.event.count({
        where: {
            startDate: {
                gte: new Date(month + "-01"),
                lt: new Date(month + "-31")
            }
        }
    });
    const events = await prisma.event.findMany({
        take: 10,
        skip: (page - 1) * 10,
        orderBy: {
            startDate: 'asc'
        },
        where: {
            startDate: {
                gte: new Date(month + "-01"),
                lt: new Date(month + "-31")
            }
        }
    })

    return (
        <main className="p-5">
            <MonthPaginator />
            <ul className="space-y-5">
                {
                    events.map((event) => (
                        <li key={event.id}>
                            <EventCard
                                event={event}
                            />
                        </li>
                    ))
                }
            </ul>
            <Paginator
                lastPage={parseInt((totalEvents / 10).toFixed(0))}
            />
        </main>
    )
}