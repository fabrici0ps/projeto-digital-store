import BannerHome from "../components/BannerHome"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import CollectionCardList from "../components/CollectionCardList"
import CollectionItem from "../components/CollectionItem"

import productCard from "/product-card.png"

import Collection1 from "/collection-1.png"
import Collection2 from "/collection-2.png"
import Collection3 from "/collection-3.png"

import Tshirt from "../assets/tshirt.svg"
import Pants from "../assets/pants.svg"
import Headphones from "../assets/headphones.svg"
import Sneakers from "../assets/sneakers.svg"
import SpecialOffer from "../components/SpecialOffer"

import bannerImage from "/white-sneakers.png"

function HomePage() {
  return (
    <>
      <BannerHome
        images={[bannerImage,bannerImage,bannerImage]}
        showThumbs={true}
        radius="10px"
      />

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
                    image: Collection1,
                    discount: 30
                  },
                  {
                    name: "Coleção 2",
                    image: Collection2,
                    discount: 30
                  },
                  {
                    name: "Coleção 3",
                    image: Collection3,
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
              cols={4} 
              products={
                [
                  {
                    id: 1,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                    discount: 25
                  },
                  {
                    id: 2,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                    discount: 25
                  },
                  {
                    id: 3,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 4,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 5,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 6,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 7,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
                    category: "Tênis",
                    price: 200,
                    priceDiscount: 149.9,
                  },
                  {
                    id: 8,
                    name: "K-Swiss V8 - Masculino",
                    image: productCard,
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