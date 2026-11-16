import Button from "../components/Button"
import StarIcon from "../assets/star-icon.svg?react"

function BuyBox({product, children}) {
    return (
        <div className="w-full">
            <header className="flex flex-col gap-2 mb-2">
                <h2 className="text-3xl text-darkgray-1 font-bold">
                    Tênis Nike Revolution 6 Next Nature Masculino
                </h2>
                <div className="flex gap-3 text-darkgray-3 text-xs">
                    <span>Categoria</span>
                    <span>Marca</span>
                    <span>REF: 5664785</span>
                </div>
            </header>
            <div className="flex items-center gap-2">
                <span className="flex gap-1 justify-center items-center rounded bg-warning text-white font-bold px-2 py-1"
                >
                    4.75
                    <StarIcon 
                        className="w-4 h-4"
                        fill="white"
                    />
                </span>
                <span className="text-lightgray-1 text-sm">(90 avaliações)</span>
            </div>
            <div className="flex items-baseline gap-2 my-5">
                <span className="text-darkgray-2 font-bold text-3xl">$120</span>
                <del className="text-lightgray-2 text-base">$100</del>
            </div>
            <section className="flex flex-col gap-1">
                <h2 className="text-lightgray-1 font-bold">Descrição do produto</h2>
                <p className="text-darkgray-2 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi excepturi doloribus laboriosam, atque tempore quidem quae fugiat necessitatibus aliquid alias veritatis at quis sequi minima laudantium dignissimos doloremque incidunt!
                </p>
            </section>
            {children}
            <Button title="Comprar" className="bg-warning w-56 h-12 uppercase" />
        </div>
    )
}

export default BuyBox