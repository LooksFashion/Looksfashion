import Product from '../models/Product.js'

// GET all
export const getProducts = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 })
  res.json(products)
}

// POST
export const createProduct = async (req, res) => {
  const { name, price, image, description } = req.body
  const product = new Product({ name, price, image, description })
  await product.save()
  res.status(201).json(product)
}

// PUT
export const updateProduct = async (req, res) => {
  const { id } = req.params
  const updated = await Product.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
}

// DELETE
export const deleteProduct = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndDelete(id)
  res.json({ message: 'Produto removido' })
}
