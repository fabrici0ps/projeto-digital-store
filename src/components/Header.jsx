import { Link, NavLink } from "react-router";
import Logo from "./Logo"
import SearchIcon from "../assets/search-icon.svg"
import MiniCart from "../assets/mini-cart.svg"
import Button from "./Button";

function Header() {
    const linkActive = ({isActive}) => 
        isActive 
            ? "text-primary font-bold border-b-2 border-primary pb-2" 
            : "text-darkgray-2"

    return (
        <header className="bg-white flex flex-col gap-10 px-[100px] py-8">
            <div className="flex gap-7 items-center justify-between">
                <Link to="/">
                    <Logo location="header" />
                </Link>
                <div className="bg-darkgray-2/5 flex items-center rounded-lg px-4 py-3 flex-1">
                    <input 
                        className="bg-transparent focus:outline-none w-full text-sm text-darkgray-2 placeholder:text-darkgray-3/60" 
                        type="text" 
                        placeholder="Pesquisar produto..." 
                    />
                    <Link to="#">
                        <img className="w-5 h-5" src={SearchIcon} alt="Search Icon" />
                    </Link>
                </div>
                <Link to="#" className="text-darkgray-2 text-base underline whitespace-nowrap">Cadastre-se</Link>
                <div className="flex gap-16 items-center">
                    <Button className="bg-primary w-28" title="Entrar"/>
                    <div className="cursor-pointer relative">
                        <img src={MiniCart} alt="Mini Cart" />
                        <div className="bg-error w-4 h-4 rounded-full text-xs font-bold text-white text-center absolute top-[-8px] right-[-8px]">
                            0
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-8 text-base">
                        <li>
                            <NavLink className={linkActive} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={linkActive} to="products">Produtos</NavLink>
                        </li>
                        <li>
                            <NavLink className={linkActive} to="categories">Categorias</NavLink>
                        </li>
                        <li>
                            <NavLink className={linkActive} to="orders">Meus Pedidos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;