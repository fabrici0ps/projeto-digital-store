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
              className="grid-cols-1 md:grid-cols-3 gap-3" 
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
          <div className="flex justify-start md:justify-center overflow-x-auto overscroll-x-contain md:overflow-visible pb-2 md:pb-0 no-scrollbar">
            <CollectionItem
              className="gap-5"
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
          </div>
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
              limit={8}
            />
        </Section>
      </div>
      <SpecialOffer />
    </>
  )
}
export default HomePage