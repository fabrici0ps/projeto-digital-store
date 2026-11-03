import ProductCard from "./ProductCard";

function ProductListing({products}) {
    return (
        <div className="grid grid-cols-4 w-full gap-4">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    image={product.image}
                    discount={product.discount}
                />
            ))}
        </div>
    )
}

export default ProductListing