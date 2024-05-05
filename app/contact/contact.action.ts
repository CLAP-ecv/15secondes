"use server"

import { redirect } from "next/navigation";

export const contactAction = (formData: FormData) => {

    return redirect("/contact?status=success");
}