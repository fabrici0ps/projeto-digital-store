import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Gallery from "../components/Gallery"
import BuyBox from "../components/BuyBox"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import ProductsOptions from "../components/ProductOptions"
import api from "../services/api"

function ProductViewPage() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    async function findProduct(id) {
      try {
        const result = await api.get(`products/${id}`)
        setProduct(result.data)
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
      }
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }
    findProduct(id)
  }, [id])

  return (
    <div className="w-full">
      <div className="container-layout">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 py-20">
          <Gallery
            width={700}
            height={570}
            images={product.images}
            showThumbs
            radius="4px"
          />
          <BuyBox product={product}>
            <div className="flex flex-col gap-3 py-8">
              <ProductsOptions title="Tamanho" options={product.sizes} radius="4px" />
              <ProductsOptions title="Cor" options={product.colors} shape="circle" type="color" />
            </div>
          </BuyBox>
        </div>
        <Section 
          title="Produtos Relacionados" 
          link={
            { href: "/products", text: "Ver todos" }
          }
        >
          <ProductListing
            cols={{
              default: 2,
              lg: 4
            }} 
            products={
              [
                {
                  id: 1,
                  name: "K-Swiss V8 - Masculino",
                  image: "/product-card.png",
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                  discount: 25
                },
                {
                  id: 2,
                  name: "K-Swiss V8 - Masculino",
                  image: "/product-card.png",
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                  discount: 25
                },
                {
                  id: 3,
                  name: "K-Swiss V8 - Masculino",
                  image: "/product-card.png",
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 4,
                  name: "K-Swiss V8 - Masculino",
                  image: "/product-card.png",
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                }
              ]
            }
          />
        </Section>
      </div>
    </div>
  )
}
export default ProductViewPage