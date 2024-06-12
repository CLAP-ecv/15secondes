"use client"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import { InputWithLabel } from "@/src/components/ui/inputWithLabel"


export default function ContactPage({ searchParams }: { searchParams: { status: string } }) {
    return (
        <>
            <Breadcrumb className="p-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Météo</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="p-5">
                <h1 className="text-2xl font-bold">
                    Prévisions météo Paris et l'Île-de-France
                </h1>
                <p className="mt-8">
                    Retrouvez sur cette page nos prévisions météo pour les prochains jours, notre bulletin météo vidéo quotidien, et même le weekend
                </p>
                <h2 className="mt-5 text-xl font-bold">
                    Le bulletin météo
                </h2>
                <div className="relative w-full">
                    <iframe src="//www.ultimedia.com/deliver/generic/iframe/mdtk/01521514/zone/1/showtitle/1/src/x0300kk"
                        width="1060" height="596" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                        className="h-full w-full min-h-52 mt-4">
                    </iframe>
                </div>

                <InputWithLabel className="mt-6" label="Votre ville ou commune" placeholder="Lille" type="text"></InputWithLabel>
                <InputWithLabel className="mt-2" label="Quand ?" type="date"></InputWithLabel>

                <h3 className="mt-8 text-xl font-bold w-full text-center">
                    Aujourd'hui
                </h3>
                <div className="mt-4 bg-gray-400 h-52 w-full rounded-md">
                </div>

                <h3 className="mt-6 font-bold">Les prévisions météo du Vendredi 19 Avril :</h3>
                <p className="mt-2 text-sm">
                    Vendredi, c'est le retour d'un temps plus automnal et qui concernera l'ensemble de nos départements sans exception. Le ciel sera totalement couvert, ne laissant quasiment aucune chance au soleil pour exister. Quelques averses se produiront et le vent engendrera des rafales de l'ordre de 50 à 60 km/h. Un temps plus calme se mettra en place en soirée avec un ciel qui se sera bien dégagé. Concernant les températures, elles sont toujours très basses pour la saison.
                </p>

                <h3 className="mt-6 font-bold">Les prévisions météo du Samedi 20 Avril :</h3>
                <p className="mt-2 text-sm">
                    Samedi, nous profiterons d'une belle journée dans l'ensemble. Le soleil brillera relativement généreusement en alternance avec quelques passages nuageux qui seront sans conséquence. En revanche, il faudra toujours composer avec un air bien frais pour la saison. Les valeurs seront froides le matin avec pourquoi pas quelques gelées localement. Dans l'après-midi, le mercure ne dépassera que de très peu la barre des 10°C.
                    Météo de Paris ou de l'Île-de-France, prévisions à 15 jours
                </p>
            </div>
        </>
    )
}