import { Link } from "react-router"
import Button from "./Button"

function SpecialOffer() {
    return (
        <div className="w-full bg-white">
            <div className="container-layout">
                <div className="grid grid-cols-2 py-28 gap-16">
                    <div className="flex justify-center items-center">
                        <img src="/air-jordan.png" alt="Air Jordan" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-5">
                            <span className="text-primary font-bold text-sm">Oferta especial</span>
                            <h2 className="text-darkgray-2 font-bold text-5xl">
                                Air Jordan edição de colecionador
                            </h2>
                            <p className="text-darkgray-2 text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum, doloribus consequuntur sapiente provident quos commodi dolorum in officia deserunt nostrum ipsum cupiditate maxime. Repellendus, vero soluta? Minima, laudantium sequi.
                            </p>
                        </div>
                        <Link to="/products">
                            <Button 
                                title="Ver Oferta" 
                                className="bg-primary w-52 mt-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer