import { useRouter } from "next/router"
import en from "../language/en.json"
import de from "../language/de.json"

const GetCurrentLanguage = () => {
    let localeLang
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        localeLang = localStorage.getItem("lang")
    }
    const router = useRouter()
    let lang 
    if(localeLang === "en") lang = en
    if(localeLang === "de") lang = de
    if(router.locale === "en") lang = en 
    if(router.locale === "de") lang = de 
    return lang
}
const GetLocaleLang = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const localeLang = localStorage.getItem("lang")
        return localeLang
    }
}
const SetLanguage = (lang) => {
    if (typeof window !== 'undefined') {
        const item = localStorage.setItem("lang", lang)
    }
}

export {GetCurrentLanguage, SetLanguage, GetLocaleLang}