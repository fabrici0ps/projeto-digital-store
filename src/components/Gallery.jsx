import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import arrowLeft from '../../src/assets/arrow-left.svg'
import arrowRight from '../../src/assets/arrow-right.svg'

function Gallery({
    className = "",
    width,
    height,
    radius = "0px",
    showThumbs = false,
    images = []
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    if (!images || images.length === 0) return null;

    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === images.length - 1;

    const containerStyle = {
        width: width ? `${width}px` : "100%",
        maxWidth: "100%",
    };

    const slideStyle = {
        height: height ? `${height}px` : "auto",
        borderRadius: radius,
    };

    return (
        <div className={`relative flex flex-col gap-4 ${className}`} style={containerStyle}>
            <div className="relative group">
                <Swiper
                    slidesPerView={1}
                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="w-full overflow-hidden shadow-sm bg-light-gray-3"
                    style={slideStyle}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center w-full h-full">
                            <img
                                src={item.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={{ borderRadius: radius }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isFirstSlide}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/50 rounded-full flex items-center justify-center shadow-md transition-opacity ${
                        isFirstSlide ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 cursor-pointer'
                    }`}
                >
                    <img src={arrowLeft} alt="Seta esquerda" className="w-5 h-5" />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isLastSlide}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/50 rounded-full flex items-center justify-center shadow-md transition-opacity ${
                        isLastSlide ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 cursor-pointer'
                    }`}
                >
                    <img src={arrowRight} alt="Seta direita" className="w-5 h-5" />
                </button>
            </div>

            {showThumbs && (
                <div className="flex justify-between items-center w-full mt-2 gap-2">
                    {images.map((item, index) => {
                        const isSelected = activeIndex === index;
                        return (
                            <div 
                                key={index}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                style={{ width: '117px', height: '95px' }}
                                className={`cursor-pointer transition-opacity flex-1 ${
                                    isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={item.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover block transition-all"
                                    style={{ 
                                        borderRadius: radius,
                                        border: isSelected ? '2px solid #C92071' : '2px solid transparent'
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Gallery;