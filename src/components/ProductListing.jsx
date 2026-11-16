import { Link } from "react-router";
import ProductCard from "./ProductCard";

function ProductListing({products, cols = {}}) {

    const breakpoints = {
        default: {
            1: "grid-cols-1",
            2: "grid-cols-2"
        },
        lg: {
            3: "lg:grid-cols-3",
            4: "lg:grid-cols-4",
        }
    }

    const gridClasses = Object.entries(cols)
        .map(([breakpoint, quantity]) => {
            return breakpoints[breakpoint]?.[quantity];
        })
        .filter(Boolean)
        .join(" ");

    return (
        <div className={`grid ${gridClasses} w-full gap-4 pb-16`}>
            {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductCard
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