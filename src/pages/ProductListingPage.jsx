import { useSearchParams } from "react-router"
import FilterGroup from "../components/FilterGroup"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"

import productCard from "/product-card.png"

function ProductListingPage() {
  const {filter} = useSearchParams()

  return (
    <div className="w-full">
      <section className="container-layout">
        <div className="flex flex-row items-center justify-between w-full py-10 text-darkgray-2 text-base">
          <p><span className="font-bold">Resultados para Tênis - </span>389 produtos</p>
          <div className="flex gap-2 border border-darkgray-2 rounded p-4">
            <label 
              htmlFor="order"
              className="font-bold"            
            >
              Ordenar por:
            </label>
            <select id="order" name="order" className="pr-10 bg-transparent">
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>
        </div>
        <div className="text-darkgray-2 items-start grid grid-cols-[308px_minmax(0,1fr)] gap-7">
          <aside className="p-8 bg-white rounded">
            <p className="text-base font-bold pb-5">Filtrar por</p>
            <hr className="border-lightgray-2"/>
            <FilterGroup
              title="Marca"
              list={[
                {name: "Addidas"},
                {name: "Calenciaga"},
                {name: "K-Swiss"},
                {name: "Nike"},
                {name: "Puma"}
              ]}
            />
            <FilterGroup 
            title="Categoria"
            list={[
              {name: "Esporte e Lazer"},
              {name: "Casual"},
              {name: "Utilitário"},
              {name: "Corrida"}
            ]}
            />
            <FilterGroup 
              title="Genêro"
              list={[
                {name: "Masculino"},
                {name: "Feminino"},
                {name: "Unisex"}
              ]}
            />
            <FilterGroup 
              title="Estado"
              type="radio"
              list={[
                {name: "Novo"},
                {name: "Usado"}
              ]}
            />
          </aside>
          <ProductListing
            cols={3} 
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
                },
                {
                  id: 9,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 10,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 11,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 12,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 13,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 14,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                },
                {
                  id: 15,
                  name: "K-Swiss V8 - Masculino",
                  image: productCard,
                  category: "Tênis",
                  price: 200,
                  priceDiscount: 149.9,
                }
              ]
            }
          />
        </div>
      </section>
    </div>
  )
}
export default ProductListingPage