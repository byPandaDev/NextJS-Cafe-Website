import { motion } from "framer-motion"
import Image from "next/image"

const HomeHero = ({lang}) => {
    return(
        <section id="home" className="h-full w-full bg-no-repeat bg-cover bg-cafe grid place-items-center text-white">
            <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center text-6xl"
            >
                <h1>
                    <span className="text-beige block font-MarckScript font-bold">{lang.home.welcome}</span>
                    <span className="font-bold">{lang.name}</span>
                </h1>
                <Image src={"/img/trenner.png"} width={400} height={200} alt="" className="mx-auto mt-4"/>
            </motion.div>
        </section>
    )
}

export default HomeHero