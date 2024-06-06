"use server"

import { redirect } from "next/navigation";

export const eventPropsalAction = (formData: FormData) => {

    return redirect("/event-proposal?status=success");
}