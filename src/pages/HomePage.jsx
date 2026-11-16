import BannerHome from "../components/BannerHome"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import CollectionCardList from "../components/CollectionCardList"
import CollectionItem from "../components/CollectionItem"

import Tshirt from "../assets/tshirt.svg"
import Pants from "../assets/pants.svg"
import Headphones from "../assets/headphones.svg"
import Sneakers from "../assets/sneakers.svg"
import SpecialOffer from "../components/SpecialOffer"

function HomePage() {
  return (
    <>
      <BannerHome/>

      <div className="container-layout">
        <Section 
          title="Coleções em destaque"
          className="pt-11 pb-28"
        >
            <CollectionCardList 
              collections={
                [
                  {
                    name: "Coleção 1",
                    image: "/collection-1.png",
                    discount: 30
                  },
                  {
                    name: "Coleção 2",
                    image: "/collection-2.png",
                    discount: 30
                  },
                  {
                    name: "Coleção 3",
                    image: "/collection-3.png",
                    discount: 30
                  }
                ]
              } 
            />
        </Section>
      </div>

      <div className="container-layout">
        <Section 
          title="Coleções em destaque" 
          textAlign="center"
          className="pb-32"
        >
            <CollectionItem
                items={
                  [
                    { title: "Camisetas", image: Tshirt },
                    { title: "Calças", image: Pants },
                    { title: "Bonés", image: Pants },
                    { title: "Headphones", image: Headphones },
                    { title: "Tẽnis", image: Sneakers }
                  ]
                }            
            />
        </Section>
      </div>
        
      <div className="container-layout">
        <Section
          title="Produtos em alta"
          link={
            { text: "Ver todos", href: "/products" }
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
                  },
                  {
                    id: 5,
                    name: "K-Swiss V8 - Masculino",
                    image: "/product-card.png",
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 6,
                    name: "K-Swiss V8 - Masculino",
                    image: "/product-card.png",
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 7,
                    name: "K-Swiss V8 - Masculino",
                    image: "/product-card.png",
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 8,
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
      <SpecialOffer />
    </>
  )
}
export default HomePage