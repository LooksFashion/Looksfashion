import { useEffect, useState } from "react"
import AdminForm from "../components/AdminForm"
import { useNavigate } from "react-router-dom"

const Admin = () => {
  const [products, setProducts] = useState([])
  const [edit, setEdit] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("auth") !== "true") {
      navigate("/login")
    }

    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products")
    const data = await res.json()
    setProducts(data)
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    })
    fetchProducts()
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-heading mb-4">Painel Admin</h1>
      <AdminForm fetchProducts={fetchProducts} edit={edit} setEdit={setEdit} />
      <div className="grid grid-cols-2 gap-4 mt-6">
        {products.map((p) => (
          <div key={p._id} className="bg-primary p-4 rounded shadow">
            <img src={p.image} className="h-40 object-cover w-full mb-2" />
            <h2 className="font-bold">{p.name}</h2>
            <p>R${p.price.toFixed(2)}</p>
            <p className="text-sm">{p.description}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setEdit(p)} className="text-blue-600">Editar</button>
              <button onClick={() => deleteProduct(p._id)} className="text-red-600">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
