import { Link } from "react-router"
import Logo from "./Logo"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import CardFooter from "./CardFooter"

function Footer() {
    return (
        <footer className="bg-darkgray-1 flex flex-col px-[100px] pt-16 items-center text-[16px] text-white">
            <div className="flex w-full justify-between pb-8 border-b-2 border-white/30">
                <div className="w-80">
                    <Logo location="footer" className="mb-9" />
                    <p className="mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex gap-7">
                        <Link to="https://www.facebook.com" target="_blank">
                            <img src={FacebookIcon} alt="Facebook" />
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank">
                            <img src={InstagramIcon} alt="Instagram" />
                        </Link>
                        <Link to="https://x.com" target="_blank">
                            <img src={TwitterIcon} alt="Twitter" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-28">
                        <CardFooter title="Informação">
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus Pedidos</li>
                        </CardFooter>
                        <CardFooter title="Categorias">
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </CardFooter>
                        <CardFooter className="w-52" title="Contato">
                            <li>
                                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                            </li>
                            <li><Link to="tel:8530513411">(85) 3051-3411</Link></li>
                        </CardFooter>
                    </div>
                </div>
            </div>
            <div className="py-6">
                @ 2022 Digital College
            </div>
        </footer>
    )
}

export default Footer;