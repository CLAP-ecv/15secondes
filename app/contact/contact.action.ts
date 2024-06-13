"use server"

import { redirect } from "next/navigation";

/**
 * Handles the contact form submission.
 * @param formData - The form data.
 * @returns The redirect action.
 */
export const contactAction = (formData: FormData) => {

    return redirect("/contact?status=success");
}