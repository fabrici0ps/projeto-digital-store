import Button from "../components/Button"
import StarIcon from "../assets/star-icon.svg?react"

function BuyBox({product, children}) {
    return (
        <div className="w-full">
            <header className="flex flex-col gap-2 mb-2">
                <h2 className="text-3xl text-darkgray-1 font-bold">
                    {product.name}
                </h2>
                <div className="flex gap-3 text-darkgray-3 text-xs">
                    <span>{product.category}</span> |
                    <span>{product.brand}</span> |
                    <span>REF: {product.reference}</span>
                </div>
            </header>
            <div className="flex items-center gap-2">
                <span className="flex gap-1 justify-center items-center rounded bg-warning text-white font-bold px-2 py-1"
                >
                    {product.rating}
                    <StarIcon 
                        className="w-4 h-4"
                        fill="white"
                    />
                </span>
                <span className="text-lightgray-1 text-sm">({product.reviews} avaliações)</span>
            </div>
            <div className="flex items-baseline gap-2 py-5">
                <span className="text-darkgray-2 font-bold text-3xl">R$ {product.priceDiscount}</span>
                <del className="text-lightgray-2 text-base">R$ {product.price}</del>
            </div>
            <section className="flex flex-col gap-1">
                <h2 className="text-lightgray-1 text-base font-bold">Descrição do produto</h2>
                <p className="text-darkgray-2 text-sm">{product.description}</p>
            </section>
            {children}
            <Button title="Comprar" className="bg-warning w-56 h-12 uppercase" />
        </div>
    )
}

export default BuyBox