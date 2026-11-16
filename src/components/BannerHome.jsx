import { Link } from "react-router"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import Button from "./Button"

function BannerHome() {
    const slidesBanner = [
        {
            id: 1,
            tag: "Melhores ofertas personalizadas",
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/white-sneakers.png"
        },
        {
            id: 2,
            tag: "Coleção Exclusiva",
            title: "Chegaram os novos Jordan 🏃‍♂️",
            description: "Aproveite os novos modelos com desconto de lançamento e frete grátis para todo o país.",
            image: "/white-sneakers.png"
        },
        {
            id: 3,
            tag: "Lançamento Exclusivo",
            title: "Novos Tênis Jordan 🚀",
            description: "Descubra a nova linha com tecnologia de amortecimento avançada e design urbano autêntico.",
            image: "/white-sneakers.png"
        },
        {
            id: 4,
            tag: "Moda Urbana",
            title: "Estilo e Conforto Diário ✨",
            description: "Encontre os modelos mais versáteis para acompanhar a sua rotina com personalidade.",
            image: "/white-sneakers.png"
        }
    ]

    return(
        <div className="w-full bg-lightgray-3">
            <div className="container-layout">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                >
                    {slidesBanner.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-col items-start">
                                    <span className="text-warning font-bold text-base">{slide.tag}</span>
                                    <h1 className="text-6xl text-darkgray-1 font-extrabold leading-tight">{slide.title}</h1>
                                    <p className="text-darkgray-2 text-lg">{slide.description}</p>
                                    <Link to="/products">
                                        <Button title="Ver Ofertas" className="bg-primary w-56 h-12 shadow-md mt-6" />
                                    </Link>
                                </div>
                                <div className="flex w-full justify-center items-center">
                                    <img 
                                        src={slide.image} 
                                        alt={slide.title} 
                                        className="w-full"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BannerHome