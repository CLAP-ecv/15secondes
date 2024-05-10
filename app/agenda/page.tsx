import { Paginator } from "@/src/components/Paginator/Paginator"
import { prisma } from "../layout"

export default async function RoutePage() {

    const totalEvents = await prisma.event.count({
        where: {
        }
    });
    const events = await prisma.event.findMany({
        take: 10,
        orderBy: {
        }
    })

    return (
        <main>
            
            <Paginator
                lastPage={parseInt((totalEvents / 10).toFixed(0))}
            />
        </main>
    )
}