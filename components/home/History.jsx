import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react";
import { SlideLeft, SlideRight } from "../Motions";

const History = ({lang}) => {

    return(
        <section className="container bg-white py-16" id="history">
            <div className="w-fit flex flex-col gap-12 mx-auto h-fit lg:flex-row">
                <div className="h-4rem text-center flex flex-col justify-center items-center text-4xl">
                    <h2 className="p-0 h-fit">
                        <span className="text-beige block font-MarckScript font-bold">{lang.history.findmore}</span>
                        <span className="font-semibold">{lang.history.history}</span>
                    </h2>
                    <Image src={"/img/trenner-black.png"} width={400} height={200} alt="" className="my-4"/>
                    <p className="text-lg w-55ch">
                        {lang.history.text}
                    </p>
                </div>
                <div className="flex gap-12">
                    
                    <SlideLeft>
                        <Image src={"https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                        alt=""
                        height={500}
                        width={300}
                        />
                    </SlideLeft>
                    <SlideRight>
                        <Image src={"https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"}
                        alt=""
                        height={500}
                        width={300}
                        />
                    </SlideRight>
                </div>
            </div>
        </section>
    )
}

export default History