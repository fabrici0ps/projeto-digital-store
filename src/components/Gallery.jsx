import { Link } from "react-router"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import bannerImage from "/white-sneakers.png"
import Button from "./Button"

function Gallery() {
    const slidesBanner = [
        {
            id: 1,
            tag: "Melhores ofertas personalizadas",
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: bannerImage
        },
        {
            id: 2,
            tag: "Coleção Exclusiva",
            title: "Chegaram os novos Jordan 🏃‍♂️",
            description: "Aproveite os novos modelos com desconto de lançamento e frete grátis para todo o país.",
            image: bannerImage
        },
        {
            id: 3,
            tag: "Lançamento Exclusivo",
            title: "Novos Tênis Jordan 🚀",
            description: "Descubra a nova linha com tecnologia de amortecimento avançada e design urbano autêntico.",
            buttonLink: "/products",
            image: bannerImage
        },
        {
            id: 4,
            tag: "Moda Urbana",
            title: "Estilo e Conforto Diário ✨",
            description: "Encontre os modelos mais versáteis para acompanhar a sua rotina com personalidade.",
            buttonLink: "/products",
            image: bannerImage,
        }
    ]

    return(
        <div className="w-full bg-lightgray-3 px-28 py-12">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {slidesBanner.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex flex-row items-center justify-between gap-8">
                            <div className="flex flex-col items-start max-w-lg space-y-4">
                                <span className="text-warning font-bold text-base">{slide.tag}</span>
                                <h1 className="text-6xl text-darkgray-1 font-extrabold leading-tight">{slide.title}</h1>
                                <p className="text-darkgray-2 text-lg">{slide.description}</p>
                                <Link to="/products">
                                    <Button title="Ver Ofertas" className="bg-primary w-56 h-12 shadow-md mt-6" />
                                </Link>
                            </div>
                            <div className="relative flex justify-center items-center">
                                <img 
                                    src={slide.image} 
                                    alt={slide.title} 
                                    className="w-full max-w-lg object-contain"/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Gallery