import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import EventProposalForm from "./EventProposalForm";

const thisMonth = dayjs().format("YYYY-MM");


export default function EventProposalPage({ searchParams }: { searchParams: { status: string } }) {
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
                            <BreadcrumbLink href={`/agenda?month=${dayjs().format("YYYY-MM")}`}>Agenda</BreadcrumbLink>
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

                    <EventProposalForm />
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