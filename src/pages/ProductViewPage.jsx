import { useParams } from "react-router"
import Gallery from "../components/Gallery"
import BuyBox from "../components/BuyBox"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"

function ProductViewPage() {
  const { id } = useParams()

  return (
    <div className="w-full">
      <div className="container-layout">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 py-20">
          <Gallery
            width={700}
            height={570}
            images={[
              {"src": "/produc-image-1.jpeg"},
              {"src": "/produc-image-2.jpeg"},
              {"src": "/produc-image-3.jpeg"},
              {"src": "/produc-image-4.jpeg"},
              {"src": "/produc-image-5.jpeg"},
            ]}
            showThumbs
            radius="4px"
          />
          <BuyBox/>
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