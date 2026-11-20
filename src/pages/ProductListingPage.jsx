import { useState, useEffect } from "react"
import FilterGroup from "../components/FilterGroup"
import ProductListing from "../components/ProductListing"

import FilterIcon from "../assets/filter.svg?react"
import CloseIcon from "../assets/close.svg?react"

function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    if (!isFilterOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsFilterOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFilterOpen])
  
  const filterGroups = (
    <>
      <FilterGroup
        title="Marca"
        list={[
          { name: "Addidas" },
          { name: "Calenciaga" },
          { name: "K-Swiss" },
          { name: "Nike" },
          { name: "Puma" },
        ]}
      />
      <FilterGroup
        title="Categoria"
        list={[
          { name: "Esporte e Lazer" },
          { name: "Casual" },
          { name: "Utilitário" },
          { name: "Corrida" },
        ]}
      />
      <FilterGroup
        title="Genêro"
        list={[
          { name: "Masculino" },
          { name: "Feminino" },
          { name: "Unisex" },
        ]}
      />
      <FilterGroup
        title="Estado"
        type="radio"
        list={[
          { name: "Novo" },
          { name: "Usado" },
        ]}
      />
    </>
  )

  return (
    <div className="w-full bg-lightgray-3/40 md:bg-transparent min-h-screen">
      <section className="container-layout">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 w-full py-6 md:py-10 text-darkgray-2 text-sm md:text-base">
          <p className="order-2 lg:order-1">
            <span className="font-bold">Resultados para Tênis - </span>
            389 produtos
          </p>
          <div className="order-1 md:order-2 flex items-center gap-3 md:gap-0 w-full md:w-auto">
            <div className="flex flex-1 lg:flex-initial items-center justify-between lg:justify-start gap-2 bg-white lg:bg-transparent border border-darkgray-2 rounded px-3.5 py-2.5 lg:p-4">
              <label 
                htmlFor="order"            
              >
                Ordenar por:
              </label>
            <select 
              id="order" 
              name="order" 
              className="pr-2 md:pr-10 bg-transparent outline-none text-darkgray-2 flex-1 lg:flex-initial"
            >
              <option value="" disabled>
                mais relevantes
              </option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
            </div>
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              aria-label="Abrir filtros"
              // aria-expanded={isFilterOpen}
              className="lg:hidden flex items-center justify-center w-12 h-12 shrink-0 rounded bg-primary text-white shadow-sm active:scale-95 transition"
            >
              <FilterIcon  />
            </button>
          </div>
        </div>
        <div className="text-darkgray-2 items-start grid grid-cols-1 md:grid-cols-[308px_minmax(0,1fr)] gap-7">
          <aside className="hidden md:block p-8 bg-white rounded">
            <p className="text-base font-bold pb-5">Filtrar por</p>
            <hr className="border-lightgray-2"/>
            {filterGroups}
          </aside>

          {isFilterOpen && (
            <div
              className="fixed inset-0 z-50 flex md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Filtrar produtos"
            >
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsFilterOpen(false)}
              />

              <aside className="relative z-10 w-[82%] max-w-sm h-full overflow-y-auto bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between pb-4">
                  <p className="text-base font-bold text-darkgray-1">
                    Filtrar por
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsFilterOpen(false)}
                    aria-label="Fechar filtros"
                    className="p-1 text-darkgray-2 hover:text-darkgray-1 text-xl leading-none"
                  >
                    X
                  </button>
                </div>
                <hr className="border-lightgray-2 mb-4" />
                {filterGroups}
              </aside>
            </div>
          )}

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