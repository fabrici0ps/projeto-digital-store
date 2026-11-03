function DiscountTag({ discount }) {
    return (
        <span className="absolute top-5 left-5 bg-discount px-[15px] py-[5px] rounded-full text-darkgray-2 text-sm font-bold">
            {discount}% OFF
        </span>
    )
}

export default DiscountTag