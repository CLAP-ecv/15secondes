"use client"

import { Button } from "@/src/components/ui/button"
import { InputWithLabel } from "@/src/components/ui/inputWithLabel"
import { TextareaWithLabel } from "@/src/components/ui/textareaWithLabel"
import { contactAction } from "./contact.action"

export default function ContactForm() {
    return (
        <form className="mt-12 mb-10 flex gap-4 flex-col" action={async (formData: FormData) => { contactAction(formData) }}>
            <InputWithLabel label="Prénom *" name="firstName" id="firstName" type="text" placeholder="Alex" required />
            <InputWithLabel label="Nom *" name="lastName" id="lastName" type="text" placeholder="Dupont" required />
            <InputWithLabel label="Email *" name="email" id="email" type="email" placeholder="alex.dupont@exemple.com" required />
            <InputWithLabel label="Ville (facultatif)" name="city" id="city" type="text" placeholder="Lille" />
            <InputWithLabel label="Sujet de votre message *" name="messageSubject" id="messageSubject" type="text" placeholder="Objet du message" required />
            <TextareaWithLabel label="Message *" name="message" id="message" placeholder="Dites-nous en plus" rows={5} required />
            <InputWithLabel label="Image d'illustration *" name="image" id="image" type="file" accept="image/png, image/jpeg" description="Formats acceptés : JPG ou PNG ; taille optimale : 1600x900px" required />

            <Button className="mx-auto mt-8" size="lg" type="submit">Envoyer votre message</Button>
        </form>
    )
}