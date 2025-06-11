import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => res.send('🌐 API Looks Fashion rodando'))

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
