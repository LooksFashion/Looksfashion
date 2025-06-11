import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="bg-white text-dark min-h-screen px-4 py-6">
      <h1 className="text-4xl font-heading text-center mb-8">Looks Fashion 👗</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Home
