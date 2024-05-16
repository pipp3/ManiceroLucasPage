const Producto2 = ({ product,tipo }) => {
    let ruta
    switch (tipo) {
        case "Frutos Secos":
          ruta =`/FrutosSecos/${product.id}`;
          
          break;
        case "Frutas Deshidratadas":
            ruta = `/frutasDeshidratadas/${product.id}`;
          
          break;
        case "Dulces":
            ruta = `/Dulces/${product.id}`;
          break;
        case "Condimentos y Especias":
            ruta = `/condimentos-especias/${product.id}`;
          break;
        case "Hierbas y Tes":
            ruta = `/Hierbas-Tes/${product.id}`;
          break;
        case "Otros":
            ruta = "/images/banners/bannerOtros.png";
          break;
        default:
            ruta = "/images/defaultBanner.png";
          break;
      }
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure className="h-48 w-full">
        <img src={product.image} alt="Producto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-400 font-sans uppercase">
          {product.name}
        </h2>
        <p className="font-semibold text-xl text-gray-400">
          Desde: {product.precioMin}
        </p>
        <div className="card-actions justify-end">
          <a href={ruta}>
            <button className="btn bg-amber-800 hover:bg-amber-600 text-slate-100 font-bold uppercase">
              Ver Mas
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Producto2;
