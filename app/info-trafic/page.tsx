import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/src/components/ui/breadcrumb";

/**
 * Renders the TraficPage component.
 * This component displays real-time traffic conditions and fuel prices.
 */
export default function TraficPage() {

    return (
        <main className="space-y-5">
            <Breadcrumb className="p-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Trafic</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-2xl font-bold px-5">Traffic et Prix des Carburants en Temps Réel</h1>
            <p className="px-5">Consultez les conditions de trafic en temps réel pour planifier vos déplacements efficacement.</p>
            <iframe src="https://embed.waze.com/iframe?zoom=13&lat=48.85661&lon=2.35222&pin=1&lang=fr" width="100%" height="520"></iframe>
            <h1 className="text-2xl font-bold px-5">Carte des stations d'essence</h1>
            <p className="px-5">Trouvez facilement une station d'essence près de chez vous grâce à notre carte interactive.</p>
            <iframe src="https://api.prixdescarburants.com/" width="100%" height={"1000"}></iframe>
        </main>
    )
}