import DiscountTag from "./DiscountTag"

function ProductCard({ name, category, price, priceDiscount, image, discount }) {
    return (
        <div className="relative mb-10">
            {discount && (
                <DiscountTag discount={discount} />
            )}
            <div className="flex justify-center items-center bg-white w-full h-80 rounded-[4px] mb-[18px] shadow-[6px_16px_30px_rgba(0,0,0,0.05)]">
                <img src={image} alt={name} />
            </div>
            <p className="text-lightgray-1 text-xs font-bold">{category}</p>
            <p className="text-darkgray-2 text-2xl">{name}</p>
            <div className="flex gap-2">
                <span className="text-lightgray-1 text-2xl line-through">${price}</span>
                <span className="text-darkgray-1 text-2xl font-bold">${priceDiscount}</span>
            </div>
        </div>
    )
}

export default ProductCard