import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import {IoChevronDown} from "react-icons/io5"

const Navbar = ({lang}) => {

    const router = useRouter()

    const [navScroll, setNavScroll] = useState(false)
    const [openLangSelection, setOpenLangSelection] = useState(false)

    const onScroll = useCallback(() => {
        if(window.scrollY >= window?.innerHeight) setNavScroll(true)
        else setNavScroll(false)
    })

    useEffect(() => {
        window.addEventListener("scroll", onScroll, {passive: true})
    }, [])

    return (
        <div className={`fixed  w-full py-4 ${navScroll ? "text-black bg-white shadow-lg" : "text-white bg-black bg-opacity-50"}`}>
            <div className="container text-lg flex justify-between">
                <div className={`uppercase font-bold w-fit border-b-4 ${navScroll? "border-black" : "border-white"}`}>
                    <Link href={"/"}>
                        <span className="text-beige">{lang.namepartone}</span>
                        &nbsp;
                        <span>{lang.nameparttwo}</span>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <nav className="flex gap-4">
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
                    </nav>
                    <div className="relative">
                        <div
                        onMouseEnter={() => setOpenLangSelection(true)}
                        onMouseLeave={() => setOpenLangSelection(false)}
                        className={`h-full cursor-pointer px-2 py-1 rounded-md flex items-center ${navScroll ? "bg-black text-white": "bg-white text-black"}`}
                        >
                            <span>{router.locale}</span>
                            <IoChevronDown 
                            className={`duration-200  ease-in-out ${openLangSelection ? "rotate-180  ": ""}`}
                            />
                        </div>
                        <div
                        onMouseEnter={() => setOpenLangSelection(true)}
                        onMouseLeave={() => setOpenLangSelection(false)}
                        className={`absolute -bottom-15 right-0 py-1 px-2 rounded-md ${openLangSelection ? "": "hidden"} ${navScroll ? "bg-black text-white" : "bg-white text-black"}`}>
                            <ul>
                                {Object.keys(lang.navbar.language).map((key, i) => {
                                    return (
                                        <li key={i}
                                        className="hover:text-beige cursor-pointer"
                                        onClick={() => router.push(router.pathname, router.asPath, {locale: lang.navbar.language[key].locale})}
                                        >
                                            {lang.navbar.language[key].value}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar