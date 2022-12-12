import Link from "next/link"
import { useRouter } from "next/router"

const Footer = ({lang}) => {

    const router = useRouter()

    return(
        <footer className="bg-gray-600 py-8 text-white" id="contact">
            <div className="container">
                <div className={`uppercase font-bold w-fit border-b-4 text-white mb-6`}>
                    <Link href={"/"}>
                        <span className="text-beige">{lang.namepartone}</span>
                        &nbsp;
                        <span>{lang.nameparttwo}</span>
                    </Link>
                </div>
                <div className="flex gap-16">
                    <div>
                        <h3 className="pb-1 border-b-2 w-fit font-bold text-lg mb-2">Links</h3>
                        <ul className="grid ">
                        {Object.keys(lang.navbar.nav).map((key, i) => {
                            if(router.pathname === "/") {
                                return (
                                    <Link key={i} 
                                    href={lang.navbar.nav[key].external ? lang.navbar.nav[key].linkto : `#${lang.navbar.nav[key].linkto}`}
                                    className={"font-semibold duration-300 hover:text-beige"}
                                    >
                                        {lang.navbar.nav[key].value}
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link key={i} 
                                    href={lang.navbar.nav[key].external ? lang.navbar.nav[key].linkto : `/#${lang.navbar.nav[key].linkto}`}
                                    className={"font-semibold duration-300 hover:text-beige"}
                                    >
                                        {lang.navbar.nav[key].value}
                                    </Link>
                                )
                            }
                        })}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="pb-1 border-b-2 w-fit font-bold text-lg mb-2">{lang.navbar.nav.contact.value}</h3>
                        <a href="mailto:contact@phoenixcafe.com" className="text-beige" >contact@phoenixcafe.com</a>
                        <span>Große Neugasse 42</span>
                        <span>50667 Köln</span>
                    </div>
                </div>
            </div>
            <div className="text-center">&copy; {new Date().getFullYear()} - Phoenix Cafe</div>
        </footer>
    )
}

export default Footer