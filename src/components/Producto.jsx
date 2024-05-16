const Producto = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-transparent">
      <a className="block h-64 overflow-hidden" href={`/productos/${product.id}`}>
        <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
      </a>
      <div className="px-6 py-4">
        <div className="text-center font-bold text-xl mb-2 text-gray-400 font-sans uppercase">
          {product.name}
        </div>
        <p className="text-center font-semibold mt-2 text-gray-400">
          Desde {product.precioMin}
        </p>
      </div>
    </div>
  );
};

export default Producto;

