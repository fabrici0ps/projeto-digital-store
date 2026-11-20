import { Link } from "react-router"
import Logo from "./Logo"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import CardFooter from "./CardFooter"

function Footer() {
    return (
        <footer className="bg-darkgray-1 w-full">
            <div className="container-layout">
                <div className="flex flex-col pt-16 items-center text-base text-white">
                    <div className="md:flex md:w-full items-start justify-between pb-8">
                        <div className="w-80">
                            <Logo location="footer" className="mb-9" />
                            <p className="mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <div className="flex mb-10 md:mb-0 gap-7">
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
                        <div className="grid grid-cols-2 md:flex gap-10 md:gap-28">
                            <CardFooter 
                                title="Informação"
                                informations={[
                                    { text: "Sobre Drip Store", link: "/about", target: "_self" },
                                    { text: "Segurança", link: "/security", target: "_self" },
                                    { text: "Wishlist", link: "/wishlist", target: "_self" },
                                    { text: "Blog", link: "/blog", target: "_self" },
                                    { text: "Trabalhe conosco", link: "/careers", target: "_self" },
                                    { text: "Meus Pedidos", link: "/orders", target: "_self" }
                                ]}
                            />
                            <CardFooter 
                                title="Categorias" 
                                informations={[
                                    { text: "Camisetas", link: "/categories/t-shirts", target: "_self" },
                                    { text: "Calças", link: "/categories/pants", target: "_self" },
                                    { text: "Bonés", link: "/categories/hats", target: "_self" },
                                    { text: "Headphones", link: "/categories/accessories", target: "_self" },
                                    { text: "Tênis", link: "/categories/sneakers", target: "_self" }
                                ]}
                            />
                            <CardFooter 
                                className="w-52" 
                                title="Contato" 
                                informations={[
                                    { 
                                        text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
                                        link: "https://maps.app.goo.gl/pw9TfCfNQsLyrPHv5",
                                        target: "_blank"
                                    },
                                    { text: "(85) 3051-3411", link: "tel:8530513411", target: "_self" }
                                ]}
                            />
                        </div>
                    </div>
                    <hr className="w-full border-white/30" />
                    <p className="py-6">
                        @ 2026 Digital College
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;