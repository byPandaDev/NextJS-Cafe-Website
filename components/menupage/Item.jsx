const MenuItem = ({title, price}) => {

    return (
        <div className="flex justify-between font-MarckScript text-xl">
            <div>
                <h4 className="max-w-[90%]">{title}</h4>
            </div>
            <div>
                <span className="font-bold">{price}€</span>
            </div>
        </div>
    )
}

export default MenuItem