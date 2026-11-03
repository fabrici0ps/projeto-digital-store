import Gallery from "../components/Gallery"
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

function HomePage() {
  const items = [
    { title: "Camisetas", image: Tshirt },
    { title: "Calças", image: Pants },
    { title: "Bonés", image: Pants },
    { title: "Headphones", image: Headphones },
    { title: "Tẽnis", image: Sneakers }
  ]
  return (
    <>
      <Gallery />

      <Section title="Coleções em destaque">
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

      <Section title="Coleções em destaque" textAlign="center">
        <div className="flex gap-12 justify-center">
          {items.map((item, index) => (
            <CollectionItem 
              key={index} 
                title={item.title}
                image={item.image}
            />
          ))}
        </div>
      </Section>
        
      <Section
        title="Produtos em alta"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing 
          products={
            [
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
                discount: 25
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
                discount: 25
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
              },
              {
                name: "K-Swiss V8 - Masculino",
                image: productCard,
                category: "Tênis",
                price: 200,
                priceDiscount: 149.9,
              },
              {
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
      <SpecialOffer />
    </>
  )
}
export default HomePage