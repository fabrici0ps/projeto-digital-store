import FilterGroup from "../components/FilterGroup"
import ProductListing from "../components/ProductListing"

function ProductListingPage() {

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
            <select id="order" name="order" className="pr-10 bg-transparent outline-none">
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
            cols={{
              default: 2,
              lg: 3
            }}
          />
        </div>
      </section>
    </div>
  )
}
export default ProductListingPage