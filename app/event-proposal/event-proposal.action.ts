"use server"

import { redirect } from "next/navigation";
import { prisma } from "../layout";

export const eventProposalAction = async (formData: FormData) => {

    const imageBuffer = await (formData.get("image") as File).arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");

    try {
        await prisma.event.create({
            data: {
                ownerFirstName: formData.get("firstName") as string,
                ownerLastName: formData.get("LastName") as string,
                ownerEmail: formData.get("email") as string,
                category: formData.get("theme") as string,
                title: formData.get("eventName") as string,
                location: formData.get("eventCity") as string,
                startDate: new Date(formData.get("startDate") as string),
                endDate: new Date(formData.get("endDate") as string),
                description: formData.get("eventDescription") as string,
                slug: (formData.get("eventName") as string).toLowerCase().replace(/ /g, "-"),
                thumbnail: `data:image/png;base64,${imageBase64}`,
                link: ""
            }
        })
    } catch (_) {
        return redirect("/event-proposal?status=error");
    }


    return redirect("/event-proposal?status=success");
}