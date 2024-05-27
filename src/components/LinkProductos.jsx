import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Productos = () => {
  const [mostrarLista, setMostrarLista] = useState(false);
  const timeoutRef = useRef(null);

  const tiposProductos = ["Frutos Secos", "Frutas Deshidratadas", "Dulces", "Condimentos y Especias", "Hierbas y Tes"];

  const link = "ml-5 px-2 py-3 rounded-lg";

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setMostrarLista(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMostrarLista(false);
    }, 200); // Delay en milisegundos antes de ocultar el menú
  };

  const handleSubMenuMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setMostrarLista(true);
  };

  const handleSubMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMostrarLista(false);
    }, 200); // Delay en milisegundos antes de ocultar el menú
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" className={`${link} flex items-center justify-center`}>Productos
        <FontAwesomeIcon className='ml-2' icon={faCaretDown} />
      </a>
      
      {mostrarLista && (
        <div className="absolute z-10 bg-white mt-2 p-2 rounded-lg shadow-lg" onMouseEnter={handleSubMenuMouseEnter} onMouseLeave={handleSubMenuMouseLeave}>
          {tiposProductos.map((producto, index) => (
            <a key={index} href={`/${producto}`} className="block px-4 py-2 text-gray-400 hover:bg-slate-200 hover:text-yellow-600">{producto}</a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;




