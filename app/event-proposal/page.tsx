"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import { Button } from "@/src/components/ui/button";
import { InputWithLabel } from "@/src/components/ui/inputWithLabel";
import { TextareaWithLabel } from "@/src/components/ui/textareaWithLabel";
import Image from "next/image";
import { eventPropsalAction } from "./event-proposal.action";
import Link from "next/link";
import dayjs from "dayjs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Label } from "@/src/components/ui/label";
import { useQueryState } from "nuqs";

const thisMonth = dayjs().format("YYYY-MM");


export default function ContactPage({ searchParams }: { searchParams: { status: string } }) {
    const [theme, setTheme] = useQueryState("theme");
    const [eventCity, setCity] = useQueryState("eventCity");

    if (searchParams?.status == "success") {
        return (
            <FormStatusMessage title="Merci pour votre proposition d'évènement !"
                description="Nous avons bien reçu votre soumission et notre équipe va l'examiner. Nous vous tiendrons informé(e) de la publication ou nous vous contacterons si nous avons besoin de détails supplémentaires"
                titleLink="Retour à l'accueil"
                urlLink="/"
            />
        )
    } else if (searchParams?.status == "error") {
        return (
            <FormStatusMessage title="Oups ! Il semble y avoir eu un problème lors de l'envoi de votre proposition d'évènement."
                description="Si vous continuez à rencontrer des difficultés, veuillez nous contacter à contact@15secondes.fr ou appeler le 03 00 00 00 00."
                titleLink="Réessayer"
                urlLink="/event-proposal"
            />
        )
    } else {
        return (
            <>
                <Breadcrumb className="p-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Agenda</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Proposer votre évènement</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="p-5">
                    <h1 className="text-2xl font-bold">Proposer un évènement</h1>
                    <p className="mt-8">
                        Mettez en lumière votre événement et captez l’attention de notre communauté.
                        Que vous organisiez un festival culturel, une conférence professionnelle ou un rassemblement local, notre plateforme est l'endroit idéal pour gagner en visibilité.
                        Remplissez simplement le formulaire ci-dessous avec les détails de votre événement. Une fois soumis, notre équipe l'examinera et le publiera sur notre <b><Link href={`/agenda?month=${thisMonth}`}>agenda en ligne</Link></b>.
                    </p>

                    <i className="block mt-8 text-sm">
                        Les champs marqués d'une étoile (*) sont requis pour soumettre votre événement.
                    </i>

                    <form className="mt-12 mb-10 flex gap-4 flex-col" action={async (formData: FormData) => { eventPropsalAction(formData) }}>
                        <h2 className="text-xl font-bold">Vous</h2>
                        <InputWithLabel label="Prénom *" name="firstName" id="firstName" type="text" placeholder="Alex" required />
                        <InputWithLabel label="Nom *" name="lastName" id="lastName" type="text" placeholder="Dupont" required />
                        <InputWithLabel label="Email *" name="email" id="email" type="email" placeholder="alex.dupont@exemple.com" required />
                        <h2 className="text-xl font-bold">Votre évènement</h2>
                        <div>
                            <Label htmlFor="theme">Thématique *</Label>
                            <Select name="theme" value={theme ?? ""} onValueChange={(value) => setTheme(value)} required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionner une thématique" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* @ts-ignore */}
                                <SelectItem value={null}>Toutes les thématiques</SelectItem>
                                <SelectItem key={"Concert"} value={"Concert"}>{"Concert"}</SelectItem>
                                <SelectItem key={"Activité"} value={"Activité"}>{"Activité"}</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <InputWithLabel label="Nom de l’événement *" name="eventName" id="eventName" type="text" placeholder="Concert de Jazz" required />
                        <div>
                            <Label htmlFor="eventCity">Ville de l'évènement</Label>
                            <Select name="eventCity" value={eventCity ?? ""} onValueChange={(value) => setCity(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionner une ville" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* @ts-ignore */}
                                <SelectItem value={null}>Toutes les villes</SelectItem>
                                <SelectItem key={"Lille"} value={"Lille"}>{"Lille (59)"}</SelectItem>
                                <SelectItem key={"Paris"} value={"Paris"}>{"Paris (75)"}</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <InputWithLabel label="Date de début *" name="startDate" id="startDate" type="date" required />
                        <InputWithLabel label="Date de fin" name="endDate" id="endDate" type="date" />
                        <TextareaWithLabel label="Description de l'évènement *" name="eventDescription" id="eventDescription" placeholder="Dites-nous en plus" rows={5} required/>
                        <InputWithLabel label="Image d'illustration" name="image" id="image" type="file" accept="image/png, image/jpeg" description="Formats acceptés : JPG ou PNG ; taille optimale : 1600x900px" />
                        
                        <InputWithLabel label="Lien vers votre site ou réseau" name="linkToWebsiteOrMedia[]" id="linkToWebsiteOrMedia" type="text" placeholder="https://www.votresite.com" />
                        <InputWithLabel label="Titre du lien à afficher" name="titleToWebsiteOrMedia[]" id="titleToWebsiteOrMedia" type="text" placeholder="Mon programmme" />

                        <Button className="mx-auto mt-8" size="lg" type="submit">Envoyer votre évènement</Button>
                    </form>
                </div>
            </>
        )
    }
}

type FormStatusMessageProps = {
    title: string,
    description: string,
    titleLink: string,
    urlLink: string
}

const FormStatusMessage = ({ title, description, titleLink, urlLink }: FormStatusMessageProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 mx-5 my-10">
            <Image src="/15s.svg" alt="Logo 15 secondes" width={150} height={135} />
            <div className="text-left space-y-4">
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{description}</p>
            </div>
            <a href={urlLink} className="text-white bg-15s-black rounded-lg py-3 px-14">{titleLink}</a>
        </div>
    )
}