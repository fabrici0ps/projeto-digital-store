import { useParams } from "react-router-dom"

function ProductViewPage() {
  const { id } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        ProductViewPage.jsx
      </h1>
      <p>Product ID: {id}</p>
    </div>
  )
}
export default ProductViewPage