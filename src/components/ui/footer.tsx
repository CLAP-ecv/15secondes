import Image from "next/image"
import { Newsletter } from "./newsletter"

const Footer = () => {

    return (
        <div className="bg-15s-lightblue p-5 space-y-5 pb-24">
            <h2 className="font-bold text-xl">La newsletter de 15 secondes TV</h2>
            <p className="text-sm">Inscrivez-vous pour recevoir prochainement le meilleur de 15 secondes TV ! Les vidéos, les programmes, les rendez-vous, mais surtout tout ce qu'il ne faut pas manque de l'Île-de-France...</p>

            <Newsletter />

            <h2 className="font-bold text-xl text-center">Bienvenue sur 15 secondes TV</h2>
            <p className="text-sm">15 secondes TV c'est le nouveau média de Paris et de l'Île-de-France ! C'est une télé, mais c'est surtout une envie de rapprocher les franciliens... News, sport, culture, good vibes, bien-être, divertissement, planète, économie, sorties... Découvrez vite nos programmes, nos émissions, nos vidéos et nos replays. De l'actu, mais aussi du divertissement, 15 secondes TV c'est des directs quotidiens pour vous proposer le meilleur de Paris, mais surtout de la Seine-et-Marne, des Yvelines, de l'Essone, des Hauts-de-Seine, de la Seine-Saint-Denis, du Val-de-Marne ainsi que du Val-d'Oise.</p>
            <Image src={"/15s.png"} alt="15Secondes" width={75} height={105} className="mx-auto" />

            <div className="space-y-5 text-sm">
                <p>15secondes.tv</p>
                <p>Tous droits de reproduction et diffusion réservés © 2024</p>
                <a href="#">Comment recevoir 15 secondes TV</a>
                
                <div className="flex flex-col">
                    <a href="#">Gestion des cookies</a>
                    <a href="#">Conditions générales d'utilisation</a>
                    <a href="#">Mentions légales</a>
                    <a href="#">Politique de cookies</a>
                    <a href="#">Politique de protection de la vie privée</a>
                </div>

                <div className="flex flex-col">
                    <a href="#">L'actualité dans les Hauts-de-France</a>
                    <a href="#">Plan du site</a>
                    <a href="#">Crédits</a>
                </div>
            </div>
        </div>
    )
}

export { Footer }