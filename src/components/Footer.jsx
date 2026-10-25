import Logo from "./Logo"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import CardFooter from "./CardFooter"

function Footer() {
    return (
        <footer className="bg-darkgray-1 px-28 pt-16 flex flex-col items-center text-[16px] text-white">
            <div className="flex w-full gap-52 pb-8 border-b-2 border-white/30">
                <div className="w-80">
                    <Logo location="footer" className="mb-9" />
                    <p className="mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex gap-7">
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://x.com" target="_blank">
                            <img src={TwitterIcon} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-between w-full">
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
                    </div>
                    <CardFooter className="w-52" title="Contato">
                        <li>
                            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                        </li>
                        <li><a href="tel:8530513411">(85) 3051-3411</a></li>
                    </CardFooter>
                </div>
            </div>
            <div className="py-6">
                @ 2022 Digital College
            </div>
        </footer>
    )
}

export default Footer;