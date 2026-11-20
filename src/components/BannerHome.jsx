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
        <div className="w-full bg-lightgray-3 py-8 md:py-12">
            <div className="container-layout">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoHeight={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="pb-4 md:pb-14"
                >
                    {slidesBanner.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
                                <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2">
                                    <span className="text-primary md:text-warning font-bold text-sm md:text-base">
                                        {slide.tag}
                                    </span>
                                    <h1 
                                        className="text-3xl md:text-6xl text-darkgray-1 font-extrabold leading-tight mt-2 md:mt-3"
                                    >
                                        {slide.title}
                                    </h1>
                                    <p className="text-darkgray-2 text-sm md:text-lg mt-3 md:mt-4 max-w-md md:max-w-none">
                                        {slide.description}
                                    </p>
                                    <Link to="/products" className="w-full md:w-auto mt-6">
                                        <Button title="Ver Ofertas" className="bg-primary w-full md:w-56 h-12 shadow-md" />
                                    </Link>
                                </div>
                                <div className="flex w-full md:w-1/2 justify-center items-center">
                                    <img 
                                        src={slide.image} 
                                        alt={slide.title} 
                                        className="w-80 md:w-full max-w-lg object-contain"
                                    />
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