import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router"

import Logo from "./Logo"
import SearchIcon from "../assets/search-icon.svg?react"
import SearchIconAc from "../assets/search-icon-active.svg?react"
import MiniCart from "../assets/mini-cart.svg?react"
import MenuIcon from "../assets/menu.svg?react"
import CloseIcon from "../assets/close.svg?react"

function Header() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    const [searchOpen, setSearchOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const linkActive = ({ isActive }) =>
        isActive
            ? "text-primary text-base font-bold border-b-2 border-primary pb-1"
            : "text-darkgray-2 text-base"      

    function handleSearch(e) {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/products?filter=${search}`)
        setSearch("");
        setSearchOpen(false)
        setMenuOpen(false)
    }

    return (
        <header className="bg-white w-full">

            <div className="container-layout">

                <div className="
                    relative
                    grid grid-cols-[1fr_auto_1fr]
                    md:grid-cols-[auto_minmax(0,1fr)_auto]
                    items-center gap-4 min-h-24 py-5 md:py-8
                ">

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="col-start-1 row-start-1 md:hidden"
                    >
                        <MenuIcon/>
                    </button>

                    <Link
                        to="/"
                        className="justify-self-center md:justify-self-start md:col-start-1"
                    >
                        <Logo location="header" />
                    </Link>

                    <form
                        onSubmit={handleSearch}
                        className={`
                            col-span-3 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1
                            bg-darkgray-2/5 items-center rounded-lg px-5 md:px-6
                            transition-all duration-300 ease-in-out
                            ${searchOpen 
                                ? "flex max-h-20 opacity-100 py-4" 
                                : "flex max-h-0 opacity-0 overflow-hidden py-0 pointer-events-none"}
                            md:!flex md:!max-h-20 md:!opacity-100 md:!py-4
                        `}
                    >
                        <input
                            className="
                                bg-transparent focus:outline-none w-full text-base 
                                text-darkgray-2 placeholder:text-darkgray-3/60"
                            type="text"
                            placeholder="Pesquisar produto..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button type="submit">
                            <SearchIcon/>
                        </button>
                    </form>

                    <div className="col-start-3 row-start-1 flex items-center justify-end gap-4 md:gap-10">

                        <button
                            type="button"
                            onClick={() => {
                                setSearchOpen(!searchOpen)
                                setMenuOpen(false)
                            }}
                            className="md:hidden"
                        >
                            {searchOpen ? <SearchIconAc/> : <SearchIcon/>}
                        </button>

                        <Link
                            to="/register"
                            className="hidden md:block text-darkgray-2 text-base underline whitespace-nowrap"
                        >
                            Cadastre-se
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="
                                hidden md:flex items-center justify-center bg-primary 
                                w-28 h-10 rounded-[4px] font-bold text-white text-sm"
                        >
                            Entrar
                        </Link>

                        <div className="relative cursor-pointer">
                            <MiniCart/>
                            <span className="
                                absolute -top-2 -right-2 bg-error w-4 h-4 
                                rounded-full text-xs font-bold text-white flex 
                                items-center justify-center
                            ">
                                2
                            </span>
                        </div>

                    </div>

                </div>

                <nav className="hidden md:block pb-8">
                    <ul className="flex gap-8 text-base">

                        <li>
                            <NavLink end className={linkActive} to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={linkActive} to="/products">
                                Produtos
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={linkActive} to="/categories">
                                Categorias
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={linkActive} to="/orders">
                                Meus Pedidos
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>

            <div
                className={`
                    fixed inset-0 z-50 md:hidden transition-opacity duration-300
                    ${menuOpen 
                        ? "opacity-100" 
                        : "opacity-0 pointer-events-none"
                    }
                `}
            >

                <button
                    type="button"
                    aria-label="Fechar menu"
                    onClick={() => setMenuOpen(false)}
                    className="absolute inset-0 w-full h-full bg-black/40"
                />

                <aside
                    className={`
                        absolute top-0 left-0 w-4/5 max-w-80 h-full 
                        bg-white p-4 flex flex-col transition-transform duration-300
                        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                    `}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu de navegação"
                >

                    <div className="flex items-center justify-between h-12 mb-7">

                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <CloseIcon/>
                        </button>

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Logo location="header" />
                        </Link>

                    </div>

                    <nav className="flex flex-col gap-4">
                        <span className="text-base text-darkgray-2 font-bold">Páginas</span>

                        <ul className="flex flex-col gap-4 text-sm">
                            <li>
                                <NavLink
                                    end
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                    className={linkActive}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    onClick={() => setMenuOpen(false)}
                                    className={linkActive}
                                >
                                    Produtos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/categories"
                                    onClick={() => setMenuOpen(false)}
                                    className={linkActive}
                                >
                                    Categorias
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/orders"
                                    onClick={() => setMenuOpen(false)}
                                    className={linkActive}
                                >
                                    Meus Pedidos
                                </NavLink>
                            </li>
                        </ul>

                    </nav>

                    <div className="mt-auto border-t border-darkgray-3/20 pt-4 pb-4 flex flex-col gap-3">
                        
                         <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center bg-primary w-full h-10 rounded-[4px] font-bold text-white text-sm"
                        >
                            Entrar
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                            className="text-center text-darkgray-2 text-sm underline"
                        >
                            Cadastre-se
                        </Link>
                        
                    </div>  

                </aside>

            </div>

        </header>
    );
}

export default Header;