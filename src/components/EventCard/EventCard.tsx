import { dateParser } from "@/src/lib/dateParser";
import { Event } from "@prisma/client"
import Image from "next/image"
import Link from "next/link";

export type EventCardProps = {
    event: Event;
}

export const EventCard = (props: EventCardProps) => {
  return (
    <article className="space-y-4">
        <Image 
            src={props.event.thumbnail}
            alt={props.event.title}
            width={300}
            height={170}
            className="w-full h-[170px] object-cover"
        />
        <div className="border rounded-md py-2 flex items-center justify-center text-15s-lightgrey border-15s-lightgrey">
            {props.event.category}
        </div>
        <h2>{props.event.title}</h2>
        <p>
            À {props.event.location} {" "}
            <span className="bg-15s-yellow">
            {
                props.event.endDate ? (
                    <>
                        du {dateParser(props.event.startDate)} au {dateParser(props.event.endDate)}
                    </>
                ) : (
                    <>le {dateParser(props.event.startDate)}</>
                )
            }
            </span>
        </p>
        <p className="line-clamp-4">
            {props.event.description}
        </p>
        <Link href={`/events/${props.event.slug}`} className="underline underline-offset-2">
            Lire la suite
        </Link>
    </article>
  )
}