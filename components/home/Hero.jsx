const Hero = ({lang, background, number}) => {
    return (
        <section className={`h-[40rem] w-full bg-fixed bg-no-repeat bg-cover ${background} grid place-items-center text-white bg-black`}>

            <div className="text-center text-6xl leading-8">
                <span className="text-beige block font-MarckScript font-bold">{lang.heros[number].top}</span>
                <span className="font-bold">{lang.heros[number].bottom}</span>
            </div>
        </section>
    )
}

export default Hero