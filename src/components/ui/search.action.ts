"use server"

import { prisma } from "@/app/layout";
import { redirect } from "next/navigation";

export const searchAction = (formData: FormData) => {

    const search = formData.get("search");
    const params = new URLSearchParams();
    params.append("q", search?.toString() || "");
    params.append("page", "1");
    
    return redirect(`/search?${params}`);
}

export const getAllArticles = async () => {
    return prisma.article.findMany();
}