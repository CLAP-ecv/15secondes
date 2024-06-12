"use client"

import { Button } from "@/src/components/ui/button"
import { InputWithLabel } from "@/src/components/ui/inputWithLabel"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { TextareaWithLabel } from "@/src/components/ui/textareaWithLabel"
import { eventProposalAction } from "./event-proposal.action"

export default function EventProposalForm() {
    return (
        <form className="mt-12 mb-10 flex gap-4 flex-col" action={(formData: FormData) => { eventProposalAction(formData) }}>
            <h2 className="text-xl font-bold">Vous</h2>
            <InputWithLabel label="Prénom *" name="firstName" id="firstName" type="text" placeholder="Alex" required />
            <InputWithLabel label="Nom *" name="lastName" id="lastName" type="text" placeholder="Dupont" required />
            <InputWithLabel label="Email *" name="email" id="email" type="email" placeholder="alex.dupont@exemple.com" required />
            <h2 className="text-xl font-bold">Votre évènement</h2>
            <div>
                <Label htmlFor="theme">Thématique *</Label>
                <Select name="theme" required>
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
                <Select name="eventCity">
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
            <InputWithLabel label="Date de début *" name="startDate" id="startDate" type="datetime-local" required />
            <InputWithLabel label="Date de fin" name="endDate" id="endDate" type="datetime-local" />
            <TextareaWithLabel label="Description de l'évènement *" name="eventDescription" id="eventDescription" placeholder="Dites-nous en plus" rows={5} required />
            <InputWithLabel label="Image d'illustration" name="image" id="image" type="file" accept="image/png, image/jpeg" description="Formats acceptés : JPG ou PNG ; taille optimale : 1600x900px" />

            <InputWithLabel label="Lien vers votre site ou réseau" name="linkToWebsiteOrMedia[]" id="linkToWebsiteOrMedia" type="text" placeholder="https://www.votresite.com" />
            <InputWithLabel label="Titre du lien à afficher" name="titleToWebsiteOrMedia[]" id="titleToWebsiteOrMedia" type="text" placeholder="Mon programmme" />

            <Button className="mx-auto mt-8" size="lg" type="submit">Envoyer votre évènement</Button>
        </form>
    )
}