import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";
import api from "../services/api"

function ProductListing({cols = {}, limit}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await api.get("products")
                setProducts(response.data)
            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const displayProducts = limit ? products.slice(0, limit) : products

    if (loading) {
        return <p className="text-center py-8">Carregando produtos...</p>;
    }

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
            {displayProducts.map((product) => (
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