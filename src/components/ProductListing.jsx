import { Link } from "react-router";
import ProductCard from "./ProductCard";

function ProductListing({products, cols}) {
    return (
        <div className={`grid grid-cols-${cols} w-full gap-4 pb-16`}>
            {products.map((product) => (
                <Link to={`/products/${product.id}`}>
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        image={product.image}
                        discount={product.discount}
                    />
                </Link>
            ))}
        </div>
    )
}

export default ProductListing