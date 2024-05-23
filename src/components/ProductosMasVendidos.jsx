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
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,  // Default for larger screens
    responsive: [
      {
        breakpoint: 1024,  // Adjust as needed (medium screens)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,  // Adjust as needed (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,  // Adjust as needed (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider; // SSR fix
  return (
    <div className="slider-container px-4">
      <SliderComponent {...settings} className="mb-8">
        {productos.map((product) => (
          <Producto product={product} key={product.id} />
        ))}
      </SliderComponent>
    </div>
  );
}
