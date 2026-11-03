import { Link } from "react-router"
import Button from "./Button"

function SpecialOffer() {
    return (
        <div className="bg-white flex w-full justify-between px-28 py-28">
            <div className="flex justify-center items-center w-96 h-96">
                IMAGEM
            </div>
            <div className="flex flex-col gap-20">
                <span className="text-primary font-bold text-sm">Oferta especial</span>
                <h2 className="text-darkgray-2 font-bold text-5xl">
                    Air Jordan edição de colecionador
                </h2>
                <p className="text-darkgray-2 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum, doloribus consequuntur sapiente provident quos commodi dolorum in officia deserunt nostrum ipsum cupiditate maxime. Repellendus, vero soluta? Minima, laudantium sequi.
                </p>
                <Link to="/products">
                    <Button 
                        title="Ver Oferta" 
                        className="bg-primary w-52 mt-2"
                    />
                </Link>
            </div>
        </div>
    )
}

export default SpecialOffer