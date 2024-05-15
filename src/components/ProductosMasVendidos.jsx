import React from "react";
import Slider from "react-slick";
import Producto from "./Producto";
import productos from "../data/productos.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductosMasVendidos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: productos.length > 3 ? 4 : productos.length,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;
  return (
    <div className="slider-container">
      <SliderComponent {...settings} className="mb-8">
        {productos.map((product) => (
          <Producto product={product} key={product.id} />
        ))}
      </SliderComponent>
    </div>
  );
}
