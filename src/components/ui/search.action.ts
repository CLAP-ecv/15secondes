"use server"

import { prisma } from "@/app/layout";
import { redirect } from "next/navigation";

export const searchAction = (formData: FormData) => {

    return redirect(`/search?q=${formData.get("search")}&page=1`);
}

export const getAllArticles = async () => {
    return prisma.article.findMany();
}