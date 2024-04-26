"use server"

import { redirect } from "next/navigation";

export const searchAction = (formData: FormData) => {

    return redirect(`/search?q=${formData.get("search")}`)
}