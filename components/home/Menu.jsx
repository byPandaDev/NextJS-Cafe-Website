import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { SlideLeft, SlideRight } from "../Motions"

const Menu = ({lang}) => {

    const router = useRouter()

    return (
        <section className="container bg-white py-16" id="menu">
            <div className="w-fit flex flex-col-reverse gap-12 mx-auto h-fit lg:flex-row">
            <div className="flex gap-12">
                    
                    <SlideLeft>
                        <Image src={"https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                        alt=""
                        height={500}
                        width={300}
                        />
                    </SlideLeft>
                    <SlideRight>
                        <Image src={"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                        alt=""
                        height={500}
                        width={300}
                        />
                    </SlideRight>
                </div>
                <div className="h-4rem text-center flex flex-col justify-center items-center text-4xl">
                    <h2 className="p-0 h-fit">
                        <span className="text-beige block font-MarckScript font-bold">{lang.menu.tasty}</span>
                        <span className="font-semibold">{lang.menu.menu}</span>
                    </h2>
                    <Image src={"/img/trenner-black.png"} width={400} height={200} alt="" className="my-4"/>
                    <p className="text-lg w-55ch">
                        {lang.menu.text}
                    </p>
                    <Link href={"/menu"} locale={router.locale}
                        className="text-beige underline text-lg font-semibold mt-4"
                    >
                    {lang.menu.button}
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Menu