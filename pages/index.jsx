import { GetCurrentLanguage } from "../api/getLanguage";
import Hero from "../components/home/Hero";
import History from "../components/home/History";
import HomeHero from "../components/home/Home";
import Menu from "../components/home/Menu";
import Order from "../components/home/Order";

export default function Home() {

  const lang = GetCurrentLanguage()

  return (
    <>
      <HomeHero lang={lang} />
      <History lang={lang} />
      <Hero lang={lang} background={"bg-bg1"} number={"one"}/>
      <Menu lang={lang} />
      <Hero lang={lang} background={"bg-bg2"} number={"two"}/>
      <Order lang={lang} />
    </>
  )
}
