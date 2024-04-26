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


export default function ContactPage() {
    return (
        <>
            <Breadcrumb className="p-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Contact</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="p-5">
                <h1 className="text-2xl font-bold">Parlons-en ! Contactez-nous</h1>
                <p className="mt-8">
                    Votre voix compte pour nous !
                    Ici faites nous part de vos questions, réactions ou suggestions concernant nos émissions ou l'actualité. 
                    Vous avez même la possibilité de proposer un sujet d'actualité
                    Nous reviendrons vers vous rapidement. 
                </p>

                <strong className="block mt-8">
                    L’agenda de 20 Minutes TV est ouvert à tous ! Vous voulez promouvoir un évènement, vous organisez une manifestation dans la région ? 
                </strong>
                <a href="https://www.20minutes.tv/evenement/new/" className="font-bold underline">
                    Proposez-nous gratuitement votre évènement sur notre page agenda.
                </a>

                <form className="mt-12 mb-10 flex gap-4 flex-col">
                    <InputWithLabel label="Prénom" name="firstName" id="firstName" type="text" placeholder="Alex"/>
                    <InputWithLabel label="Nom" name="lastName" id="lastName" type="text" placeholder="Dupont"/>
                    <InputWithLabel label="Email" name="email" id="email" type="email" placeholder="alex.dupont@exemple.com"/>
                    <InputWithLabel label="Ville (facultatif)" name="city" id="city" type="text" placeholder="Lille"/>
                    <InputWithLabel label="Sujet de votre message" name="messageSubject" id="messageSubject" type="text" placeholder="Objet du message"/>
                    <TextareaWithLabel label="Message" name="message" id="message" placeholder="Dites-nous en plus" rows={5}/>
                    <InputWithLabel label="Image d'illustration" name="image" id="image" type="file" accept="image/png, image/jpeg" description="Formats acceptés : JPG ou PNG ; taille optimal : 1600x900px"/>

                    <Button className="mx-auto mt-8" size="lg" type="submit">Envoyer votre message</Button>
                </form>
            </div>
        </>
    );
}