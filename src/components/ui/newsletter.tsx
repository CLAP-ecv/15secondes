const Newsletter = () => {
    return (
        <form className="flex flex-col gap-3">

            <input type="text"
                   placeholder="Votre adresse email"
                   className="rounded-lg h-11 px-5 font-bold"
            />

            <input type="submit"
                   value="Je m'abonne"
                   className="bg-15s-black rounded-lg h-11 px-5 font-bold text-white"
            />

            <p className="text-xs text-15s-lightgrey">En cliquant sur "Je m'abonne", j'accepte que les données recueillies par 15 secondes TV soient destinées à l'envoi par courrier électronique de contenus et d'informations relatifs aux programmes.</p>
        </form>
    )
}

export { Newsletter };