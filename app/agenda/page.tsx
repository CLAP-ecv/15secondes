import AgendaPlus from "@/src/assets/icons/agenda-plus.svg";
import { EventFilters } from "@/src/components/Event/EventFilters";
import { EventList } from "@/src/components/Event/EventList";
import { MonthPaginator } from "@/src/components/Paginator/MonthPaginator";
import { Paginator } from "@/src/components/Paginator/Paginator";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/server";
import { prisma } from "../layout";

// Create a cache for search parameters
const searchParamsCache = createSearchParamsCache({
    page: parseAsInteger.withDefault(1),
    month: parseAsString.withDefault("2024-05"),
});

/**
 * Renders the page component for the agenda.
 * @param {Object} props - The component props.
 * @param {Object} props.searchParams - The search parameters for the page.
 * @param {string} props.searchParams.month - The month to display events for.
 * @param {string} props.searchParams.page - The page number to display.
 * @returns {JSX.Element} The rendered page component.
 */
export default async function RoutePage({ searchParams }: { searchParams: { month: string, page: string } }) {
    // Parse the search parameters from the cache
    const { month, page } = searchParamsCache.parse(searchParams);

    // Fetch the total number of events for the specified month
    const totalEvents = await prisma.event.count({
        where: {
            startDate: {
                gte: new Date(month + "-01"),
                lt: new Date(month + "-31")
            }
        }
    });

    // Fetch the events for the specified month and page
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
    });

    // Fetch the distinct event cities
    const eventCities = await prisma.event.findMany({
        select: {
            location: true,
        },
        distinct: ['location']
    });

    // Fetch the distinct event categories
    const eventCategories = await prisma.event.findMany({
        select: {
            category: true,
        },
        distinct: ['category']
    });

    return (
        <main className="p-5">
            <h1 className="text-xl">
                <b>Agenda</b>
            </h1>
            <div className="flex justify-center mt-6 mb-10">
                <Button asChild className="relative font-normal" variant={"green"}>
                    <Link href={'/event-proposal'}>
                        <Image src={AgendaPlus} alt="Proposer votre évènement" width={20} height={20} className="mr-2 inline-block" />
                        Proposer votre évènement
                    </Link>
                </Button>
            </div>
            <MonthPaginator />
            <EventFilters
                cities={eventCities.map(event => event.location)}
                categories={eventCategories.map(event => event.category)}
            />
            <EventList
                events={events}
            />
            <Paginator
                lastPage={parseInt((totalEvents / 10).toFixed(0))}
            />
        </main>
    );
}
