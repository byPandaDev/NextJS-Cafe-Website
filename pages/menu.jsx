import { GetCurrentLanguage } from "../api/getLanguage";
import MenuItem from "../components/menupage/Item";

const Menu = () => {
    
    const lang = GetCurrentLanguage()

    return (
        <main>
            <section className="h-96 grid place-items-center bg-menu text-white bg-fixed">
                <h2 className="text-2xl md:text-6xl font-bold">{lang.menupage.hero}</h2>
            </section>
            <section className="py-16">
                <div className="container flex items-center flex-col">
                    <span className="text-gray-400">*Jedentag wechselnde Kuchen*</span>
                    <h3 className="font-MarckScript text-beige text-4xl underline decoration-black">{lang.menupage.cake}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-4/6 gap-x-32 gap-y-8 mt-12">
                        <MenuItem title={"Zupfkuchen"} price={"4,50"}/>
                        <MenuItem title={"Schokosahne Torte"} price={"4,50"}/>
                        <MenuItem title={"Pflaumenkuchen"} price={"3,80"}/>
                        <MenuItem title={"Käsekuchen"} price={"3,70"}/>
                        <MenuItem title={"Apfelkuchen"} price={"3,20"}/>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container flex items-center flex-col">
                    <h3 className="font-MarckScript text-beige text-4xl underline decoration-black">{lang.menupage.waffel}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-4/6 gap-x-32 gap-y-8 mt-12">
                        <MenuItem title={"Waffel mit Puderzucker"} price={"3,60"}/>
                        <MenuItem title={"Waffel mit Puderzucker u. Sahne"} price={"4,30"}/>
                        <MenuItem title={"Waffel mit Puderzucker & Heißen Kirschen"} price={"4,60"}/>
                        <MenuItem title={"Waffeln mit Puderzucken u. Heißen Kirschen u. Sahne"} price={"5,30"}/>
                        <MenuItem title={"Waffeln mit Vanille-Eis"} price={"4,20"}/>
                        <MenuItem title={"Waffeln mit Vanille-Eis & Heißen Kirschen"} price={"4,80"}/>
                        <MenuItem title={"Waffeln mit Vanille-Eis & Heißen Kirschen u. Sahne"} price={"5,50"}/>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container flex items-center flex-col">
                    <h3 className="font-MarckScript text-beige text-4xl underline decoration-black">{lang.menupage.breakfast}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-4/6 gap-x-32 gap-y-8  mt-12">
                        <MenuItem title={"Klassiches Buttercroissant"} price={"4,90"}/>
                        <MenuItem title={"Brotkorb mit Butter und Aufschnitt"} price={"6,90"}/>
                        <MenuItem title={"2 halbe belegte Brötchen / gekochtes Land-Ei / Orangensaft"} price={"9,90"}/>
                        <MenuItem title={"Rühr -o der Spiegelein mit Bacon / Brötchen & Croissant / Butter / Orangensaft"} price={"9,90"}/>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container flex items-center flex-col">
                    <h3 className="font-MarckScript text-beige text-4xl underline decoration-black">{lang.menupage.coffee}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-4/6 gap-x-32 gap-y-8  mt-12">
                        <MenuItem title={"Café Creme"} price={"3,20"}/>
                        <MenuItem title={"Cappuccino"} price={"3,50"}/>
                        <MenuItem title={"Espresso"} price={"2,50"}/>
                        <MenuItem title={"Latte Macchiato"} price={"3,90"}/>
                        <MenuItem title={"Café au lait"} price={"3,90"}/>
                        <MenuItem title={"Filterkaffee / klein"} price={"2,90"}/>
                        <MenuItem title={"Filterkaffee / groß"} price={"4,50"}/>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container flex items-center flex-col">
                    <h3 className="font-MarckScript text-beige text-4xl underline decoration-black">{lang.menupage.drinks}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-4/6 gap-x-32 gap-y-8  mt-12">
                        <MenuItem title={"Frisch gepresster Orangensaft 0,2l"} price={"4,95"}/>
                        <MenuItem title={"Taunusquelle medium | still 0,25l"} price={"3,20"}/>
                        <MenuItem title={"Taunusquelle medium | still 0,50l"} price={"5,00"}/>
                        <MenuItem title={"Bitter Lemon | Ginger Ale 0,2l"} price={"3,90"}/>
                        <MenuItem title={"Apfelsaft 0,3l"} price={"3,20"}/>
                        <MenuItem title={"Afri Cola | Afri Cola Zero 0,33l"} price={"3,20"}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Menu