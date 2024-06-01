"use client"

import { Event } from "@prisma/client"
import { EventCard } from "./EventCard"
import { useQueryState } from "nuqs"

export type EventListProps = {
    events: Event[]
}

export const EventList = (props: EventListProps) => {

    const [city] = useQueryState("city");
    const [category] = useQueryState("category");

    const eventsToShow = props.events.filter(event => event.location.includes(city ?? "")).filter(event => event.category.includes(category ?? ""));

    return (
        <ul className="space-y-5">
            {
                eventsToShow
                    .map((event) => (
                        <li key={event.id}>
                            <EventCard
                                event={event}
                            />
                        </li>
                    ))
            }
            {
                eventsToShow.length === 0 && (
                    <p className="text-center">Aucun événement trouvé</p>
                )
            }
        </ul>
    )
}