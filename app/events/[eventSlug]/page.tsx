import { prisma } from "@/app/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/src/components/ui/breadcrumb";
import { Button } from "@/src/components/ui/button";
import { Loader } from "@/src/components/ui/loader";
import { BookmarkIcon, Share1Icon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Image from "next/image";
import { Suspense } from "react";
import "dayjs/locale/fr";
import Link from "next/link";
import { EventList } from "@/src/components/Event/EventList";
import type { Event } from "@prisma/client";

dayjs.locale("fr");

/**
 * Renders the event details page.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.eventSlug - The slug of the event.
 * @returns {JSX.Element} The event details page.
 */
export default async function EventDetailsPage({ params: { eventSlug } }: { params: { eventSlug: string } }): Promise<JSX.Element> {

    return (
        <Suspense fallback={<Loader />}>
            <Event eventSlug={eventSlug} />
        </Suspense>
    );
}

/**
 * Renders the event details.
 * @param {Object} props - The component props.
 * @param {string} props.eventSlug - The slug of the event.
 * @returns {JSX.Element} The event details.
 */
async function Event({ eventSlug }: any): Promise<JSX.Element> {
    const event = await prisma.event.findFirst({
        where: {
            slug: eventSlug
        }
    });

    let similarEvents = [] as Event[];
    if (event) {
        similarEvents = await prisma.event.findMany({
            where: {
                category: event?.category,
                NOT: {
                    slug: event?.slug
                }
            },
            take: 3
        });
    }

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <main>
            <Breadcrumb className="p-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/agenda?month=${dayjs().format("YYYY-MM")}`}>Agenda</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{event?.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Image
                src={event.thumbnail}
                alt={event.title}
                width={300}
                height={170}
                className="w-full max-h-[50vh] object-cover"
            />

            <section className="m-4 space-y-4">
                <div className="flex flex-row gap-4 justify-end">
                    <Button className="space-x-2">
                        <span>Sauvegarder</span>
                        <BookmarkIcon width={24} height={24} />
                    </Button>

                    <Button className="space-x-2">
                        <span>Partager</span>
                        <Share1Icon width={24} height={24} />
                    </Button>
                </div>

                <div className="border rounded-md py-2 px-4 flex items-center justify-center text-15s-lightgrey border-15s-lightgrey w-max">
                    {event.category}
                </div>

                <h1 className="text-2xl font-bold">{event.title}</h1>

                {
                    event.endDate ? (
                        <p className="font-medium">
                            Du {dayjs(event.startDate).format("DD MMMM YYYY")} au {dayjs(event.endDate).format("DD MMMM YYYY")} à {event.location}
                        </p>
                    ) : (
                        <p className="font-medium">
                            Le {dayjs(event.startDate).format("DD MMMM YYYY")} à {event.location}
                        </p>
                    )
                }
                <p>Proposé par {event.ownerFirstName} {event.ownerLastName}</p>

                <p>{event.description}</p>
                <p className="font-semibold">Pour en savoir plus :</p>
                <ul>
                    <li>Link</li>
                </ul>

                <div className="flex flex-row gap-4 justify-end">
                    <Button className="space-x-2">
                        <span>Sauvegarder</span>
                        <BookmarkIcon width={24} height={24} />
                    </Button>

                    <Button className="space-x-2">
                        <span>Partager</span>
                        <Share1Icon width={24} height={24} />
                    </Button>
                </div>

                <div className="border-y border-black py-8">
                    <Link href={`/agenda?month=${dayjs().format("YYYY-MM")}`}>
                        {"<"} <span className="underline underline-offset-2 italic text-sm">Retour aux évènements</span>
                    </Link>
                </div>
                <p className="font-semibold">A voir aussi :</p>
                <EventList
                    events={similarEvents}
                />
            </section>
        </main>
    );
}