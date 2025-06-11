const ProductCard = ({ product }) => {
  const { name, price, image, description } = product

  const message = `Olá! Tenho interesse no produto: ${name} - R$${price.toFixed(2)}. Poderia me informar o frete?`
  const waLink = `https://wa.me/5567992878774?text=${encodeURIComponent(message)}`

  return (
    <div className="bg-primary rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-heading">{name}</h2>
      <p className="text-dark font-bold mb-2">R${price.toFixed(2)}</p>
      <p className="text-sm mb-4 text-center">{description}</p>
      <a
        href={waLink}
        target="_blank"
        className="bg-dark text-white px-4 py-2 rounded hover:bg-gold transition-all"
      >
        Comprar via WhatsApp
      </a>
    </div>
  )
}

export default ProductCard
