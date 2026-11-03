import { Link } from "react-router"
import Logo from "./Logo"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import CardFooter from "./CardFooter"

function Footer() {
    return (
        <footer className="bg-darkgray-1 flex flex-col px-28 pt-16 items-center text-base text-white">
            <div className="flex w-full items-start justify-between pb-8">
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
                <div className="flex gap-28">
                    <CardFooter 
                        title="Informação"
                        informations={[
                            { text: "Sobre Drip Store", link: "/about" },
                            { text: "Segurança", link: "/security" },
                            { text: "Wishlist", link: "/wishlist" },
                            { text: "Blog", link: "/blog" },
                            { text: "Trabalhe conosco", link: "/careers" },
                            { text: "Meus Pedidos", link: "/orders" }
                        ]}
                    />
                    <CardFooter 
                        title="Categorias" 
                        informations={[
                            { text: "Camisetas", link: "/categories/t-shirts" },
                            { text: "Calças", link: "/categories/pants" },
                            { text: "Bonés", link: "/categories/hats" },
                            { text: "Headphones", link: "/categories/accessories" },
                            { text: "Tênis", link: "/categories/sneakers" }
                        ]}
                    />
                    <CardFooter 
                        className="w-52" 
                        title="Contato" 
                        informations={[
                            { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" },
                            { text: "(85) 3051-3411", link: "tel:8530513411" }
                        ]}
                    />
                </div>
            </div>
            <hr className="w-full border-white/30" />
            <p className="py-6">
                @ 2024 Digital College
            </p>
        </footer>
    )
}

export default Footer;